![](https://www..com/nodejs-tutorial-day25-clusters.htmlassets/img/logo.png)

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

Normally, node.js server runs on a single port and utilize only single core of
the OS system which leads to wastage of hardware capabilities. So, in order to
take the full use of multi-core system, we launch cluster of node.js processes
to handle the load. This process is known as clustering. Clustering in node.js
allows us to create different processes which can share the same server port.
we can simply access cluster module using the following :

    var cluster = require('cluster');









    var cluster = require('cluster');



Let's understand clusters with the help of an coding example as shown below :

    //Name of the file : cluster.js
    var cluster = require('cluster');
    var http = require('http');
    var numofCPUs = require('os').cpus().length;

    if (cluster.isMaster) {
      console.log(`Master with Process ID : ${process.pid} is running`);

      // Fork workers.
      for (var i = 0; i < numofCPUs; i++) {
        cluster.fork();
      }

      cluster.on('exit', (worker, code, signal) => {
        console.log(`worker with Process ID : ${worker.process.pid} died`);
      });
    } else {
      // Workers sharing an HTTP server
      http.createServer((req, res) => {
        res.writeHead(200);
        res.end('An example of clusters\n');
      }).listen(3000);
      console.log(`Worker with Process ID : ${process.pid} started`);

    }



We can run it in the following way :

    >node cluster.js
    Master with Process ID : 6832 is running
    Worker with Process ID : 7616 started
    Worker with Process ID : 5932 started
    Worker with Process ID : 7056 started
    Worker with Process ID : 7292 started









    //Name of the file : cluster.js
    var cluster = require('cluster');
    var http = require('http');
    var numofCPUs = require('os').cpus().length;

    if (cluster.isMaster) {
      console.log(`Master with Process ID : ${process.pid} is running`);

      // Fork workers.
      for (var i = 0; i < numofCPUs; i++) {
        cluster.fork();
      }

      cluster.on('exit', (worker, code, signal) => {
        console.log(`worker with Process ID : ${worker.process.pid} died`);
      });
    } else {
      // Workers sharing an HTTP server
      http.createServer((req, res) => {
        res.writeHead(200);
        res.end('An example of clusters\n');
      }).listen(3000);
      console.log(`Worker with Process ID : ${process.pid} started`);

    }







    >node cluster.js
    Master with Process ID : 6832 is running
    Worker with Process ID : 7616 started
    Worker with Process ID : 5932 started
    Worker with Process ID : 7056 started
    Worker with Process ID : 7292 started



We have two methods of distributing incoming connections in cluster module of
node.js which are as follows :

1. **`Using Round-robin approach` : ** In this approach, the master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion. It also contains some built-in algorithmic smart to avoid overloading of any particular worker process. This is the default approach in all the operating systems except windows.
2. **`Using Sockets` :** In this approach, the master process creates listen sockets and send the incoming connection to the interested worker and then the worker will accept the connection directly.

The methods of the cluster module are divided into 2 parts as shown below :

1. **`Worker` : ** These methods are for the worker processes :


    * **worker.disconnect() :** This method is used to close all servers, wait for the ` close` event on those servers and then disconnect the IPC channel, within the worker.
    * **worker.exitedAfterDisconnect :** This method will return a boolean. The value is set by calling ` .kill() ` or ` .disconnect() ` , before that the value is ` undefined `. This method is used to distinguish between the voluntary and accidental exit. If the value of ` .exitedAfterDisconnect ` is ` True `, then it signifies a voluntary exit.
    * **worker.id :** Each worker is given their unique id. This method is used to print that id on console.
    * **worker.isConnected() :** This method returns `True` if the worker is connected to its master via IPC channel, otherwise it will return ` false`.
    * **worker.isDead() :** This methods returns ` True ` if the worker process is terminated or dead , otherwise it will return ` false`.
    * **worker.kill() :** This method is used to kill the worker.
    * **worker.process :** This method is used to return the global child process.
    * **worker.send() :** This method is used to send a message to a master or a worker.

2. **`cluster` : ** Most of these methods are for the master process with couple of exceptions as given below :


    * **cluster.disconnect() :** This method is used to disconnect all the workers which will further allow master process to die properly.
    * **cluster.fork() :** This method is used to spawn a new worker process.
    * **cluster.isMaster** This method returns ` True ` if the current process is master , otherwise it will return ` false`.
    * **cluster.isWorker :** This method returns ` True ` if the current process is worker , otherwise it will return ` false`.
    * **cluster.schedulingPolicy :** This method is used to set the scheduling policy. The default scheduling policy is round robin for all operating systems except windows.
    * **cluster.settings :** This method will return an object which contains all the settings related to the cluster.
    * **cluster.setupMaster() :** This method is used to change the default settings of master process which can be seen using ` cluster.settings ` method.
    * **cluster.worker :** This method is an reference to the current worker object. It is not available in the master process.
    * **cluster.workers :** This method contains a hash which stores all the active worker objects. This method is not available in the worker process.

Events emitted while working with child processes are as follows :

- **`Worker` : ** Worker can emit any of the following event : `disconnect`, `error`, `exit`, `listening`, `message` and `online`.
- **`Cluster` : ** Cluster can emit any of the following event : `disconnect`, `exit`, `fork`, `listening`, `message`, `online` and `setup`.

![](https://www..com/nodejs-tutorial-day25-clusters.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
