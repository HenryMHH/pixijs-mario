export default function Mario(
	app,
	charactorRescources,
	{ left, right, jump, down }
) {
	const mario = new PIXI.Sprite(
		charactorRescources['assets/mario-standing-r.png'].texture
	)

	//const mario = PIXI.Sprite.from('assets/mario-standing-r.png')
	const ground = window.innerHeight - 165
	// mario.width = 50
	// mario.height = 50

	mario.x = 50
	mario.y = ground
	mario.vx = 0
	mario.vy = 0

	app.stage.addChildAt(mario, 0)

	left.press = () => {
		mario.texture = charactorRescources['assets/mario-standing-l.png'].texture
		//PIXI.Texture.from('assets/mario-standing-l.png')
		mario.vx = -6
		//mario.vy = 0
	}

	left.release = () => {
		if (!right.isDown && mario.vy === 0) {
			mario.vx = 0
		}
	}

	right.press = () => {
		mario.texture = charactorRescources['assets/mario-standing-r.png'].texture
		mario.vx = 6

		//mario.vy = 0
	}

	right.release = () => {
		if (!left.isDown && mario.vy === 0) {
			mario.vx = 0
		}
	}

	down.press = () => {
		if (
			mario.texture ===
			charactorRescources['assets/mario-standing-l.png'].texture
		) {
			mario.texture = charactorRescources['assets/mario-sit-l.png'].texture
		}
		if (
			mario.texture ===
			charactorRescources['assets/mario-standing-r.png'].texture
		) {
			mario.texture = charactorRescources['assets/mario-sit-r.png'].texture
		}
	}

	down.release = () => {
		if (
			mario.texture === charactorRescources['assets/mario-sit-l.png'].texture
		) {
			mario.texture = charactorRescources['assets/mario-standing-l.png'].texture
		}

		if (
			mario.texture === charactorRescources['assets/mario-sit-r.png'].texture
		) {
			mario.texture = charactorRescources['assets/mario-standing-r.png'].texture
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

	let time = Number()
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
		if (mario.x >= 950) {
			mario.x = 950
		}

		if (mario.x <= 0) {
			mario.x = 0
		}

		if (mario.y < ground - 150) {
			mario.vy = 8
		}

		gameLoop()
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
