const baseUrl = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.getElementsByTagName('form')[0];
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

// Hoisting Mini Lesson
//Js will compile code reading from top to bottom, But it actually reads code twice. The first time it reads code, it will store annything in memory such as: variable names, functions (when using the keyword) 

function fetchSpace(e) {
    e.preventDefault(); //This will stop the page from reloading when we submit our form. It prevents a default action by the browser.

    console.log('Clicked!');

    fetch(baseUrl) //starts the process of 'fetching' or getting information from our resource
    .then(result => { // when we have a promise, we can call a method called 'then()' this will be given a callback function to send the result into
        console.log(result);
        return result.json(); // this will json-ify, or translate our result into json, which will be more easily readable and accessible within our app.
    }) //.then() also returns a promise, meaning if we want to continue to run code after one is done, we can just add another . then()
    .then(json => {
        // console.log(json);
        displayRockets(json);
    })
}

function displayRockets(data) {
    console.log('Inside displayRockets:',data);

    //how we can get each rocket's name to show up in the ul
    //or how we can get each rocket's name to show up in the console
    //for(let i = 0; i < data.length; i++){} // another example of how we could have done it
    data.forEach(rocket => {
        console.log(rocket.name);
        let listItem = document.createElement('li');// creates an empty <li></li> tag
        listItem.innerText = rocket.name; // change the text of the item. The tag now looks like this: <li>rocket name</li>
        spaceShips.appendChild(listItem) //this will add one of our tags into antoher tag. In this case we we are adding listItem into the ul (spaceShips)
        /* container.appendChild(itemContainer) */
    })
}



// console.log(fetchSpace(1))//hoisting a funciton
// console.log(myVar1);//error: cannot access before initialization
// console.log(myVar2);// undefined

// let myVar1 = 'Awesome';
// var myVar2 = 'Not Awesome?';

// let myFunc = () => { console.log('Arrow test')}

