![](https://www..com/nodejs-tutorial-day6-array-methods.htmlassets/img/logo.png)
![](https://www..com/nodejs-tutorial-day6-array-methods.htmllibrary/assets/img/30-days.png)

Arrays are used to store multiple values in a single `var`. Their index
starts from `0`. Today we will learn about inbuilt array methods such as
push, pop, join, etc.

Arrays can be created in any of the following ways :

    // an array of names
    var names = ["rj", "ricky", "alex"];
    console.log(names);
    //calculating the length of array
    var len = names.length;
    console.log(len);
    //Another way to create array
    var arr = new Array(3); 	// declare an array "arr" of size 3
    arr = [1,5,7];  		// initialize elements of array

    //OR
    // declare and initialize in a single statement
    var arr1 = new Array(2,5,7);
    console.log("arr : " + arr);
    console.log("arr 1 : " + arr1);



The Output of the code is :

    >node create-array.js
    [ 'rj', 'ricky', 'alex' ]
    3
    arr : 1,5,7
    arr 1 : 2,5,7









    // an array of names
    var names = ["rj", "ricky", "alex"];
    console.log(names);
    //calculating the length of array
    var len = names.length;
    console.log(len);
    //Another way to create array
    var arr = new Array(3); 	// declare an array "arr" of size 3
    arr = [1,5,7];  		// initialize elements of array

    //OR
    // declare and initialize in a single statement
    var arr1 = new Array(2,5,7);
    console.log("arr : " + arr);
    console.log("arr 1 : " + arr1);







    >node create-array.js
    [ 'rj', 'ricky', 'alex' ]
    3
    arr : 1,5,7
    arr 1 : 2,5,7



`push` method in arrays is used to insert an element in the end of the
array. Snippet is given below :

    arr = ['a','e','i','o'];
    console.log(arr);
    arr.push('u');
    console.log(arr);



The Output of the code is :

    >node push.js
    [ 'a', 'e', 'i', 'o' ]
    [ 'a', 'e', 'i', 'o', 'u' ]









    arr = ['a','e','i','o'];
    console.log(arr);
    arr.push('u');
    console.log(arr);







    >node push.js
    [ 'a', 'e', 'i', 'o' ]
    [ 'a', 'e', 'i', 'o', 'u' ]



`pop` method in arrays is used to remove the element from the end of the
array. Snippet is given below :

    arr = [ 5 , 5 , 8 , 7 , 6 ];
    console.log(arr);
    arr.pop();
    console.log(arr);



The Output of the code is :

    >node pop.js
    [ 5, 5, 8, 7, 6 ]
    [ 5, 5, 8, 7 ]









    arr = [ 5 , 5 , 8 , 7 , 6 ];
    console.log(arr);
    arr.pop();
    console.log(arr);







    >node pop.js
    [ 5, 5, 8, 7, 6 ]
    [ 5, 5, 8, 7 ]



`unshift` method in arrays is used insert an element in the beginning of the
array. Snippet is given below :

    arr = [ 5 , 5 , 8 , 7 , 6 ];
    console.log(arr);
    arr.unshift(1);
    console.log(arr);



The Output of the code is :

    >node unshift.js
    [ 5, 5, 8, 7, 6 ]
    [ 1, 5, 5, 8, 7, 6 ]









    arr = [ 5 , 5 , 8 , 7 , 6 ];
    console.log(arr);
    arr.unshift(1);
    console.log(arr);







    >node unshift.js
    [ 5, 5, 8, 7, 6 ]
    [ 1, 5, 5, 8, 7, 6 ]



`shift` shift method is used to remove the element from the beginning of the
array. Snippet is given below :

    arr = ['b','a','e','i','o','u'];
    console.log(arr);
    arr.shift();
    console.log(arr);



The Output of the code is :

    >node shift.js
    [ 'b', 'a', 'e', 'i', 'o', 'u' ]
    [ 'a', 'e', 'i', 'o', 'u' ]









    arr = ['b','a','e','i','o','u'];
    console.log(arr);
    arr.shift();
    console.log(arr);







    >node shift.js
    [ 'b', 'a', 'e', 'i', 'o', 'u' ]
    [ 'a', 'e', 'i', 'o', 'u' ]



`reverse` method is used to reverse the order of the array such that the
first element becomes the last and the last element becomes the first. Snippet
is given below :

    arr = ['b','e','a','o','p','n','r'];
    console.log(arr);
    arr.reverse();
    console.log(arr);



The Output of the code is :

    >node reverse.js
    [ 'b', 'e', 'a', 'o', 'p', 'n', 'r' ]
    [ 'r', 'n', 'p', 'o', 'a', 'e', 'b' ]









    arr = ['b','e','a','o','p','n','r'];
    console.log(arr);
    arr.reverse();
    console.log(arr);







    >node reverse.js
    [ 'b', 'e', 'a', 'o', 'p', 'n', 'r' ]
    [ 'r', 'n', 'p', 'o', 'a', 'e', 'b' ]



`sort` method is used to sort the elements of array in term of their
occurrences. Snippet is given below :

    arr = ['b','e','a','o','p','n','r'];
    console.log(arr);
    arr.sort();
    console.log(arr);



The Output of the code is :

    >node sort.js
    [ 'b', 'e', 'a', 'o', 'p', 'n', 'r' ]
    [ 'a', 'b', 'e', 'n', 'o', 'p', 'r' ]









    arr = ['b','e','a','o','p','n','r'];
    console.log(arr);
    arr.sort();
    console.log(arr);







    >node sort.js
    [ 'b', 'e', 'a', 'o', 'p', 'n', 'r' ]
    [ 'a', 'b', 'e', 'n', 'o', 'p', 'r' ]



`splice` method can be used in two ways i.e to either add the element into
the array or remove the elements from the array.  
**Add using splice :** Snippet to perform the operation of adding elements to
the array using splice.

    arr = ['b','e','a','o','p','n','r'];
    console.log(arr);
    arr.splice(2,2,'rj','nodejs');
    console.log(arr);



The Output of the code is :

    >node splice-add.js
    [ 'b', 'e', 'a', 'o', 'p', 'n', 'r' ]
    [ 'b', 'e', 'rj', 'nodejs', 'p', 'n', 'r' ]



**Remove using splice :** Snippet to perform the operation of removing
elements from the array using splice.

    arr = ['b','e','a','o','p','n','r'];
    console.log(arr);
    arr.splice(2,2);
    console.log(arr);



The Output of the code is :

    >node splice-remove.js
    [ 'b', 'e', 'a', 'o', 'p', 'n', 'r' ]
    [ 'b', 'e', 'p', 'n', 'r' ]









    arr = ['b','e','a','o','p','n','r'];
    console.log(arr);
    arr.splice(2,2,'rj','nodejs');
    console.log(arr);







    >node splice-add.js
    [ 'b', 'e', 'a', 'o', 'p', 'n', 'r' ]
    [ 'b', 'e', 'rj', 'nodejs', 'p', 'n', 'r' ]







    arr = ['b','e','a','o','p','n','r'];
    console.log(arr);
    arr.splice(2,2);
    console.log(arr);







    >node splice-remove.js
    [ 'b', 'e', 'a', 'o', 'p', 'n', 'r' ]
    [ 'b', 'e', 'p', 'n', 'r' ]



`concat` method is used to join two arrays and returns a new array
consisting the elements of both the arrays one after other. Snippet is given
below :

    arr = ['tomatoes','pineapple'];
    arr2 = ['mango','peach','apple'];
    console.log(arr);
    console.log(arr2);
    var new_arr = arr.concat(arr2);
    console.log(new_arr);



The Output of the code is :

    >node concat.js
    [ 'tomatoes', 'pineapple' ]
    [ 'mango', 'peach', 'apple' ]
    [ 'tomatoes', 'pineapple', 'mango', 'peach', 'apple' ]









    arr = ['tomatoes','pineapple'];
    arr2 = ['mango','peach','apple'];
    console.log(arr);
    console.log(arr2);
    var new_arr = arr.concat(arr2);
    console.log(new_arr);







    >node concat.js
    [ 'tomatoes', 'pineapple' ]
    [ 'mango', 'peach', 'apple' ]
    [ 'tomatoes', 'pineapple', 'mango', 'peach', 'apple' ]



`indexOf` method is used to return the first index of the element passed
within the array or otherwise it will return `-1` if the value is not found.
Snippet is given below :

    arr = [ 5 , 2 , 8 , 5 , 6 ];
    console.log(arr);
    var pos = arr.indexOf(8);
    console.log("index of 8 is : " + pos);
    var pos1 = arr.indexOf(5);
    console.log("index of 5 is : " + pos1);



The Output of the code is :

    >node indexOf.js
    [ 5, 2, 8, 5, 6 ]
    index of 8 is : 2
    index of 5 is : 0









    arr = [ 5 , 2 , 8 , 5 , 6 ];
    console.log(arr);
    var pos = arr.indexOf(8);
    console.log("index of 8 is : " + pos);
    var pos1 = arr.indexOf(5);
    console.log("index of 5 is : " + pos1);







    >node indexOf.js
    [ 5, 2, 8, 5, 6 ]
    index of 8 is : 2
    index of 5 is : 0



`lastIndexOf` method is used to return the last index of the element passed
within the array or otherwise it will return `-1` if the value is not found.
Snippet is given below :

    arr = [ 5 , 2 , 8 , 5 , 6 ];
    console.log(arr);
    var pos = arr.lastIndexOf(5);
    console.log("index of 5 is : " + pos);



The Output of the code is :

    >node lastIndexOf.js
    [ 5, 2, 8, 5, 6 ]
    index of 5 is : 3









    arr = [ 5 , 2 , 8 , 5 , 6 ];
    console.log(arr);
    var pos = arr.lastIndexOf(5);
    console.log("index of 5 is : " + pos);







    >node lastIndexOf.js
    [ 5, 2, 8, 5, 6 ]
    index of 5 is : 3



`join` method is used to join the elements into a string and returns the
string. The elements will be separated by a specific separator while joining
which will be passed while calling the method. The default separator is `,
(comma)` . Snippet is given below :

    arr = [ 5 , 2 , 8 , 5 , 6 ];
    arr1 = ['a','b','c','d'];
    console.log(arr);
    console.log(arr1);
    var str = arr.join();
    var str1 = arr1.join(":");
    console.log(str);
    console.log(str1);



The Output of the code is :

    >node join.js
    [ 5, 2, 8, 5, 6 ]
    [ 'a', 'b', 'c', 'd' ]
    5,2,8,5,6
    a:b:c:d









    arr = [ 5 , 2 , 8 , 5 , 6 ];
    arr1 = ['a','b','c','d'];
    console.log(arr);
    console.log(arr1);
    var str = arr.join();
    var str1 = arr1.join(":");
    console.log(str);
    console.log(str1);







    >node join.js
    [ 5, 2, 8, 5, 6 ]
    [ 'a', 'b', 'c', 'd' ]
    5,2,8,5,6
    a:b:c:d



`slice` method is used to extract a section of an array and returns a new
array. Slice method take two arguments i.e start and end. If both elements are
omitted then it will slice the whole array. Syntax is : `slice(start,end)`

1. **start :** This is an integer which specifies where to start. The default value is index `0`. If omitted like this :: `slice(,end)` it will use the default value as start. We can also start from the end by using negative values . This is optional.
2. **end :** This is an integer value which specifies where to end (last index excluded). If omitted like this :: `slice(start,)` it will slice upto the last element. We can use negative values to select from the end. This is optional.

**Note :** It will not change the original array.

    arr = [ 5 , 2 , 8 , 5 , 6 ];
    arr1 = ['a','b','c','d'];
    console.log(arr);
    console.log(arr1);
    var str = arr.slice(2,4);
    var str1 = arr1.slice(-2,-1);
    console.log(str);
    console.log(str1);



The Output of the code is :

    >node slice.js
    [ 5, 2, 8, 5, 6 ]
    [ 'a', 'b', 'c', 'd' ]
    [ 8, 5 ]
    [ 'c' ]









    arr = [ 5 , 2 , 8 , 5 , 6 ];
    arr1 = ['a','b','c','d'];
    console.log(arr);
    console.log(arr1);
    var str = arr.slice(2,4);
    var str1 = arr1.slice(-2,-1);
    console.log(str);
    console.log(str1);







    >node slice.js
    [ 5, 2, 8, 5, 6 ]
    [ 'a', 'b', 'c', 'd' ]
    [ 8, 5 ]
    [ 'c' ]



`every` method is used to check whether a condition in fulfilled by all the
elements or not. `every` method returns `true` if the condition is
satisfied by all the elements of the array otherwise `every` method will
return `false` . Snippet is given below :

    arr = [2,4,6,8,10];
    arr1 = [2,3,4,6,8];
    function even(value){
        if( (value % 2) == 0){
            return true;
        }else{
            return false;
        }
    }

    var out = arr.every(even);
    var out1 = arr1.every(even);
    console.log("Output of array 1 : " + out);
    console.log("Output of array 2 :" + out1);



The Output of the code is :

    >node every.js
    Output of array 1 : true
    Output of array 2 :false









    arr = [2,4,6,8,10];
    arr1 = [2,3,4,6,8];
    function even(value){
        if( (value % 2) == 0){
            return true;
        }else{
            return false;
        }
    }

    var out = arr.every(even);
    var out1 = arr1.every(even);
    console.log("Output of array 1 : " + out);
    console.log("Output of array 2 :" + out1);







    >node every.js
    Output of array 1 : true
    Output of array 2 :false



`filter` method is used to create a new array , filled with all the elements
that passes a test condition usually passed as a function , from the current
array . Snippet is given below :

    arr = [2,4,6,8,10];
    arr1 = [2,3,4,6,8];
    function even(value){
        if( (value % 2) == 0){
            return true;
        }else{
            return false;
        }
    }

    var out = arr.filter(even);
    var out1 = arr1.filter(even);
    console.log("Output of array 1 : " + out);
    console.log("Output of array 2 :" + out1);



The Output of the code is :

    >node filter.js
    Output of array 1 : 2,4,6,8,10
    Output of array 2 : 2,4,6,8









    arr = [2,4,6,8,10];
    arr1 = [2,3,4,6,8];
    function even(value){
        if( (value % 2) == 0){
            return true;
        }else{
            return false;
        }
    }

    var out = arr.filter(even);
    var out1 = arr1.filter(even);
    console.log("Output of array 1 : " + out);
    console.log("Output of array 2 :" + out1);







    >node filter.js
    Output of array 1 : 2,4,6,8,10
    Output of array 2 : 2,4,6,8



`find` method returns the first value in the array which passes a test
provided as a function. If no element matches the condition , it will return `undefined`. Snippet is given below :

    arr = [2,4,6,8,10];
    arr1 = [2,3,4,7,8];
    function odd(value){
        if( (value % 2) == 1){
            return true;
        }else{
            return false;
        }
    }

    var out = arr.filter(odd);
    var out1 = arr1.filter(odd);
    console.log("Output of array 1 : " + out);
    console.log("Output of array 2 :" + out1);



The Output of the code is :

    >node find.js
    Output of array 1 :
    Output of array 2 :3,7









    arr = [2,4,6,8,10];
    arr1 = [2,3,4,7,8];
    function odd(value){
        if( (value % 2) == 1){
            return true;
        }else{
            return false;
        }
    }

    var out = arr.filter(odd);
    var out1 = arr1.filter(odd);
    console.log("Output of array 1 : " + out);
    console.log("Output of array 2 :" + out1);







    >node find.js
    Output of array 1 :
    Output of array 2 :3,7



`forEach` method in arrays is a loop which is used to call a function for
each element in the array. Snippet is given below :

    var arr = ['1', '2', '3','5','8'];

    arr.forEach(function(element) {
        console.log(element);
    });



The Output of the code is :

    >node forEach.js
    1
    2
    3
    5
    8









    var arr = ['1', '2', '3','5','8'];

    arr.forEach(function(element) {
        console.log(element);
    });







    >node forEach.js
    1
    2
    3
    5
    8



`reduce` method is used to reduce the array to a single value. This method
executes the provided function for each value of the array and stores the
result in accumulator. **Note :** It does not execute on array with no values.
Snippet is given below :

    arr = [ 5 , 5 , 8 , 7 , 6 ];
    console.log(arr);
    function mul(value ,total){
        total = value * total;
        return total;
    }
    var output = arr.reduce(mul);
    console.log("The product of the array is : " + output);



The Output of the code is :

    >node reduce.js
    [ 5, 5, 8, 7, 6 ]
    The product of the array is : 8400









    arr = [ 5 , 5 , 8 , 7 , 6 ];
    console.log(arr);
    function mul(value ,total){
        total = value * total;
        return total;
    }
    var output = arr.reduce(mul);
    console.log("The product of the array is : " + output);







    >node reduce.js
    [ 5, 5, 8, 7, 6 ]
    The product of the array is : 8400



In this article we learned about arrays , how we can create arrays in node.js
and array methods such as push , pop , shift , unshift , reverse , sort ,
splice , concat , indexOf , lastIndexOf , join , slice , every , filter , find
, forEach , reduce , etc. All this methods are explained with code examples .

![](https://www..com/nodejs-tutorial-day6-array-methods.htmlassets/img/Paypal-payment-integration-using-node-part1.png)

Part 1 of Paypal payment integration using node.js . . .

![](https://www..com/nodejs-tutorial-day6-array-methods.htmlassets/img/create-db-mongo-node.png)

Create a database in MongoDb using Node.js . . .

![](https://www..com/nodejs-tutorial-day6-array-methods.htmlassets/img/nodejs-email-sendgrid.png)

Sending email using node.js and sendgrid's API

![](https://www..com/nodejs-tutorial-day6-array-methods.htmlassets/img/pugjs.png)

Performing HTML operations using Pug

[ ](index.html)

![](https://www..com/nodejs-tutorial-day6-array-methods.htmlassets/img/logo.png)

\_\_2022[ ](index.html)
