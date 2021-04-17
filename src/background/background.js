export default function Background(app, rescources) {
	const background = new PIXI.Sprite(rescources.texture)
	background.width = window.innerWidth
	background.height = window.innerHeight

	app.stage.addChildAt(background, 0)
}
