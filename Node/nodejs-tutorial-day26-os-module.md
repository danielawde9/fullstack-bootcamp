![](https://www..com/nodejs-tutorial-day26-os-module.htmlassets/img/logo.png)

1. [ Day 1 - The Beginning ](nodejs-tutorial-day1-thebeginning.html)
2. [ Day 2 - File System in node.js ](nodejs-tutorial-day2-filesystem.html)
3. [ Day 3 - Regular expressions in node.js ](nodejs-tutorial-day3-regular-expressions.html)
4. [ Day 4 - Console module in node.js ](nodejs-tutorial-day4-console-module.html)
5. [ Day 5 - All about errors ](nodejs-tutorial-day5-all-about-errors.html)
6. [ Day 6 - Array methods](nodejs-tutorial-day6-array-methods.html)
7. [ Day 7 - All about NPM](nodejs-tutorial-day7-all-about-npm.html)
8. [ Day 8 - Publishing package on NPM ](nodejs-tutorial-day8-publishing-on-npm.html)
9. [ Day 9 - Crypto Module ( Hashing and HMAC)](nodejs-tutorial-day9-crypto-module.html)
10. [ Day 10 - Crypto Module ( Encryption and Decryption ) ](nodejs-tutorial-day10-crypto-module-symmetric-asymmetric-encryption-decryption.html)
11. [ Day 11 - Express Framework ](nodejs-tutorial-day11-express-framework.html)
12. [ Day 12 - CRUD in MongoDB using node.js ](nodejs-tutorial-day12-crud-in-mongodb.html)
13. [ Day 13 - Sign Up form in node.js ](nodejs-tutorial-day13-signup-using-nodejs-express-mongodb.html)
14. [ Day 14 - Introduction to socket.io ](nodejs-tutorial-day14-introduction-to-socket-io.html)
15. [ Day 15 - All about streams ](nodejs-tutorial-day15-all-about-streams.html)
16. [ Day 16 - Zlib Module ](nodejs-tutorial-day16-zlib-module.html)
17. [ Day 17 - CRUD in MySQL using node.js ](nodejs-tutorial-day17-crud-in-mysql.html)
18. [ Day 18 - Concepts of callbacks in node.js ](nodejs-tutorial-day18-callbacks.html)
19. [ Day 19 - Query String in node.js ](nodejs-tutorial-day19-query-string.html)
20. [ Day 20 - Timers in node.js ](nodejs-tutorial-day20-timers.html)
21. [ Day 21 - Buffers in node.js](nodejs-tutorial-day21-buffers.html)
22. [ Day 22 - String Decoder Module in node.js ](nodejs-tutorial-day22-string-decoder.html)
23. [ Day 23 - Debugger module in node.js ](nodejs-tutorial-day23-debuggers.html)
24. [ Day 24 - Child Processes in node.js ](nodejs-tutorial-day24-child-processes.html)
25. [ Day 25 - Clusters in node.js ](nodejs-tutorial-day25-clusters.html)
26. [ Day 26 - OS module in node.js ](nodejs-tutorial-day26-os-module.html)
27. [ Day 27 - Assert module in node.js ](nodejs-tutorial-day27-assert.html)
28. [ Day 28 - Getting Tweets using node.js ](nodejs-tutorial-day28-getting-tweets-using-nodejs.html)
29. [ Day 29 - Uploading file to dropbox using node.js ](nodejs-tutorial-day29-uploading-files-dropbox.html)
30. [ Day 30 - Github API with node.js ](nodejs-tutorial-day30-github-api-with-node.html)

OS module in node.js is used to provide utilities related to operating system.
It can be accessed using the following :

    var os = require('os');









    var os = require('os');



This method is used to get the information of all the CPU/Core installed in
the system. This method returns an `array`. Code snippet is given below :

    //Name of the file : cpus.js
    var os = require('os');
    var value =  os.cpus();
    console.log("os.cpus() ==> " + JSON.stringify(value) );



We can run it in the following way :

    >node cpus.js
    os.cpus() ==> [{"model":"Intel(R) Core(TM) i3-2348M CPU @ 2.30GHz","speed":2294,
    "times":{"user":3067572,"nice":0,"sys":1015862,"idle":12850535,"irq":149667}},{"
    model":"Intel(R) Core(TM) i3-2348M CPU @ 2.30GHz","speed":2294,"times":{"user":5
    95611,"nice":0,"sys":169822,"idle":16167943,"irq":4664}},{"model":"Intel(R) Core
    (TM) i3-2348M CPU @ 2.30GHz","speed":2294,"times":{"user":3278049,"nice":0,"sys"
    :813467,"idle":12841783,"irq":13572}},{"model":"Intel(R) Core(TM) i3-2348M CPU @
     2.30GHz","speed":2294,"times":{"user":319786,"nice":0,"sys":80215,"idle":165331
    57,"irq":967}}]



**Note** that In the above Output the value of nice is 0 because nice values
are unix specified and our outputs are as per windows operating system.

    //Name of the file : cpus.js
    var os = require('os');
    var value =  os.cpus();
    console.log("os.cpus() ==> " + JSON.stringify(value) );







    >node cpus.js
    os.cpus() ==> [{"model":"Intel(R) Core(TM) i3-2348M CPU @ 2.30GHz","speed":2294,
    "times":{"user":3067572,"nice":0,"sys":1015862,"idle":12850535,"irq":149667}},{"
    model":"Intel(R) Core(TM) i3-2348M CPU @ 2.30GHz","speed":2294,"times":{"user":5
    95611,"nice":0,"sys":169822,"idle":16167943,"irq":4664}},{"model":"Intel(R) Core
    (TM) i3-2348M CPU @ 2.30GHz","speed":2294,"times":{"user":3278049,"nice":0,"sys"
    :813467,"idle":12841783,"irq":13572}},{"model":"Intel(R) Core(TM) i3-2348M CPU @
     2.30GHz","speed":2294,"times":{"user":319786,"nice":0,"sys":80215,"idle":165331
    57,"irq":967}}]



This method is used to return the CPU architecture of operating system for
which the node.js binary was compiled.  
Possible values are : 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc',
'ppc64', 's390', 's390x', 'x32', 'x64', and 'x86'. This method returns `String`. Code snippet is given below :

    //Name of the file: arch.js
    var os = require('os');
    var value =  os.arch();
    console.log("os.arch() ==> " + value);



We can run it in the following way :

    >node arch.js
    os.arch() ==> ia32









    //Name of the file: arch.js
    var os = require('os');
    var value =  os.arch();
    console.log("os.arch() ==> " + value);







    >node arch.js
    os.arch() ==> ia32



This method is used to get the endianness of the CPU for which the node.js
binary was compiled.  
Possible values are :

- **'BE' :** for big endian
- **'LE' :** for little endian

This method returns `String`. Code snippet is given below :

    //Name of the file: endianness.js
    var os = require('os');
    var value =  os.endianness();
    console.log("os.endianness() => " + value);



We can run it in the following way :

    >node endianness.js
    os.endianness() => LE









    //Name of the file: endianness.js
    var os = require('os');
    var value =  os.endianness();
    console.log("os.endianness() => " + value);







    >node endianness.js
    os.endianness() => LE



This method is used to get the amount of free system memory in bytes. This
method returns `Integer`. Code snippet is given below :

    //Name of the file: freemem.js
    var os = require('os');
    var value =  os.freemem();
    console.log("os.freemem() => " + value);



We can run it in the following way :

    >node freemem.js
    os.freemem() => 690982912









    //Name of the file: freemem.js
    var os = require('os');
    var value =  os.freemem();
    console.log("os.freemem() => " + value);







    >node freemem.js
    os.freemem() => 690982912



This method is used to get the hostname of the operating system. This method
returns `String`. Code snippet is given below :

    //Name of the file: hostname.js
    var os = require('os');
    var value =  os.hostname();
    console.log("os.hostname() => " + value);



We can run it in the following way :

    >node hostname.js
    os.hostname() => acer-PC









    //Name of the file: hostname.js
    var os = require('os');
    var value =  os.hostname();
    console.log("os.hostname() => " + value);







    >node hostname.js
    os.hostname() => acer-PC



This method is used to get the home directory of the current user. This method
returns `String`. Code snippet is given below :

    //Name of the file: homedir.js
    var os = require('os');
    var value =  os.homedir();
    console.log("os.homedir() => " + value);



We can run it in the following way :

    >node homedir.js
    os.homedir() => C:\Users\acer









    //Name of the file: homedir.js
    var os = require('os');
    var value =  os.homedir();
    console.log("os.homedir() => " + value);







    >node homedir.js
    os.homedir() => C:\Users\acer



This method is used to get the operating system platform as set during compile
time of `node.js` .  
Possible values are :

- 'win32'
- 'aix'
- 'freebsd'
- 'linux'
- 'openbsd'
- 'darwin'
- 'sunos'

This method returns `String`. Code snippet is given below :

    //Name of the file: platform.js
    var os = require('os');
    var value =  os.platform();
    console.log("os.platform() => " + value);



We can run it in the following way :

    >node platform.js
    os.platform() => win32



**Note** that the output of the above code will identify operating system
platform as set during compile time of `node.js` .

    //Name of the file: platform.js
    var os = require('os');
    var value =  os.platform();
    console.log("os.platform() => " + value);







    >node platform.js
    os.platform() => win32



This method is used to get the operating system release.  
This method returns `String`. Code snippet is given below :

    //Name of the file: release.js
    var os = require('os');
    var value =  os.release();
    console.log("os.release() => " + value);



We can run it in the following way :

    >node release.js
    os.release() => 6.1.7600









    //Name of the file: release.js
    var os = require('os');
    var value =  os.release();
    console.log("os.release() => " + value);







    >node release.js
    os.release() => 6.1.7600



This method is used to get the default directory for temporary files in
operating system.  
This method returns `String`. Code snippet is given below :

    //Name of the file: tmpdir.js
    var os = require('os');
    var value =  os.tmpdir();
    console.log("os.tmpdir() => " + value);



We can run it in the following way :

    >node tmpdir.js
    os.tmpdir() => C:\Users\acer\AppData\Local\Temp









    //Name of the file: tmpdir.js
    var os = require('os');
    var value =  os.tmpdir();
    console.log("os.tmpdir() => " + value);







    >node tmpdir.js
    os.tmpdir() => C:\Users\acer\AppData\Local\Temp



This method is used to get the total amount of system memory in bytes.  
This method returns `Integer`. Code snippet is given below :

    //Name of the file: totalmem.js
    var os = require('os');
    var value =  os.totalmem();
    console.log("os.totalmem() => " + value);



We can run it in the following way :

    >node totalmem.js
    os.totalmem() => 1948631040









    //Name of the file: totalmem.js
    var os = require('os');
    var value =  os.totalmem();
    console.log("os.totalmem() => " + value);







    >node totalmem.js
    os.totalmem() => 1948631040



This method is used to get the system uptime in seconds.  
This method returns `Integer`. Code snippet is given below :

    //Name of the file: uptime.js
    var os = require('os');
    var value =  os.uptime();
    console.log("os.uptime() => " + value);



We can run it in the following way :

    >node uptime.js
    os.uptime() => 22906.6507529









    //Name of the file: uptime.js
    var os = require('os');
    var value =  os.uptime();
    console.log("os.uptime() => " + value);







    >node uptime.js
    os.uptime() => 22906.6507529



This method is used to get the operating system name as returned by Uname.  
Common values are :

- 'Windows_NT' : on Windows
- 'Linux' : on Linux
- 'debian' : on MacOS

This method returns `String`. Code snippet is given below :

    //Name of the file: type.js
    var os = require('os');
    var value =  os.type();
    console.log("os.type() => " + value);



We can run it in the following way :

    >node type.js
    os.type() => Windows_NT









    //Name of the file: type.js
    var os = require('os');
    var value =  os.type();
    console.log("os.type() => " + value);







    >node type.js
    os.type() => Windows_NT



In this chapter of [ 30 days of node ](30-days-of-node.html) tutorial series,
we learned about os module in node.js which is used to provide utilities
related to operating system. We learned about following methods : `os.cpus()` , `os.arch()` , `os.endianness()` , `os.freemem()` , `os.hostname()`
, `os.homedir()` , `os.platform()` , `os.release()` , `os.tmpdir()` ,
`os.totalmem()` , `os.uptime()` , `os.type()` , along with their code
snippets .

![](https://www..com/nodejs-tutorial-day26-os-module.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
