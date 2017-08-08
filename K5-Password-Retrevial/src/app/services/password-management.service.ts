import { Injectable } from '@angular/core';


@Injectable()
export class PasswordManagementService {
    
    static getArrayFromString(str:string) {
        return new TextEncoder('utf-8').encode(str);
    }

    static getRandomValues():ArrayBuffer {
        var array = new Int32Array(16);
        window.crypto.getRandomValues(array);
        return array.buffer;
    }
    static throwError(err){
        throw new Error(err);
    }

    Crypto;
    name: string = 'RSA-OAEP';
    keyUsagesEncryptDecrypt: string[] = ["encrypt", "decrypt"];
    KEY;

    constructor() {
        this.Crypto = window.crypto.subtle;
    }
    getKey():Promise<any> {
        if(this.KEY){
            return new Promise((resolve, reject) => {
                resolve(this.KEY);
            });
        }
        return this.keyGenerate();
    }
    keyGenerate():Promise<any> {
        const keyDetails = {
            'name': this.name,
            modulusLength: 2048, //can be 1024, 2048, or 4096
            publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            'hash': { name: "SHA-256" }
        };

        let dfd = new Promise((resolve, reject) => {
            this.Crypto.generateKey(keyDetails, true, this.keyUsagesEncryptDecrypt).then((key) => {
                this.KEY = key.publicKey;
                resolve(key.publicKey);
            }, Utils.throwError);
        });

        return dfd;
    }
    encrypt(dataArrayBuffer:ArrayBuffer):Promise<any> {
        return this.Crypto.encrypt({name: "RSA-OAEP"}, this.KEY, dataArrayBuffer);
    }
}