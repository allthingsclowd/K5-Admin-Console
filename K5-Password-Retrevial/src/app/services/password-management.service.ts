import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';


@Injectable()
export class PasswordManagementService {
    
    getArrayFromString(str:string) {
        return this.utilityService.convertStringToArrayBufferView(str);
    }

    getRandomValues():ArrayBuffer {
        var array = new Int32Array(16);
        window.crypto.getRandomValues(array);
        return array.buffer;
    }
    throwError(err){
        throw new Error(err);
    }

    Crypto;
    name: string = 'RSA-OAEP';
    keyUsagesEncryptDecrypt: string[] = ["encrypt", "decrypt"];
    KEY;

    constructor(private utilityService: UtilityService) {
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
                console.log(key);
                console.log(key.publicKey);
                console.log(key.privateKey);
                console.log(this.utilityService.convertArrayBufferViewtoString(key.publicKey));
                console.log(this.utilityService.convertArrayBufferViewtoString(key.privateKey));
            }, this.throwError);
        });

        return dfd;
    }

    keyImport(pem):Promise<any> {
        const keyDetails = {
            'name': this.name,
            modulusLength: 2048, //can be 1024, 2048, or 4096
            publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            'hash': { name: "SHA-256" }
        };

        let dfd = new Promise((resolve, reject) => {
            this.Crypto.importKey("psck8", JSON.parse(pem),keyDetails, true, ["decrypt"]).then((key) => {
                this.KEY = key.publicKey;
                resolve(key.privateKey);
                console.log(key);
                console.log(key.publicKey);
                console.log(key.privateKey);
                console.log(this.utilityService.convertArrayBufferViewtoString(key.publicKey));
                console.log(this.utilityService.convertArrayBufferViewtoString(key.privateKey));
            }, this.throwError);
        });

        return dfd;
    }
    encrypt(dataArrayBuffer:ArrayBuffer):Promise<any> {
        return this.Crypto.encrypt({name: "RSA-OAEP"}, this.KEY, dataArrayBuffer);
    }

    decrypt(dataArrayBuffer:ArrayBuffer):Promise<any> {
        return this.Crypto.decrypt({name: "RSA-OAEP"}, this.KEY, dataArrayBuffer);
    }
}