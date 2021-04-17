import mario from './charactor/mario'
import keyboard from './movement/movement'
import background from './background/background'

const app = new PIXI.Application()
document.body.appendChild(app.view)
app.renderer.view.style.position = 'absolute'
app.renderer.view.style.display = 'block'
app.renderer.autoResize = true
app.renderer.resize(window.innerWidth, window.innerHeight)
// load the texture we need

app.loader
	.add(['assets/mario.png', 'assets/background.jpg'])
	.load((loader, resources) => {
		mario(app, resources['assets/mario.png'], keyboard())
		background(app, resources['assets/background.jpg'])
	})
