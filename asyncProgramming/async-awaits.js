/*
! ASYNC/AWAITS

- Allows us to program in a synchronous manner while still allowing code to run in the background.
-This helps keep our sites responsive


*/

//! ASYNC Function (syntax)
// -allows us to make a normal function asynchronous: which means we can use await
// - must use the async keyword at the beginning of the function decloration

async function myFn() {
    await console.log('testing');
}

myFn() // 'testing

const myAsyncFn = async () => {
    await console.log('testing');
}

myAsyncFn() // 'testing

const newFn = () => {
    await console.log('testing');
} 

newFn()// error: awaits is only valid in an async function

async function fn() {
    return 'hello';
}
    fn().then(console.log)

    fn().then(dataFromAsyncFunc => console.log(dataFromAsyncFunc))

    //! AWAIT
    //pauses an async function until a promise is settled (either resolved or rejected)

   // Using fetch and .then chaining
    fetch('https://random.dog/woof.json')
    .then(result => result.json())// takes in result and translates it into json
    .then(json => console.log(json)) // print that json in the console
    .catch(error => console.log(error))// print any errors that might happen

    // USING ASYNC
    async function getWoof() {
        //first stop is going to be waiting for the fetch to get a response
        const response = await fetch('https://random.dog/woof.json')
        //second stop is waiting for the response to get translated
        const json = await response.json()

        return json;
    }

    console.log(getWoof())// undefined: the function runs but does not return a value until the console.log has already printed something
    
    getWoof().then(console.log)// {object}: the console.log will not run intil the promise from getWoof has resolved, meaning it will have a value (or error)
    