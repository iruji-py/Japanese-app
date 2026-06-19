# Tabi

A dark, scenario-first Japanese learning prototype for travellers. It includes ten practical situations, Japanese-only vocabulary, phrase and dialogue audio, and multi-moment simulations that test both listening comprehension and the correct reply before awarding XP.

The current curriculum contains 64 travel words, 50 useful phrases, 50 custom scenario moments, and 100 two-part questions. Vocabulary cards include pronunciation beats, while every phrase has a plain-English breakdown and a real-world use example.

## Run it

Open `index.html` directly, or serve the folder locally:

```powershell
python -m http.server 4173
```

Then visit `http://127.0.0.1:4173`.

Progress is stored in the browser with `localStorage`; there is no account or backend yet.

## Japanese audio

Audio is native-recording-first. Reviewed recordings listed in `nativeAudioManifest` are played when available. Otherwise, Tabi selects the highest-ranked Japanese `SpeechSynthesis` voice on the device and sends it kana/kanji—not romaji. English voices are never used; the learner sees a warning when no Japanese voice is available.

See `audio/README.md` for the recording workflow.
