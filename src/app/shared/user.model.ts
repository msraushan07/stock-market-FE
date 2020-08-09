export class User {
    constructor(public id:string,public name:string, public email:string, private _token:string){}
    get token(){
        return this._token
    }
}