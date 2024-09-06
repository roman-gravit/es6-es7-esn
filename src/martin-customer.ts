export { RentalCalculator, VideoRegistry, VideoType };

enum VideoType  {
	REGULAR, 
	CHILDRENS
};

class RentalCalculator {
	private rentals: Array<Rental>  = new Array<Rental>();

	constructor() { }

	addRental(title: string, days: number) {
		this.rentals.push(new Rental(title, days));
	}

	getRentalPoints(): number {
		let points: number = 0;
		for(let rental of this.rentals) {
			points += rental.getPoints();
		}
		return points;
	}

	getRentalFee(): number {
		let fee: number = 0;
		for(let rental of this.rentals) {
			fee += rental.getFee();
		}
		return fee;
	}
}

function applyGracePeriod(amount: number, days: number, grace: number): number {
	if (days > grace) {
		return amount + amount * (days - grace);
	}
	return amount;
}

interface Movie {
	getFee(days: number): number;
	getPoints(days: number): number;
}

class RegularMovie implements Movie {
	private title: string;
	
	constructor(title: string) {
		this.title = title;
	}
	getFee(days: number): number {
		return applyGracePeriod(1.5, days, 3);
	}
	getPoints(days: number): number {
		return applyGracePeriod(1, days, 3);
	}
}

class ChildrensMovie implements Movie {
	private title: string;
	
	constructor(title: string) {
		this.title = title;
	}
	getFee(days: number): number {
		return days;
	}
	getPoints(days: number): number {
		return 1;
	}
}


class Rental {
	public days: number;
	private movie: Movie;
	
	constructor (title: string, days: number) {
		this.days = days;
		this.movie = VideoRegistry.getMovie(title);
	}
	getPoints(): number {
		return this.movie.getPoints(this.days);
	}
	getFee(): number {
		return this.movie.getFee(this.days);
	}
}

class VideoRegistry {
	private static movieRegistry: Map<string, VideoType>  = new Map<string, VideoType>();
	
	private constructor() {}

	static getMovie(title: string): Movie {
		switch (this.movieRegistry.get(title)) {
			case VideoType.REGULAR:
				return new RegularMovie(title);
			case VideoType.CHILDRENS:
				return new ChildrensMovie(title);
			default: 
				throw Error("unknown movie type");	
		}
	}

	static addMovie(title: string, type: VideoType): void {
		this.movieRegistry.set(title, type);
	}
}
