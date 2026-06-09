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
  utter.rate = opts.rate ?? 0.8
  utter.pitch = opts.pitch ?? 1.0
  if (opts.lang) utter.lang = opts.lang

  // Try to pick a friendly voice if available
  try {
    const voices = synth.getVoices() || []
    const preferFemaleByName = (v: SpeechSynthesisVoice) => /Google US English/i.test(v.name || '');

    // Prefer voices that match requested language (if provided), then prefer female by name.
    const langPrefix = opts.lang ? opts.lang.slice(0, 2).toLowerCase() : null
    let candidates = voices
    if (langPrefix) {
      const matched = voices.filter((v) => (v.lang || '').toLowerCase().startsWith(langPrefix))
      if (matched.length) candidates = matched
    }

    let preferred = candidates.find(preferFemaleByName) || candidates[0]
    // fallback: any female voice regardless of lang
    if (!preferred) preferred = voices.find(preferFemaleByName) || voices[0]
    if (preferred) utter.voice = preferred
  } catch (e) {
    // ignore
  }

  if (!synth.getVoices || synth.getVoices().length === 0) {
    const onVoices = () => {
      try {
        const voices2 = synth.getVoices() || []
        const preferFemaleByName = (v: SpeechSynthesisVoice) => /Google US English/i.test(v.name || '');
        const langPrefix = opts.lang ? opts.lang.slice(0, 2).toLowerCase() : null
        let candidates = voices2
        if (langPrefix) {
          const matched = voices2.filter((v) => (v.lang || '').toLowerCase().startsWith(langPrefix))
          if (matched.length) candidates = matched
        }
        let preferred2 = candidates.find(preferFemaleByName) || candidates[0]
        if (!preferred2) preferred2 = voices2.find(preferFemaleByName) || voices2[0]
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
