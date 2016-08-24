
export interface IEncounters {
	date: number;
	type: string;
}

export interface IColonist {
	name: string;
	age: number;
	job: IOccupation;
}

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
// 		private date: string,
// 		public atype: string,
// 		public action: string,
// 		public colonist_id: string
// 		){
// 		this.date = this.formatDate;
// 	}
// 		get formatDate(): string {
// 			let date = new Date();
// 			return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
// 		}	
// }

// export class Colonist{

// 	constructor(
// 		name: string,
// 		job_id: string,
// 		age: number
// 		){}
	
// }


