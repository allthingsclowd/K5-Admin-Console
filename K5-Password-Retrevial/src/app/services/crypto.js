function convertStringToArrayBufferView(str)
{
    var bytes = new Uint8Array(str.length);
    for (var iii = 0; iii < str.length; iii++) 
    {
        bytes[iii] = str.charCodeAt(iii);
    }

    return bytes;
}   

function convertArrayBufferViewtoString(buffer)
{
    var str = "";
    for (var iii = 0; iii < buffer.byteLength; iii++) 
    {
        str += String.fromCharCode(buffer[iii]);
    }

    return str;
}

var private_key_object = null; 
var public_key_object = null; 

var promise_key = null;

var encrypted_data = null;
var encrypt_promise = null;

var data = "QNimate";

var decrypt_promise = null;
var decrypted_data = null;

var vector = crypto.getRandomValues(new Uint8Array(16));

var crypto = window.crypto || window.msCrypto;

if(crypto.subtle)
{
    alert("Cryptography API Supported");

    promise_key = crypto.subtle.generateKey({name: "RSA-OAEP", modulusLength: 2048, publicExponent: new Uint8Array([0x01, 0x00, 0x01]), hash: {name: "SHA-256"}}, false, ["encrypt", "decrypt"]);

    promise_key.then(function(key){
        private_key_object = key.privateKey;
        public_key_object = key.publicKey;

        encrypt_data();
    });

    promise_key.catch = function(e){
        console.log(e.message);
    }
    
}
else
{
    alert("Cryptography API not Supported");
}

function encrypt_data()
{
    encrypt_promise = crypto.subtle.encrypt({name: "RSA-OAEP", iv: vector}, public_key_object, convertStringToArrayBufferView(data));

    encrypt_promise.then(
        function(result){
            encrypted_data = new Uint8Array(result);


            decrypt_data();
        }, 
        function(e){
            console.log(e.message);
        }
    );
}

function decrypt_data()
{
    decrypt_promise = crypto.subtle.decrypt({name: "RSA-OAEP", iv: vector}, private_key_object, encrypted_data);

    decrypt_promise.then(
        function(result){
            decrypted_data = new Uint8Array(result);
            console.log(convertArrayBufferViewtoString(decrypted_data));
        },
        function(e){
            console.log(e.message);
        }
    );
}