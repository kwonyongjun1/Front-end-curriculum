import type {Person} from './types.js';

export default class User implements Person{
    constructor(public username: string, public email: string){}
    logOut(){
        console.log(`${this.username} logs out!!`);
    }
}

export function userHelper(){
    console.log("Help!");
}