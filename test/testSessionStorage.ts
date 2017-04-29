export class TestSessionStorage {
	private data : any = {};

	getItem (key : string) {
		return this.data[key];
	}
	setItem (key : string, value : any) {
		this.data[key] = value;
	}
	removeItem (key : string) {
		this.data[key] = undefined;
	}
}
