let layers = []
let mode = 'black'
let writer = 'INFOTAG'
let triggerExport = false
let s1, s2;
function setup() {
  createCanvas(800, 300);
  noSmooth();
  let c = createDiv().class('container')
  let c1 = createDiv().parent(c)
  let c2 = createDiv().parent(c)
  let c3 = createDiv().parent(c)
  let c4 = createDiv().parent(c)

  let i = createInput('INFOTAG').parent(c1)
  createButton('UPDATE').parent(c1).mouseClicked(() => {
    writer = i.value()
  })
  createSpan('Speed').parent(c2)
  createSpan('Interval').parent(c3)
  s1 = createSlider(1,10,1,1).parent(c2)
  s2 = createSlider(1,100,10,1).parent(c3)
  createButton('EXPORT one Iteration as GIF').parent(c4).mouseClicked(() => {
    triggerExport = true
  })
}

function draw() {
  background(220);
  if (frameCount % s2.value() === 0) {
    layers.push(new Layer(mode, writer))
    mode = mode === 'black' ? 'white' : 'black'
    if (triggerExport) {
      triggerExport = false
      saveGif('mySketch', s2.value() * 2, {units: 'frames'} );
    }
  }
  layers = layers.filter(l => !l.dead)

  layers.forEach(layer => layer.draw())
}

/*function keyPressed() {
  if (key === 'Backspace') {
    writer = writer.slice(0, -1)
  } else if (key == 'Enter') {
    writer = ""
  } else if (key != 'Shift') {
    writer += key
  }
}*/

class Layer {
  constructor(color, text) {
    this.borderWidth = 0
    this.color = color
    this.fill = color === 'black' ? 'white' : 'black'
    this.text = text
    this.dead = false
  }

  draw() {
    push();
    fill(this.fill)
    stroke(this.color)
    strokeWeight(this.borderWidth)
    textSize(height / 2)
    textAlign(CENTER)
    text(this.text, width / 2, height / 2 + (textSize() / 3))
    this.borderWidth+=s1.value()
    this.dead = this.borderWidth > height 
    pop();
  }
}
