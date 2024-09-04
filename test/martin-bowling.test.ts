import { Game } from "../src/martin-bowling-game";

describe("bowlingGame",  () => {
	test("canRoll", () => {
		const game = new Game();
		game.roll(0);
	});

	function rollMany(game: Game, n: number, pins: number) {
		for (let i = 0; i < n; i++) {
			game.roll(pins);
		}
	}

	function rollSpare(game: Game) {
		for (let i = 0; i < 2; i++) {
			game.roll(5);
		}
	}

	function rollStrike(game: Game) {
		for (let i = 0; i < 1; i++) {
			game.roll(10);
		}
	}

	test("gutterGame", () => {
		const game = new Game();
		rollMany(game, 20, 0);
		expect(game.score()).toBe(0);
	});

	test("allOnes", () => {
		const game = new Game();
		rollMany(game, 20, 1);
		expect(game.score()).toBe(20);
	});

	test("oneSpare", () => {
		const game = new Game();
		rollSpare(game);
		game.roll(7);
		rollMany(game, 17, 0);
		expect(game.score()).toBe(24);
	});

	test("oneStrike", () => {
		const game = new Game();
		rollStrike(game);
		game.roll(2);
		game.roll(3);
		rollMany(game, 16, 0);
		expect(game.score()).toBe(20);
	});

	test("perfectGame", () => {
		const game = new Game();
		rollMany(game, 12, 10);
		expect(game.score()).toBe(300);
	});
})


