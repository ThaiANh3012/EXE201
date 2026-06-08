import heroImage from './assets/Flashcard1.png'
import { VOCAB, type VocabItem } from './data/vocab'
import './App.css'
import { useEffect, useState } from 'react'
import { speakText, stopSpeaking } from './lib/speech'
import { QRCodeSVG } from 'qrcode.react'
function App() {
  const imageCount = VOCAB.filter((item) => item.imageSrc).length
  const [modalId, setModalId] = useState<string | null>(null)

  // Thêm đoạn này để đọc #id từ thanh địa chỉ khi vừa load trang
  useEffect(() => {
    const hash = window.location.hash
    if (hash.startsWith('#id=')) {
      const idFromUrl = hash.replace('#id=', '')
      setModalId(idFromUrl)
      // speak the word when the page is loaded directly with a hash (scan or reload)
      const found = VOCAB.find((v) => v.id.toString() === idFromUrl);
    if (found) {
      // ĐOẠN NÀY LÀ CÁI MỚI - THAY THẾ CHO CÁI CŨ
      const playOnFirstInteraction = () => {
        try { stopSpeaking(); } catch {}
        try { speakText(found.word, { rate: 0.7, pitch: 1.2, lang: 'en-US' }); } catch {}
        
        // Sau khi đọc xong thì gỡ sự kiện để không bị lỗi
        document.removeEventListener('click', playOnFirstInteraction);
        document.removeEventListener('touchstart', playOnFirstInteraction);
      };
    }
  }
    
    // Lắng nghe thêm sự kiện người dùng bấm "Back" / "Forward" trên trình duyệt
    const handleHashChange = () => {
      const currentHash = window.location.hash
      if (currentHash.startsWith('#id=')) {
        const newId = currentHash.replace('#id=', '')
        setModalId(newId)
        const found = VOCAB.find((v) => v.id.toString() === newId)
        if (found) {
          try { stopSpeaking() } catch {}
          try { speakText(found.word, { rate: 0.7, pitch: 1.2, lang: 'en-US' }) } catch {}
        }
      } else {
        setModalId(null)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])
  return (
    <div className="shell">
      <header className="hero">
        <div className="heroCopy">
          <div className="eyebrow">Vocabulary gallery</div>
          <h1>Từ vựng có ảnh</h1>
          <p>
            Giao diện đã được rút gọn còn phần dữ liệu cần thiết: từ, nghĩa tiếng Việt và hình ảnh hiển thị trực tiếp.
          </p>

          <div className="heroStats">
            <div>
              <strong>{VOCAB.length}</strong>
              <span>Từ vựng</span>
            </div>
            <div>
              <strong>{imageCount}</strong>
              <span>Có ảnh sẵn</span>
            </div>
          </div>
        </div>

        <div className="heroArt" aria-hidden="true">
          <img src={heroImage} alt="" />
        </div>
      </header>

      <main className="content">
        <section className="sectionHeading">
          <div>
            <div className="eyebrow">Danh sách</div>
            <h2>Từ vựng và hình minh hoạ</h2>
          </div>
        </section>

        <section className="vocabGrid" aria-label="Danh sách từ vựng">
          {VOCAB.map((item) => (
            <VocabCard key={item.id} item={item} onShowCard={(id) => setModalId(id)} compact />
          ))}
        </section>

        {modalId && (
          <div className="modal" role="dialog" aria-modal="true">
            <div className="modalContent">
              <button
                className="modalClose"
                onClick={() => {
                  setModalId(null)
                  try { stopSpeaking() } catch {}
                  try {
                    window.history.replaceState(null, '', window.location.pathname + window.location.search)
                  } catch (e) {
                    // ignore
                  }
                }}
              >
                ✕
              </button>
              <VocabDetail id={modalId} onClose={() => {
                  setModalId(null)
                  try { stopSpeaking() } catch {}
                  try { window.history.replaceState(null, '', window.location.pathname + window.location.search) } catch {}
                }} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

function VocabCard({ item, onShowCard, compact }: { item: VocabItem; onShowCard?: (id: string) => void; compact?: boolean }) {
  const [showQr, setShowQr] = useState(false)

  function handleSpeak() {
    // speak the word (slower, female-preferred voice)
    speakText(item.word, { rate: 0.7, pitch: 1.2, lang: 'en-US' })
  }

  return (
    <article className="vocabCard">
      <div className="vocabMedia">
        {item.imageSrc ? (
          <img
            className="vocabImage"
            src={item.imageSrc}
            alt={item.word}
            loading="lazy"
            role="button"
            tabIndex={0}
            onClick={() => {
              onShowCard?.(item.id.toString())
              try {
                window.location.hash = `id=${item.id}`
              } catch (e) {
                // ignore
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onShowCard?.(item.id.toString())
                try {
                  window.location.hash = `id=${item.id}`
                } catch (err) {
                  // ignore
                }
              }
            }}
          />
        ) : (
          <div className="vocabFallback" aria-hidden="true" />
        )}
      </div>

      {compact ? null : (
      <div className="vocabMeta">
        <div className="vocabTopRow">
          <h3>{item.word}</h3>
          <span className="vocabChip">{item.category ?? 'other'}</span>
        </div>

        {item.ipa && <p className="vocabIpa">{item.ipa}</p>}
        <p className="vocabMeaning">{item.meaningVi}</p>

        <div className="vocabControls">
          <button className="iconBtn" onClick={handleSpeak} title="Speak">🔊</button>
          <button
            className="iconBtn"
            onClick={() => {
              // create deep link to this card via hash
              const link = `${window.location.origin}${window.location.pathname}#id=${item.id}`
              void navigator.clipboard?.writeText(link)
              setShowQr((s) => !s)
              onShowCard?.(item.id.toString())
            }}
            title="Show QR / Open card"
          >
            🔗
          </button>
        </div>

        {showQr && (
          <div className="qrWrap">
            <QRCodeSVG value={`${window.location.origin}${window.location.pathname}#id=${item.id}`} />
            <div className="qrHint">Scan to open this card (or link copied)</div>
          </div>
        )}

        {(item.cardSubtitleEn || item.cardTitleVi || item.rarity) && (
          <div className="vocabDetails">
            {item.cardSubtitleEn && <span>{item.cardSubtitleEn}</span>}
            {item.cardTitleVi && <strong>{item.cardTitleVi}</strong>}
            {item.rarity && <span>{item.rarity}</span>}
          </div>
        )}

        {item.example && <p className="vocabExample">{item.example}</p>}
      </div>
      )}
    </article>
  )
}

function VocabDetail({ id, onClose }: { id: string; onClose?: () => void }) {
  const item = VOCAB.find((v) => v.id.toString() === id)

  if (!item) return <div>Không tìm thấy từ</div>

  return (
    <div className="vocabDetail">
      {/* Vẫn giữ nguyên cột ảnh bên trái */}
      <div className="vocabDetailMedia">
        {item.imageSrc ? (
          <img src={item.imageSrc} alt={item.word} />
        ) : (
          <div className="vocabFallbackLarge" />
        )}
      </div>
      
      {/* Cột thông tin bên phải */}
      <div className="vocabDetailMeta">
        <h2>{item.word}</h2>
        {item.ipa && <p className="vocabIpa">{item.ipa}</p>}
        <p className="vocabMeaning">{item.meaningVi}</p>

        {/* Video nằm ở đây, nhỏ gọn ngay trên nút Play */}
        {item.videoSrc && (
          <video 
            src={item.videoSrc} 
            controls 
            playsInline
            className="vocabVideoCompact"
          />
        )}
        
        <div className="vocabDetailActions">
          <button onClick={() => speakText(item.word, { rate: 0.7, pitch: 1.2, lang: 'en-US' })}>
            🔊 Play
          </button>
        </div>

        <div className="vocabDetailQR">
          <QRCodeSVG value={`${window.location.origin}${window.location.pathname}#id=${item.id}`} />
          <div className="qrHint">Scan to open this card</div>
        </div>  
      </div>
    </div>
  )
}

export default App
