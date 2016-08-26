
export interface IEncounters {
	date: number;
	type: string;
}

// export interface IColonist {
// 	name: string;
// 	age: number;
// 	job: IOccupation;
// }

export interface IAlien{
	type: string;
	description: string;
}

export interface IOccupation{
	name: string;
	description: string;
}

// export class Encounters{
// 	constructor(
// 		public atype: string,
// 		public action: string,
// 		public colonist_id: string
// 		private date: string,
// 		){
// 		this.date = this.formatDate;
// 	}
// 		get formatDate(): string {
// 			let date = new Date();
// 			return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
// 		}	
// }Col

export class Colonist{

	constructor(
		public name: string,	
		public age: string,
		public job_id: string
		){}
}


