export default function Background(app, rescources) {
	const background = new PIXI.Sprite(rescources.texture)
	background.width = 1000
	background.height = 700

	app.stage.addChild(background)
}
