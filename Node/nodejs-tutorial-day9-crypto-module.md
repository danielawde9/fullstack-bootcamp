![](https://www..com/nodejs-tutorial-day9-crypto-module.htmlassets/img/logo.png)
![](https://www..com/nodejs-tutorial-day9-crypto-module.htmllibrary/assets/img/30-days.png)

`crypto` module in node.js is used to provide cryptographic
functionalities.It includes a set of wrappers for OpenSSL's hash , HMAC ,
verify , cipher , decipher and sign functions. In part-1 , we'll learn all
about hash and hmac functions.

Hashing is a process of generating a fixed length value from a string using
mathematical functions. It is used for providing security.  
Every hash generated using hashing is :

- **Unique :** In hashing , for every unique input we will get unique output. we will get the same output for same input no matter how many times you input the same data But if we just slightly change the input it will change the output to a large extent.
- **Fixed length :** Hashing algorithms always generate the hash with the same length. The length of input does not affect the length of the output.
- **Irreversible :** Generated hashes are irreversible in nature. We can not change the hash to the input text again.

1. **md5 hashing algorithm :** MD5 stands for message digest 5 is a widely used hash function which produces 128-bit hashes.

   //Loading the crypto module in node.js
   var crypto = require('crypto');
   //creating hash object
   var hash = crypto.createHash('md5');
   //passing the data to be hashed
   data = hash.update('', 'utf-8');
   //Creating the hash in the required format
   gen_hash= data.digest('hex');
   //Printing the output on the console
   console.log("hash : " + gen_hash);

**Output :**

    >node md5
    hash : b95ed0bc44d12e3d6cb2ce8b15e1a41f



2. **Whirlpool hashing algorithm :** This hashing algorithm takes input of any length less than 2256 bits and outputs a 512-bit hash.


    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('whirlpool');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);



**Output :**

    >node whirlpool.js
    hash : 1d241d8e774492fcbab619d12f4e8ba82ca4327a97c0b955f97e9a8e99621be71
    a3c9db8c5c55685dfd478ba1c091711534877efe249eee719d7d6132657a1dc




3. **SHA1 hashing algorithm :** Secure Hash Algorithm 1 is a cryptographic hash function which generates a hash value which is typically rendered as a hexadecimal number of exactly 40 digits long. It produces a 160-bit hash value which is known as message digest.

   //Loading the crypto module in node.js
   var crypto = require('crypto');
   //creating hash object
   var hash = crypto.createHash('sha1');
   //passing the data to be hashed
   data = hash.update('', 'utf-8');
   //Creating the hash in the required format
   gen_hash= data.digest('hex');
   //Printing the output on the console
   console.log("hash : " + gen_hash);

**Output :**

    >node sha1.js
    hash : 387d3143b0baa6beb292eda4f81b2d33e55c6744



4. **SHA224 hashing algorithm :** Secure Hash Algorithm 224 comes under `SHA2` and it is a cryptographic hash function which is used to generate hash values.It produces a 224-bit hash value which is known as message digest. Code snippet is given below :

   //Loading the crypto module in node.js
   var crypto = require('crypto');
   //creating hash object
   var hash = crypto.createHash('sha224');
   //passing the data to be hashed
   data = hash.update('', 'utf-8');
   //Creating the hash in the required format
   gen_hash= data.digest('hex');
   //Printing the output on the console
   console.log("hash : " + gen_hash);

**Output :**

    >node sha224.js
    hash : a259323c32f8c38ccb97fcd3b407a1b51a8b7d9b16f672a8d6cbb2d6




5. **SHA256 hashing algorithm :** Secure Hash Algorithm 256 comes under `SHA2` and it is a cryptographic hash function which is used to generate hash values.It produces a 256-bit hash value which is known as message digest. Code snippet is given below :


    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('sha256');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);



**Output :**

    >node sha256.js
    hash : 664ad54634c10149e324ffd83bd7b90badbffffcc5738c602b3e27cb7617737f




6. **SHA384 hashing algorithm :** Secure Hash Algorithm 384 comes under `SHA2` and it is a cryptographic hash function which is used to generate hash values.It produces a 384-bit hash value which is known as message digest. Code snippet is given below :


    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('sha384');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);



**Output :**

    >node sha384.js
    hash : 13cd574a1025ab510115701cccbb23539d7144c45ffff3909e09413362fe1b83dad99cb143f5cb311cdeb4921ec6a33e




7. **SHA512 hashing algorithm :** Secure Hash Algorithm 512 comes under `SHA2` and it is a cryptographic hash function which is used to generate hash values.It produces a 512-bit hash value which is known as message digest. Code snippet is given below :


    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('sha512');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);



**Output :**

    >node sha512.js
    hash : 45be99fad36ea7962165979444acbf558bd5c5837ae7389e3aebb48d41c6cf1aa44908d4dcd12db963f005f8d30e2e2cdda6b7499d7da0d0d46f356e5d1c
    e904




8. **ripemd-160 hashing algorithm :** RIPEMD (RACE Integrity Primitives Evaluation Message Digest) 160 is an improved version of ripemd and it usually generates a 40 digit hexadecimal number.


    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('ripemd160');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);



**Output :**

    >node ripemd.js
    hash : 6bbb8d56edec3a9e5add3d1439046982a91c7f47









     //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('md5');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);







    >node md5
    hash : b95ed0bc44d12e3d6cb2ce8b15e1a41f







    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('whirlpool');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);







    >node whirlpool.js
    hash : 1d241d8e774492fcbab619d12f4e8ba82ca4327a97c0b955f97e9a8e99621be71
    a3c9db8c5c55685dfd478ba1c091711534877efe249eee719d7d6132657a1dc








     //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('sha1');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);







    >node sha1.js
    hash : 387d3143b0baa6beb292eda4f81b2d33e55c6744







     //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('sha224');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);







    >node sha224.js
    hash : a259323c32f8c38ccb97fcd3b407a1b51a8b7d9b16f672a8d6cbb2d6








    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('sha256');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);







    >node sha256.js
    hash : 664ad54634c10149e324ffd83bd7b90badbffffcc5738c602b3e27cb7617737f








    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('sha384');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);







    >node sha384.js
    hash : 13cd574a1025ab510115701cccbb23539d7144c45ffff3909e09413362fe1b83dad99cb143f5cb311cdeb4921ec6a33e








    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('sha512');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);







    >node sha512.js
    hash : 45be99fad36ea7962165979444acbf558bd5c5837ae7389e3aebb48d41c6cf1aa44908d4dcd12db963f005f8d30e2e2cdda6b7499d7da0d0d46f356e5d1c
    e904








    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hash object
    var hash = crypto.createHash('ripemd160');
    //passing the data to be hashed
    data = hash.update('', 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    //Printing the output on the console
    console.log("hash : " + gen_hash);







    >node ripemd.js
    hash : 6bbb8d56edec3a9e5add3d1439046982a91c7f47



**Hashing a file :** We are hashing the contents of a file using node.js `streams` , node.js `filesystem` and `SHA256` cryprographic hashing
algorithm.

    //Loading the required modules in node.js
    var crypto = require('crypto');
    var fs = require('fs');

    //Algorithm to be used for HASH
    var algorithm = 'sha256';
    //creating hash object
    var hash = crypto.createHash(algorithm);

    // reading the content of the file
    var filename = "data.txt";
    var file_data = fs.ReadStream(filename);

    //passing the data to be hashed
    file_data.on('data', function(data) {
      hash.update(data)
    })

    //Creating the hash in the required format and writing it in file
    file_data.on('end', function() {
      var gen_hash = hash.digest('hex')
      console.log('Hash generated using ' + algorithm + ' \nHashed output is :  ' + gen_hash + ' \nFile name is :  ' + filename);
      fs.writeFileSync(filename, gen_hash);
    })



**Output :**

    >node hashing_a_file.js
    Hash generated using sha256
    Hashed output is :  da3811154d59c4267077ddd8bb768fa9b06399c486e1fc00485116b57c9872f5
    File name is :  data.txt









    //Loading the required modules in node.js
    var crypto = require('crypto');
    var fs = require('fs');

    //Algorithm to be used for HASH
    var algorithm = 'sha256';
    //creating hash object
    var hash = crypto.createHash(algorithm);

    // reading the content of the file
    var filename = "data.txt";
    var file_data = fs.ReadStream(filename);

    //passing the data to be hashed
    file_data.on('data', function(data) {
      hash.update(data)
    })

    //Creating the hash in the required format and writing it in file
    file_data.on('end', function() {
      var gen_hash = hash.digest('hex')
      console.log('Hash generated using ' + algorithm + ' \nHashed output is :  ' + gen_hash + ' \nFile name is :  ' + filename);
      fs.writeFileSync(filename, gen_hash);
    })







    >node hashing_a_file.js
    Hash generated using sha256
    Hashed output is :  da3811154d59c4267077ddd8bb768fa9b06399c486e1fc00485116b57c9872f5
    File name is :  data.txt



One of the biggest problems with hashing includes the [ rainbow table
](https://www.google.co.in/search?q=rainbow+table&oq=rainbow&aqs=chrome.1.69i57j35i39j0l4.3080j0j7&sourceid=chrome&ie=UTF-8)
which is a precomputed table for reversing cryptographic hash functions.

HMAC ( keyed- **hash message authentication code** ) is a kind of MAC (
**Message authentication code** ) which involves performing the hash functions
using a secret cryptographic key.  
Just like hash, in HMAC also every generated hash using hashing algorithms is
:

- **Unique :** In hashing , for every unique input we will get unique output. we will get the same output for same input no matter how many times you input the same data But if we just slightly change the input it will change the output to a large extent.
- **Fixed length :** Hashing algorithms always generate the hash with the same length. The length of input does not affect the length of the output.
- **Irreversible :** Generated hashes are irreversible in nature. We can not change the hash to the input text again.

1. **SHA256 HMAC:** It is same as hasing the input with SHA256 hashing algorithm as explained above, the only difference is it involves hashing with the help of a secret key as shown in example below :


    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hmac object
    var hmac = crypto.createHmac('sha256', 'yoursecretkeyhere');
    //passing the data to be hashed
    data = hmac.update('');
    //Creating the hmac in the required format
    gen_hmac= data.digest('hex');
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);



**Output :**

    >node hmac_sha256.js
    hmac : 89365e7dc5bde2be58737b7f6086275e4284506f00c74b5822b7b7afdb93a7a9




2. **sha512 HMAC :** It is same as hasing the input with SHA512 hashing algorithm as explained above, the only difference is it involves hashing with the help of a secret key as shown in example below :


    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hmac object
    var hmac = crypto.createHmac('sha512', 'yoursecretkeyhere');
    //passing the data to be hashed
    data = hmac.update('');
    //Creating the hmac in the required format
    gen_hmac= data.digest('hex');
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);



**Output :**

    >node hmac_sha512.js
    hmac : a81b6b65c3df83ae15fe185dd16dc9c846f9e3cb567292422785954130047ac10e2547f505515ea4a20de7e335e60d6489ae71bbfcf130114672e95603dc
    4571




3. **md5 HMAC :** It is same as hasing the input with md5 hashing algorithm as explained above, the only difference is it involves hashing with the help of a secret key as shown in example below :


    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hmac object
    var hmac = crypto.createHmac('md5', 'yoursecretkeyhere');
    //passing the data to be hashed
    data = hmac.update('');
    //Creating the hmac in the required format
    gen_hmac= data.digest('hex');
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);



**Output :**

    >node hmac_md5.js
    hmac : d79672cea8d7d6a61d40bd27373b0a30



4. **Whirlpool hmac :** It is same as hasing the input with Whirlpool hashing algorithm as explained above, the only difference is it involves hashing with the help of a secret key as shown in example below :


    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hmac object
    var hmac = crypto.createHmac('whirlpool', 'yoursecretkeyhere');
    //passing the data to be hashed
    data = hmac.update('');
    //Creating the hmac in the required format
    gen_hmac= data.digest('hex');
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);



**Output :**

    >node hmac_whirlpool.js
    hmac : c7fe72214a9830c397e7f01296f257a66d1aef002cea8ca7cf27fbd66e399d7ec52474bd2a0524f28955753ae93e9c2f55925584f6850f9f2829071ed218
    d925




In the same way , you can try all other algorithms and perform hashing using
HMAC.

    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hmac object
    var hmac = crypto.createHmac('sha256', 'yoursecretkeyhere');
    //passing the data to be hashed
    data = hmac.update('');
    //Creating the hmac in the required format
    gen_hmac= data.digest('hex');
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);







    >node hmac_sha256.js
    hmac : 89365e7dc5bde2be58737b7f6086275e4284506f00c74b5822b7b7afdb93a7a9








    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hmac object
    var hmac = crypto.createHmac('sha512', 'yoursecretkeyhere');
    //passing the data to be hashed
    data = hmac.update('');
    //Creating the hmac in the required format
    gen_hmac= data.digest('hex');
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);







    >node hmac_sha512.js
    hmac : a81b6b65c3df83ae15fe185dd16dc9c846f9e3cb567292422785954130047ac10e2547f505515ea4a20de7e335e60d6489ae71bbfcf130114672e95603dc
    4571








    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hmac object
    var hmac = crypto.createHmac('md5', 'yoursecretkeyhere');
    //passing the data to be hashed
    data = hmac.update('');
    //Creating the hmac in the required format
    gen_hmac= data.digest('hex');
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);







    >node hmac_md5.js
    hmac : d79672cea8d7d6a61d40bd27373b0a30







    //Loading the crypto module in node.js
    var crypto = require('crypto');
    //creating hmac object
    var hmac = crypto.createHmac('whirlpool', 'yoursecretkeyhere');
    //passing the data to be hashed
    data = hmac.update('');
    //Creating the hmac in the required format
    gen_hmac= data.digest('hex');
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);







    >node hmac_whirlpool.js
    hmac : c7fe72214a9830c397e7f01296f257a66d1aef002cea8ca7cf27fbd66e399d7ec52474bd2a0524f28955753ae93e9c2f55925584f6850f9f2829071ed218
    d925




**Hashing a file using HMAC :** We are hashing the contents of a file using
node.js `streams` , node.js `filesystem` and `MD5` cryprographic hashing
algorithm.

    // Including the required modules
    var crypto = require('crypto');
    var fs = require('fs');

    //Algorithm to be used for HMAC
    var algorithm = 'md5';
    //Secret to be used with HMAC
    var secret ='Rj2895647';
    //creating hmac object
    var hmac = crypto.createHmac(algorithm, secret);

    // reading the content of the file
    var filename = "data.txt";
    var file_data = fs.ReadStream(filename);

    //passing the data to be hashed
    file_data.on('data', function(data) {
      hmac.update(data)
    })

    //Creating the hmac in the required format and writing it in file
    file_data.on('end', function() {
      var gen_hmac = hmac.digest('hex')
      console.log('Hmac generated using ' + algorithm + ' \nHashed output is :  ' + gen_hmac + ' \nFile name is :  ' + filename);
      fs.writeFileSync(filename, gen_hmac);
    })





\*\*Output :

    >node hmac_on_file.js
    Hmac generated using md5
    Hashed output is :  fe398f5177aa2a91a3a82d7b0f9e727a
    File name is :  data.txt



\*\*

    // Including the required modules
    var crypto = require('crypto');
    var fs = require('fs');

    //Algorithm to be used for HMAC
    var algorithm = 'md5';
    //Secret to be used with HMAC
    var secret ='Rj2895647';
    //creating hmac object
    var hmac = crypto.createHmac(algorithm, secret);

    // reading the content of the file
    var filename = "data.txt";
    var file_data = fs.ReadStream(filename);

    //passing the data to be hashed
    file_data.on('data', function(data) {
      hmac.update(data)
    })

    //Creating the hmac in the required format and writing it in file
    file_data.on('end', function() {
      var gen_hmac = hmac.digest('hex')
      console.log('Hmac generated using ' + algorithm + ' \nHashed output is :  ' + gen_hmac + ' \nFile name is :  ' + filename);
      fs.writeFileSync(filename, gen_hmac);
    })









    >node hmac_on_file.js
    Hmac generated using md5
    Hashed output is :  fe398f5177aa2a91a3a82d7b0f9e727a
    File name is :  data.txt



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about how we can use `crypto` module in node.js for hash and HMAC
operations. We learned about the snippets of SHA512 , ripemd160 , SHA256 ,
SHA384 , SHA224 , SHA1 , md5 , whirlpool cryptographic hashing algorithms.
Also, we learned about hashing a file using node.js crypto module.

![](https://www..com/nodejs-tutorial-day9-crypto-module.htmlassets/img/Paypal-payment-integration-using-node-part1.png)

Part 1 of Paypal payment integration using node.js . . .

![](https://www..com/nodejs-tutorial-day9-crypto-module.htmlassets/img/create-db-mongo-node.png)

Create a database in MongoDb using Node.js . . .

![](https://www..com/nodejs-tutorial-day9-crypto-module.htmlassets/img/nodejs-email-sendgrid.png)

Sending email using node.js and sendgrid's API

![](https://www..com/nodejs-tutorial-day9-crypto-module.htmlassets/img/pugjs.png)

Performing HTML operations using Pug

[ ](index.html)

![](https://www..com/nodejs-tutorial-day9-crypto-module.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
