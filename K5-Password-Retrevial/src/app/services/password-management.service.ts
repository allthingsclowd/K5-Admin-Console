import { Injectable } from '@angular/core';


@Injectable()
export class PasswordManagementService {
    buf: Uint16Array = new Uint16Array(8);
      
    constructor() { 
      window.crypto.getRandomValues(this.buf);
    }

    decryptPassword(privateKey, data){
      window.crypto.subtle.decrypt(
        {
            name: "RSA-OAEP",
            //label: Uint8Array([...]) //optional
        },
        privateKey, //from generateKey or importKey above
        data //ArrayBuffer of the data
        )
        .then(function(decrypted){
            //returns an ArrayBuffer containing the decrypted data
            console.log(new Uint8Array(decrypted));
        });
      
    }

 

}
