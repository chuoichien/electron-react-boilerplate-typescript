import { jsdom } from 'jsdom';

declare const global : any;
declare const window : any;

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
window.localStorage = window.sessionStorage = new TestSessionStorage();

class TestSessionStorage {
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
