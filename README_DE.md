# P5.js: Infotag

[English](readme.md)

Ein kleines Tool für animierte Text-Tags: Ebenen des Textes mit
wachsenden, abwechselnd schwarzen und weissen Konturen werden übereinander
gestapelt. Text, Geschwindigkeit und Intervall lassen sich ändern, und ein
Durchlauf der Animation kann als GIF exportiert werden. Nützlich für
Signaletik, Social-Media-Loops oder als Ausgangspunkt für
Schriftanimationen.

## Installation

Voraussetzungen: ein aktueller Browser.

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet).

## Ausführen

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. Einen Text eingeben und auf **UPDATE** klicken.
3. **Speed** und **Interval** einstellen.
4. Auf **EXPORT one Iteration as GIF** klicken, um die Animation
   herunterzuladen.

## Coding-Hilfe

- **`sketch.js` → `setup()`**: erstellt die Zeichenfläche (800 × 300) und
  die Bedienelemente mit p5-DOM-Funktionen: Texteingabe + Knopf
  **UPDATE** (setzt `writer`), Slider **Speed** `s1` (1–10), Slider
  **Interval** `s2` (1–100 Frames) und den Export-Knopf. Die Grösse der
  Zeichenfläche hier ändern.
- **`draw()`**: Alle `s2` Frames kommt eine neue `Layer` dazu und `mode`
  wechselt zwischen Schwarz und Weiss. Wurde ein Export angefordert,
  startet er genau in diesem Moment mit
  `saveGif('mySketch', s2 * 2, { units: 'frames' })` – also genau ein
  Schwarz/Weiss-Zyklus.
- **`Layer`**: zeichnet den Text zentriert, die Füllung in der einen, die
  Kontur in der anderen Farbe. `borderWidth` wächst pro Frame um `s1`;
  wird sie grösser als die Höhe der Zeichenfläche, wird die Ebene entfernt.
  Schriftgrösse (`height / 2`) und Position werden in `draw()` gesetzt.
- Ein auskommentiertes `keyPressed()` zeigt, wie man den Text direkt auf
  der Zeichenfläche statt im Eingabefeld tippen kann.
