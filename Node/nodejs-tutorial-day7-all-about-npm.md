![](https://www..com/nodejs-tutorial-day7-all-about-npm.htmlassets/img/logo.png)
![](https://www..com/nodejs-tutorial-day7-all-about-npm.htmllibrary/assets/img/30-days.png)

NPM stands for node package manager. It is a package manager for node.js
applications. It helps you to install , update, remove and publish packages.
Node.js package ecosystem is the world's largest ecosystem of open source
online libraries. We never have to write a already existing code again which
reduces the efforts of the programmers upto a large extent and they can focus
on solving the unsolved problems instead of rewriting the same code again and
again.

**Installing npm automatically :** NPM is installed automatically by
downloading node.js. You can donwload node.js [ here
](https://nodejs.org/en/download/).

**Installing npm manually :** We can also install npm manually. You can get
the file from the link given below :  
`https://registry.npmjs.org/npm/-/npm-{version}.tgz`  
All you have to do is change the version number just like the example given
below : `https://registry.npmjs.org/npm/-/npm-5.4.2.tgz`  
**Note :** Not for noobs.

NPM updates comes more frequently as compared to node.js and we can't download
node.js again and again just to update npm. So we have to make sure that we
are using the latest version of npm . We can update a npm using the following
command :

    >npm install npm@latest -g



**Test :** We can check the version by running the following command :

    >npm -v









    >npm install npm@latest -g







    >npm -v



1. `package.json` is a way to manage the locally installed packages.
2. ` package.json` serves as documentation on which our project depends.
3. It is kind of a directory which keeps track of all the dependencies our project is using.
4. It allows us to specify the versions of packages our project is using. This is achieved using semantic versioning rules.

**Create package.json :** We can create package.json file using the `npm init` command. The snippet is given below :

    >npm init
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help json` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install ` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    package name: ()
    version: (1.0.0)
    description:
    entry point: (arrays.js)
    test command:
    git repository:
    keywords:
    author: @rajatgarian
    license: (ISC)
    About to write to \package.json:

    {
      "name": "scripts",
      "version": "1.0.0",
      "description": "",
      "main": "arrays.js",
      "dependencies": {
        "body-parser": "^1.17.2",
        "express": "^4.15.4",
        "ejs": "^2.5.7",
        "express-fileupload": "^0.1.4",
        "nodemailer": "^4.1.0",
        "natural": "^0.5.4",
        "prettyjson": "^1.2.1"
      },
      "devDependencies": {},
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "@rajatgarian",
      "license": "ISC"
    }


    Is this ok? (yes) yes



You can do all this automatically also via the following command

    npm init --yes









    >npm init
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help json` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install ` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    package name: ()
    version: (1.0.0)
    description:
    entry point: (arrays.js)
    test command:
    git repository:
    keywords:
    author: @rajatgarian
    license: (ISC)
    About to write to \package.json:

    {
      "name": "scripts",
      "version": "1.0.0",
      "description": "",
      "main": "arrays.js",
      "dependencies": {
        "body-parser": "^1.17.2",
        "express": "^4.15.4",
        "ejs": "^2.5.7",
        "express-fileupload": "^0.1.4",
        "nodemailer": "^4.1.0",
        "natural": "^0.5.4",
        "prettyjson": "^1.2.1"
      },
      "devDependencies": {},
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "@rajatgarian",
      "license": "ISC"
    }


    Is this ok? (yes) yes







    npm init --yes



If we are having a `package.json` file in our project , then we can install
all our dependencies using just `npm install` command. Example for the same
is given below ::

    >npm install



It will install all the dependencies mentioned in package.json file.

    >npm install



In npm , there are 2 ways in which we can install our packages :

1. **Locally (Local installation ) :** We install packages locally when we need to `require` them in our application for example express, gannit , etc. The syntax for downloading a package locally is : `npm install < package_name >`.  
   Example for the same is given below ::


    >npm install gannit



This command will create a folder/directory in your pwd ( present working
directory ) with the name of `node_modules` ( only if it is not yet created
) and download the package in that directory.  
**Test :** We can test whether the command `npm install` worked or not by
manually checking whether the directory with the name of `node_modules`
exists or not . And secondly if `node_modules` directory exists , does it
contain a directory for the package we installed.

2. **Globally (Global installation) :** We install packages globally when we want to use it as a command line tool or run it in the background for example forever, grunt-cli, etc. The syntax for global download of packages is : `npm install -g < package_name >`.  
   Example is given below :


    >npm install -g forever



And that's it, the downloaded package is ready to use.

This is how we can install node.js packages using npm.

    >npm install gannit







    >npm install -g forever



1. **You Know the exact version :** If you know the exact version of the npm package you want to install , then it can be downloaded using the `package_name` with `@` character. The Syntax is `npm install package_name@version`. The snippet is given below :


    >npm install express@4.15.1



2. **You don't Know the exact version :** If you don't know the exact version of the npm package you want to install , then it can be downloaded using the semantic range npm provides. Suppose you want to install the latest version of the 4th major release say , 4.1.15 then you can download it in the following way : The Syntax is `npm install package_name@^major_version.0.0`. The snippet is given below :


    >npm install express@^4.0.0









    >npm install express@4.15.1







    >npm install express@^4.0.0



1. **Updating local packages :** We should keep our packages updated in order to keep track of the changes that have been made to the code upstream of the packages so that we can mould our code as per the latest version. The syntax for Updating local packages is : `npm update`.  
   Example is given below :


    >npm update



**Note :** Run this command in the same folder as `package.json` file.  
**Test :** We can test whether the command `npm install` worked or not by
running the command `npm outdated` command. If there is no output on the
console , then it means all the packages are updated.

    >npm outdated



2. **Updating global packages :** The Syntax for updating global packages is `npm install -g < package_name >` The snippet is given below :


    >npm install -g forever



**Finding global outdated packages :** The syntax for finding outdated
packages is `npm outdated -g --depth=0.` The snippet is given below :

    >npm outdated -g --depth=0
    Package             Current   Wanted   Latest  Location
    @angular/cli          1.1.3    1.4.2    1.4.2	xyz
    babel                 6.5.2   6.23.0   6.23.0	xyz
    babel-cli            6.18.0   6.26.0   6.26.0	xyz
    nodemon              1.11.0   1.12.1   1.12.1	xyz
    sails                0.11.0  0.12.13  0.12.13	xyz
    webpack              1.13.3    3.6.0    3.6.0	xyz
    webpack-dev-server   1.16.2    2.8.2    2.8.2	xyz



The output of the above command is explained in detail below :

    * **package :** Contains the name of the package.
    * **current :** The current version of the package installed.
    * **Wanted :** It specifies the maximum version of the package as mentioned in ` package.json ` that satisfies ` semver `. It shows the currently installed version of the package if we have no ` semver ` i.e. we are running npm outdated global -g , or the package is not included in package.json.
    * **Latest :** It specifies the latest available version of the package in the registry.
    * **Location :** Specifies the location of the installed package.

**Update all outdated packages (Global) :** We can update all the outdated
global packages by using just one command. The snippet is given below :

    npm update -g









    >npm update







    >npm outdated







    >npm install -g forever







    >npm outdated -g --depth=0
    Package             Current   Wanted   Latest  Location
    @angular/cli          1.1.3    1.4.2    1.4.2	xyz
    babel                 6.5.2   6.23.0   6.23.0	xyz
    babel-cli            6.18.0   6.26.0   6.26.0	xyz
    nodemon              1.11.0   1.12.1   1.12.1	xyz
    sails                0.11.0  0.12.13  0.12.13	xyz
    webpack              1.13.3    3.6.0    3.6.0	xyz
    webpack-dev-server   1.16.2    2.8.2    2.8.2	xyz







    npm update -g



In npm , there are 2 type of package installation i.e locally and globally. So
, Let's see how we can remove local and global packages one by one.

1. **Removing Local packages :** We can remove the local packages when we do not need them further in our application. The syntax for removing a package locally is : `npm uninstall < package_name >`.  
   Example for the same is given below ::


    >npm uninstall gannit



We can also remove the file from `package.json` by using the following
command :

    >npm uninstall --save gannit



Moreover if we have installed the package with `devDependency` then we can
remove it using the following command :

    >npm uninstall --save-dev gannit



These commands will remove the package from `node_modules` directory.  
**Test :** We can test whether the command `npm uninstall` worked or not by
manually checking whether the package exists in the `node_modules` directory
or not. If the package doesnot exist then it signfies that the command is
executed successfully.

2. **Uninstalling Global packages :** We can remove the global packages the simply running `npm uninstall` command globally. The syntax for global download of packages is : `npm uninstall -g < package_name >`.  
   Example is given below :


    >npm uninstall -g forever



And that's it, the global package is removed.

This is how we can remove node.js packages using npm.

    >npm uninstall gannit







    >npm uninstall --save gannit







    >npm uninstall --save-dev gannit







    >npm uninstall -g forever



In this article , we learned about the basics of npm. How we can install
packages from npm locally and globally . Updating local and global packages
using npm. Removing local and global packages.

![](https://www..com/nodejs-tutorial-day7-all-about-npm.htmlassets/img/Paypal-payment-integration-using-node-part1.png)

Part 1 of Paypal payment integration using node.js . . .

![](https://www..com/nodejs-tutorial-day7-all-about-npm.htmlassets/img/create-db-mongo-node.png)

Create a database in MongoDb using Node.js . . .

![](https://www..com/nodejs-tutorial-day7-all-about-npm.htmlassets/img/nodejs-email-sendgrid.png)

Sending email using node.js and sendgrid's API

![](https://www..com/nodejs-tutorial-day7-all-about-npm.htmlassets/img/pugjs.png)

Performing HTML operations using Pug

[ ](index.html)

![](https://www..com/nodejs-tutorial-day7-all-about-npm.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
