import mario from './charactor/mario'
import keyboard from './movement/movement'
import background from './background/background'

const app = new PIXI.Application({ width: 1000, height: 700 })
document.body.appendChild(app.view)
// app.renderer.view.style.position = 'absolute'
// app.renderer.view.style.display = 'block'
// app.renderer.autoResize = true
// app.renderer.resize(1000, 700)
// load the texture we need

app.loader
	.add([
		'assets/mario-standing-r.png',
		'assets/mario-standing-l.png',
		'assets/background.jpg',
		'assets/mario-sit-l.png',
		'assets/mario-sit-r.png',
	])
	.load((loader, resources) => {
		background(app, resources['assets/background.jpg'])
		mario(app, resources, keyboard())
	})
