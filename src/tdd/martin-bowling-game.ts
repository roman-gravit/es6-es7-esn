export { Game };

class Game {

	private currentRoll: number = 0;
	private ROLLS_COUNT = 21;
	private rolls: number[] = Array<number>(this.ROLLS_COUNT).fill(0);

	score(): number {
		let score = 0;
		let frameIndex = 0;

		for (let frame = 0; frame < 10; frame++) {

			if(this.isStrike(frameIndex)){
				score += 10 + this.strikeBonus(frameIndex);
				frameIndex++;

			} else if(this.isSpare(frameIndex)) {
				score+= 10 + this.spareBonus(frameIndex);
				frameIndex +=2;

			} else {
				score+= this.twoBallsInFrame(frameIndex);
				frameIndex +=2;
			}
		}

		return score;
	}

	roll(pins: number): any {
		this.rolls[this.currentRoll++] = pins;
	}

	private twoBallsInFrame(frameIndex: number): number {
		return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
	}

	private spareBonus(frameIndex: number): number {
		return this.rolls[frameIndex + 2];
	}

	private strikeBonus(frameIndex: number): number {
		return this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
	}

	private isStrike(frameIndex: number): boolean {
		return this.rolls[frameIndex] == 10;
	}

	private isSpare(frameIndex: number): boolean {
		return (this.rolls[frameIndex] + this.rolls[frameIndex + 1]) === 10;
	}

}