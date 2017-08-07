import { Injectable } from '@angular/core';


@Injectable()
export class PasswordManagementService {
    buf: Uint8Array = new Uint8Array(8);
    bufView : ArrayBufferView;
      
    constructor() { 
      
    }

    // getCryptoRandom(){
    //     console.log('Now we should see something');
    //     this.bufView = this.buf;
    //     console.log(this.bufView);        
    //     console.log(this.uint8arrayToStringMethod(this.buf));
    //     this.bufView = window.crypto.getRandomValues(this.buf);
    //     console.log(this.bufView);
    //     console.log(this.uint8arrayToStringMethod(this.buf));
    //     console.log('And its over');
    // }
    
    // uint8arrayToStringMethod(myUint8Arr: Uint8Array): string {
    //     return String.fromCharCode.apply(null, myUint8Arr);
    // }

    // decrypt(dataArrayBuffer:ArrayBuffer):Promise<any> {
    //     return window.crypto.decrypt({name: "RSA-OAEP"}, this.KEY, dataArrayBuffer);
    // }

    // decryptPassword(privateKey, data){
    //   window.crypto.subtle.decrypt(
    //     {
    //         name: "RSA-OAEP",
    //         //label: Uint8Array([...]) //optional
    //     },
    //     privateKey, //from generateKey or importKey above
    //     data //ArrayBuffer of the data
    //     )
    //     .then(function(decrypted){
    //         //returns an ArrayBuffer containing the decrypted data
    //         console.log(new Uint8Array(decrypted));
    //     });
      
    // }

 

}
