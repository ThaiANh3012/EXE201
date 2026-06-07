export type SpeakOptions = {
  rate?: number
  pitch?: number
  lang?: string
}

export function speakText(text: string, opts: SpeakOptions = {}) {
  if (typeof window === 'undefined' || !(window as any).speechSynthesis) return
  const synth = (window as any).speechSynthesis as SpeechSynthesis
  synth.cancel()

  const utter = new SpeechSynthesisUtterance(text)
  utter.rate = opts.rate ?? 0.75
  utter.pitch = opts.pitch ?? 1.2
  if (opts.lang) utter.lang = opts.lang

  // Try to pick a friendly voice if available
  try {
    const voices = synth.getVoices()
    const preferFemale = (v: SpeechSynthesisVoice) => /female|woman|girl|fem|female voice/i.test(v.name || '')
    if (voices && voices.length) {
      // prefer female voices
      const preferred = voices.find(preferFemale) || voices.find((v) => /vi|vietnamese/i.test(v.lang)) || voices[0]
      if (preferred) utter.voice = preferred
    }
  } catch (e) {
    // ignore
  }

  if (!synth.getVoices || synth.getVoices().length === 0) {
    const onVoices = () => {
      try {
        const voices2 = synth.getVoices()
        const preferred2 = voices2.find((v) => /female|woman|girl|fem/i.test(v.name || '')) || voices2[0]
        if (preferred2) utter.voice = preferred2
      } catch (err) {
        // ignore
      }
      synth.speak(utter)
      synth.removeEventListener('voiceschanged', onVoices)
    }
    synth.addEventListener('voiceschanged', onVoices)
    return
  }

  synth.speak(utter)
}

export function stopSpeaking() {
  if (typeof window === 'undefined' || !(window as any).speechSynthesis) return
  ;(window as any).speechSynthesis.cancel()
}
