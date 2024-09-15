export { scheduleMeeting, Range, GetSecondFunction, slotMachine };

///// Task 3 /////
interface Reel  {
	position: null | number;
	symbols: string[];
	spin(): void;
	display(): string;
}

const reel: Reel = {
	position: null,
	symbols: [ "X", "Y", "Z", "W", "$", "*", "<", "@" ],

	spin(): void {
		if (this.position == null) {
			this.position = randMax(this.symbols.length - 1);
		}
	
		this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
	},
	
	display(): string {
		if (this.position == null) {
			this.position = randMax(this.symbols.length - 1);
		}
		return this.symbols[this.position];
	}
};

interface SlotMachine  {
	reels: Reel[];
	spin(): void;
	display(): string;
}

const slotMachine: SlotMachine = {
	
	reels: [ Object.create(reel), Object.create(reel), Object.create(reel) ],
	
	spin(): void {
		this.reels.forEach(
			function spinReel(reel) { reel.spin();});
	},
	
	display(): string {
		let rows = [];
		for (let linePos = -1; linePos <= 1; linePos++) {
			let row = this.reels.map(function getSlot(reel) {
				var slot = Object.create(reel);
				slot.position = 
					(reel.symbols.length + reel.position + linePos) % reel.symbols.length;
				return reel.display.call(slot);
			});
			rows.push(row.join("|"))
		}
		return rows.join("\n");
	}
}

function randMax(max: number): number {
	return Math.trunc(1E9 * Math.random()) % max;
}


///// Task 2 /////
type GetSecondFunction = (param: number) => number[];

function Range(start: number, end?: number): number[] | GetSecondFunction {
	if(end !== undefined) {
		return createDiaposonArray(start, end);
	}

	return function getEnd(arg: number): number[] {
		return createDiaposonArray(start, arg)
	}
}

function createDiaposonArray(diaposonStart: number, diaposonEnd: number): number[] {
	const result = [];
	for(let i = diaposonStart; i <= diaposonEnd; i++) {
		result.push(i);
	}
	return result;
}



///// Task 1 /////
const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime: string, durationMinutes: number): boolean {
	const dayStartInMinutes = getTotalMinutesFromTime(dayStart);
	const dayEndInMinutes = getTotalMinutesFromTime(dayEnd);

	const meetingStartInMinutes = getTotalMinutesFromTime(startTime);
	const meetingEndInMinutes = meetingStartInMinutes + durationMinutes;

	if( meetingStartInMinutes < dayStartInMinutes 
		|| meetingEndInMinutes > dayEndInMinutes ) 
	{
		return false;
	}

	return true;
}

function getTotalMinutesFromTime(time: string): number {
	const [ , hours, minutes ] = time.match(/^(\d{1,2}):(\d{2})$/) || [];
	return Number(hours) * 60 + Number(minutes);
}
