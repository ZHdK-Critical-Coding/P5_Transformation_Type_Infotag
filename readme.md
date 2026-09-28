# P5.js: Infotag

[Deutsch](README_DE.md)

A small tool for animated text tags: layers of the text with growing,
alternating black and white outlines are stacked on top of each other.
Text, speed and interval can be changed, and one loop of the animation can
be exported as a GIF. Useful for signage, social media loops or as a
starting point for type animation.

## Installation

Requirements: a current browser.

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not
used).

## How to Run

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Enter a text and press **UPDATE**.
3. Adjust **Speed** and **Interval**.
4. Press **EXPORT one Iteration as GIF** to download the animation.

## Coding Help

- **`sketch.js` → `setup()`**: creates the 800 × 300 canvas and the
  controls with p5 DOM functions: text input + **UPDATE** button (sets
  `writer`), **Speed** slider `s1` (1–10), **Interval** slider `s2`
  (1–100 frames) and the export button. Change the canvas size here.
- **`draw()`**: every `s2` frames a new `Layer` is added and `mode`
  switches between black and white. If an export was requested, it starts
  at that moment with `saveGif('mySketch', s2 * 2, { units: 'frames' })`,
  i.e. exactly one black/white cycle.
- **`Layer`**: draws the text centred with the fill in one colour and the
  outline in the other. `borderWidth` grows by `s1` every frame; when it
  exceeds the canvas height the layer is removed. Font size (`height / 2`)
  and position are set in `draw()`.
- A commented-out `keyPressed()` shows how to type the text directly on
  the canvas instead of using the input field.
