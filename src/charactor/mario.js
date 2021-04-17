export default function Mario(app, charactorRescources, { left, right, jump }) {
	const mario = new PIXI.Sprite(charactorRescources.texture)
	const ground = window.innerHeight - 150
	mario.width = 50
	mario.height = 50

	mario.x = 50
	mario.y = ground
	mario.vx = 0
	mario.vy = 0

	app.stage.addChild(mario)

	left.press = () => {
		mario.vx = -6
		//mario.vy = 0
	}

	left.release = () => {
		if (!right.isDown && mario.vy === 0) {
			mario.vx = 0
		}
	}

	right.press = () => {
		mario.vx = 6
		//mario.vy = 0
	}

	right.release = () => {
		if (!left.isDown && mario.vy === 0) {
			mario.vx = 0
		}
	}

	jump.press = () => {
		if (mario.y === ground) {
			mario.vy = -8
		}
	}

	jump.release = () => {
		mario.vy = 8
	}

	app.ticker.add((d) => {
		if (mario.y > ground) {
			mario.vy = 0
			mario.y = ground

			if (jump.isDown && !right.isDown && !left.isDown) {
				mario.vx = 0
			}
			if (!jump.isDown && !right.isDown && !left.isDown) {
				mario.vx = 0
			}
		}

		if (mario.y < ground - 150) {
			mario.vy = 8
		}

		gameLoop(d)
	})
	let state = play
	function gameLoop(delta) {
		state(delta)
	}

	function play(delta) {
		mario.x += mario.vx
		mario.y += mario.vy
	}
}
