import { jsdom } from 'jsdom';
import {TestSessionStorage} from "./testSessionStorage";

declare const global : any;
declare const window : any;

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
window.localStorage = window.sessionStorage = new TestSessionStorage();
