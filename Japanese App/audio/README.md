# Reviewed Japanese recordings

Native-speaker recordings are the preferred production audio source because they provide consistent pitch accent, rhythm, and natural phrasing across every browser and device.

Use one reviewed `.mp3` recording per vocabulary item, phrase, or scenario line. Keep a short amount of silence at each end, record one consistent Tokyo-Japanese speaker, and normalise loudness across the set.

Suggested paths:

```text
audio/restaurant/vocabulary-01.mp3
audio/restaurant/phrase-01.mp3
audio/restaurant/scene.mp3
```

After adding a file, map its lesson key to its path in `nativeAudioManifest` near the top of `app.js`. The player will always prefer that recording and will only use the device's Japanese voice when no reviewed recording is mapped.
