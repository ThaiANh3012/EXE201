export type VocabItem = {
  id: number
  word: string
  meaningVi: string
  ipa?: string
  category?: 'animals' | 'basic'
  imageSrc?: string
  videoSrc?: string
  example?: string
  storyEn?: string
  storyVi?: string
  cardSubtitleEn?: string
  cardTitleVi?: string
  cardNo?: number
  cardTotal?: number
  rarity?: string
}

export const VOCAB: VocabItem[] = [
  { id: 1, word: 'Pencil', meaningVi: 'Bút chì', ipa: "/'pɛn.səl/", category: 'basic', imageSrc: new URL('../assets/Flashcard1.png', import.meta.url).href },
  { id: 2, word: 'Pen', meaningVi: 'Bút mực', ipa: '/pen/', category: 'basic', imageSrc: new URL('../assets/Flashcard2.png', import.meta.url).href },
  { id: 3, word: 'Eraser', meaningVi: 'Cục tẩy', ipa: "/ɪ'reɪ.zər/", category: 'basic', imageSrc: new URL('../assets/Flashcard3.png', import.meta.url).href , videoSrc: new URL('../assets/hi_chào_các_bạn_mình_là_cục_tẩy.mp4', import.meta.url).href },
  { id: 4, word: 'Notebook', meaningVi: 'Tập vở', ipa: "/'noʊt.bʊk/", category: 'basic', imageSrc: new URL('../assets/Flashcard4.png', import.meta.url).href },
  { id: 5, word: 'Ruler', meaningVi: 'Thước kẻ', ipa: "/'ru:.lər/", category: 'basic', imageSrc: new URL('../assets/Flashcard5.png', import.meta.url).href },
  { id: 6, word: 'Book', meaningVi: 'Sách', ipa: '/bʊk/', category: 'basic', imageSrc: new URL('../assets/Flashcard6.png', import.meta.url).href },
  { id: 7, word: 'Notebook Label', meaningVi: 'Nhãn vở', ipa: "/'noʊt.bʊk 'leɪ.bəl/", category: 'basic', imageSrc: new URL('../assets/Flashcard7.png', import.meta.url).href },
  { id: 8, word: 'Backpack', meaningVi: 'Ba lô', ipa: "/'bæk.pæk/", category: 'basic', imageSrc: new URL('../assets/Flashcard8.png', import.meta.url).href },
  { id: 9, word: 'Pencil case', meaningVi: 'Hộp bút', ipa: "/ˈpensəl keɪs/", category: 'basic', imageSrc: new URL('../assets/Flashcard9.png', import.meta.url).href },
  { id: 10, word: 'Marker', meaningVi: 'Bút lông', ipa: "/'mɑ:.kə/", category: 'basic', imageSrc: new URL('../assets/Flashcard10.png', import.meta.url).href },
  { id: 11, word: 'Watercolor', meaningVi: 'Màu nước', ipa: "/'wɔ:tə.kʌl.ə/", category: 'basic', imageSrc: new URL('../assets/Flashcard11.png', import.meta.url).href },
  { id: 12, word: 'Highlighter', meaningVi: 'Bút dạ quang', ipa: "/'haɪ.laɪ.tər/", category: 'basic', imageSrc: new URL('../assets/Flashcard12.png', import.meta.url).href },
  { id: 13, word: 'Crayon', meaningVi: 'Bút sáp màu', ipa: "/'kreɪ.ɒn/", category: 'basic', imageSrc: new URL('../assets/Flashcard13.png', import.meta.url).href },
  { id: 14, word: 'Colored pencil', meaningVi: 'Bút chì màu', ipa: "/'kʌl.əd 'pen.səl/", category: 'basic', imageSrc: new URL('../assets/Flashcard14.png', import.meta.url).href },
  { id: 15, word: 'Sharpener', meaningVi: 'Đồ gọt bút chì', ipa: "/'ʃɑ:r.pən.ə/", category: 'basic', imageSrc: new URL('../assets/Flashcard15.png', import.meta.url).href },
  { id: 16, word: 'Glue', meaningVi: 'Keo dán', ipa: '/ɡlu:/', category: 'basic', imageSrc: new URL('../assets/Flashcard16.png', import.meta.url).href },
  { id: 17, word: 'Scissors', meaningVi: 'Cây kéo', ipa: "/'sɪz.əz/", category: 'basic', imageSrc: new URL('../assets/Flashcard17.png', import.meta.url).href },
  { id: 18, word: 'Paper', meaningVi: 'Giấy', ipa: "/'peɪ.pə/", category: 'basic', imageSrc: new URL('../assets/Flashcard18.png', import.meta.url).href },
  { id: 19, word: 'Desk', meaningVi: 'Bàn học', ipa: '/desk/', category: 'basic', imageSrc: new URL('../assets/Flashcard19.png', import.meta.url).href },
  { id: 20, word: 'Chair', meaningVi: 'Ghế', ipa: "/tʃeər/", category: 'basic', imageSrc: new URL('../assets/Flashcard20.png', import.meta.url).href },
  { id: 21, word: 'Dictionary', meaningVi: 'Từ điển', ipa: "/'dɪk.ʃə.ner.i/", category: 'basic', imageSrc: new URL('../assets/Flashcard21.png', import.meta.url).href },
  { id: 22, word: 'Calculator', meaningVi: 'Máy tính', ipa: "/'kæl.kjə.leɪ.tʃə/", category: 'basic', imageSrc: new URL('../assets/Flashcard22.png', import.meta.url).href },
  { id: 23, word: 'Whiteboard', meaningVi: 'Bảng trắng', ipa: "/'waɪt.bɔ:rd/", category: 'basic', imageSrc: new URL('../assets/Flashcard23.png', import.meta.url).href },
  { id: 24, word: 'Blackboard', meaningVi: 'Bảng đen', ipa: "/'blæk.bɔ:rd/", category: 'basic', imageSrc: new URL('../assets/Flashcard24.png', import.meta.url).href },
  { id: 25, word: 'Chalk', meaningVi: 'Phấn', ipa: "/tʃɔ:k/", category: 'basic', imageSrc: new URL('../assets/Flashcard25.png', import.meta.url).href },
  { id: 26, word: 'Paper clip', meaningVi: 'Kẹp giấy', ipa: "/'peɪ.pə klɪp/", category: 'basic', imageSrc: new URL('../assets/Flashcard26.png', import.meta.url).href },
  { id: 27, word: 'Compass', meaningVi: 'Com-pa', ipa: "/'kʌm.pəs/", category: 'basic', imageSrc: new URL('../assets/Flashcard27.png', import.meta.url).href },
  { id: 28, word: 'Sticky note', meaningVi: 'Giấy ghi chú', ipa: "/'stɪk.i noʊt/", category: 'basic', imageSrc: new URL('../assets/Flashcard28.png', import.meta.url).href },
  { id: 29, word: 'Protractor', meaningVi: 'Thước đo độ', ipa: "/prə'træk.tə/", category: 'basic', imageSrc: new URL('../assets/Flashcard29.png', import.meta.url).href },
  { id: 30, word: 'Stapler', meaningVi: 'Dập ghim', ipa: "/'steɪ.plə/", category: 'basic', imageSrc: new URL('../assets/Flashcard30.png', import.meta.url).href },
  { id: 31, word: 'Bookmark', meaningVi: 'Thẻ đánh dấu sách', ipa: "/'bʊk.mɑ:rk/", category: 'basic', imageSrc: new URL('../assets/Flashcard31.png', import.meta.url).href },
  { id: 32, word: 'Binder', meaningVi: 'Bìa còng', ipa: "/'baɪn.dər/", category: 'basic', imageSrc: new URL('../assets/Flashcard32.png', import.meta.url).href },
  { id: 33, word: 'Correction tape', meaningVi: 'Băng xóa', ipa: "/kə'rek.ʃən teɪp/", category: 'basic', imageSrc: new URL('../assets/Flashcard33.png', import.meta.url).href },
  { id: 34, word: 'Textbook', meaningVi: 'Sách giáo khoa', ipa: "/'tekst.bʊk/", category: 'basic', imageSrc: new URL('../assets/Flashcard34.png', import.meta.url).href },
  { id: 35, word: 'Workbook', meaningVi: 'Sách bài tập', ipa: "/'wɜ:k.bʊk/", category: 'basic', imageSrc: new URL('../assets/Flashcard35.png', import.meta.url).href },
  { id: 36, word: 'Magnifying glass', meaningVi: 'Kính lúp', ipa: "/'mæɡ.nɪ.faɪ.ɪŋ ɡlɑ:s/", category: 'basic', imageSrc: new URL('../assets/Flashcard36.png', import.meta.url).href },
  { id: 37, word: 'Globe', meaningVi: 'Quả địa cầu', ipa: '/ɡloʊb/', category: 'basic', imageSrc: new URL('../assets/Flashcard37.png', import.meta.url).href },
  { id: 38, word: 'Tape', meaningVi: 'Cuộn băng keo', ipa: '/teɪp/', category: 'basic', imageSrc: new URL('../assets/Flashcard38.png', import.meta.url).href },
  { id: 39, word: 'Locker', meaningVi: 'Tủ đựng đồ', ipa: "/'lɑ:k.ə/", category: 'basic', imageSrc: new URL('../assets/Flashcard39.png', import.meta.url).href },
  { id: 40, word: 'Sticker', meaningVi: 'Hình dán', ipa: "/'stɪk.ə/", category: 'basic', imageSrc: new URL('../assets/Flashcard40.png', import.meta.url).href },
  { id: 41, word: 'Map', meaningVi: 'Bản đồ', ipa: '/mæp/', category: 'basic', imageSrc: new URL('../assets/Flashcard41.png', import.meta.url).href },
  { id: 42, word: 'Name tag', meaningVi: 'Thẻ tên', ipa: '/neɪm tæɡ/', category: 'basic', imageSrc: new URL('../assets/Flashcard42.png', import.meta.url).href },
  { id: 43, word: 'Correction Pen', meaningVi: 'Bút xóa nước', ipa: "/kə'rek.ʃən pen/", category: 'basic', imageSrc: new URL('../assets/Flashcard43.png', import.meta.url).href },
  { id: 44, word: 'Graph paper', meaningVi: "Giấy kẻ ô", ipa: "/ɡræf 'peɪ.pə/", category: 'basic', imageSrc: new URL('../assets/Flashcard44.png', import.meta.url).href },
  { id: 45, word: 'Flashcard', meaningVi: 'Thẻ học từ vựng', ipa: "/'flæʃ.kɑ:rd/", category: 'basic', imageSrc: new URL('../assets/Flashcard45.png', import.meta.url).href },
]

export function getVocabById(id: string | undefined): VocabItem | undefined {
  if (!id) return undefined
  return VOCAB.find((v) => v.id.toString() === id)
}

export function getRandomVocab(exceptId?: string): VocabItem {
  if (VOCAB.length === 0) {
    throw new Error('VOCAB is empty')
  }

  if (!exceptId) return VOCAB[Math.floor(Math.random() * VOCAB.length)]
  const candidates = VOCAB.filter((v) => v.id.toString() !== exceptId)
  const list = candidates.length > 0 ? candidates : VOCAB
  return list[Math.floor(Math.random() * list.length)]
}
