export class User {
    constructor(public id:string,public name, public email:string, private _token:string){}
    get token(){
        return this._token
    }
}