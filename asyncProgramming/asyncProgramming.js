/*
! ASYNCHRONOUS PROGRAMMING

- Generally, JS is read from top to bottom, performing each line of code one after another 0 this is known as synchronous programming
- ex. line 1 is run and completed before line 2 begins, which is then run and completed before line 3 , etc

- THis can become an issue when we fetch, or gather, information from an outside source , from something such as an API. If JS did not have the ability to run code asynchronously , we would be forced to wait for our line of code to finish as it tried to  gather mountains of data from a  database. Asynchronous code will allow us to somewhat ignore the one line at a time rule

- Asynchronous Programming allows a program to do more than one thing at a time. 

- Makesa it possible to run long-running actions without stopping the program to wait for a response.

*/


// Synchronous Code

const secondSync = () => {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}

firstSync();


//Asynchronous Code

const networkRequest = () => {
    setTimeout(() => {
        //SetTimeout is a method that will work in the browser and node. js - we are using it to simulate a network request
        //setTimeout has 2 parameters, the first is a callback function ( a function thjat we pass into a parameter) , and the second is a how time to wait measure in milliseconds
        console.log('Async Code');
    }, 2000)
}

console.log('Hello World');

networkRequest();

console.log('The End');


/*
! API

- An application Program Inteface

- An API is somthing that will allow us to talk to other programs, such as a database or a server, however, the API itself is not a database server, it is the code with access points to the server

-access to a server will come in the form of ENDPOINTS
- endpoints will direct us to sets of data

REST API
Representational State Transfer
-creates an object of requested data from the client, and sends values back as a response

Methods:
    CRUD
    create (POST) 
    Read (GET)
    Update (PUT)
    Delete (DELETE)
    / we wil ltalk more about these in detail during blue badge /

    ! Fetch()

    The Fetch method is a asynchronous method, and it part of the browser window, NOT JS. THis method will start the process of 'fetching', or grabbing, a resource from the network, and will return a promise which is fulfilled when the response is available

    - Promise is an unknown value that will eventually be filled with either a value or a rejection (error)
    - Pending: initial state, neither fulfilled or rejected
    -Fulfilled: meaning the operation completed successfully
    -Rejected: meaning the operation failed.
*/


