/*
OBJECTS

-objects are usesd to stire multiple sets of data in the key/ value pair format
-denoted by {}
*/

let netflix = {
    //name: value
    id: 1,
    name: 'The Office',
    genre: 'Comedy',
    season1: {
        episodeInfo: [
            {
                episode: 1,
                episodeName: 'Pilot'
            },
            {
                episode: 2,
                episodeName: 'Diversity Day'
            },
            {
                Episode: 3,
                episodeName: 'Health Care'
            },
            {
                episode: 4,
                episodeName: 'The Alliciance'
            },
            {
                episode: 5,
                episodeName: 'Basketball'
            },
            {
                episode: 6,
                episodeName: 'Hot Girl'
            }
        ]
    }
}
// console.log(netflix); //dot notation: when we know the name of the key/value information we want, we will use dot notation

console.log('All Data', netflix); //gets all the data

console.log('Just season info:', netflix.season1.seasonInfo);

//console log any single episode name from season 1

console.log('Just season Info:', netflix.season1.seasonInfo);

console.log('Episode 2:', netflix.season1.seasonInfo.episodeInfo[1].episodeName);

console.lolg(`Episode ${netflix,season2,seasonInfo[1].episode}:`, netflix.season1.seasonInfo[1].episodeName);

/*
JSON OBJECTS

-JSON stands for javascript OBJECT NOTATION
- JSON syntax is dereived from JS OBject syntax, but the JSON format is text only
- JSON exists as a string - useful when fetching data from a server. It need to be traslated into a native JS object if we want to acces the data.
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//We can use some Object methods to help us gather information we might not otherwise know

//Object.keys()

console.log(Object.keys(spaceJam.toonSquad));//gives an array of the keys in an object

console.log(Object.keys(spaceJam.toonSquad.duck));//gives us the index numbers for the string 'Daffy Duck'

console.log(Object.values(spaceJam.toonSquad))


/*
OBJECT BRACKET NOTATION

-object bracket notation can allow us to find a value in an o0bject we wouldn't be able to access using dot notation.
- We can also use object bracket notation to store a key in a place variable and use that variable to access information in an object
- This works because all key names in an object are strings
*/

let garden = {
    vegetable: 'Zucchini',
    flower: 'Orchid',
    fruit: 'Kiwi',
    water: true,
    sun: true,
    size: 10,
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

// dot.notation
console.log(garden.flower);

//square bracket notation
console.log(garden['flower']);

let baking = {example: 'This is super cool', brainHurt: true};
baking['zucchini'] = 'better make some bread!';
baking.bakeTime = 60;
baking.bakeTime = 45;
baking = {};
console.log(baking);


let garden = {
    vegetable: 'zucchini',
    flower: 'Orchid',
    fruit: 'Kiwi',
    water: true,
    sun: true,
    size: 10,
}

let baking = {example: 'This is super cool', brainHurt: true};
baking['zucchini'] = 'better make some bread!';
baking.bakeTime = 60;
baking.bakeTime = 45;
console.log(baking);

console.log(baking[garden['vegetable']]);


// /Using square breackets can also be a good idea if the objects's key has a space in the name
let testObj = {
    'Spaces Here': true,
    noSpaces: true
} 

console.log(testObj.noSpaces);
console.log(testObj.['Spaces Here']);




let movie = warrior 
runTime = '2 hrs',
genre = 'action';

characters {
    characterName: 'Tom Hardy';
    age: 30;
    altRoles: ['Venom', 'Mad Max', 'Legend'];
}
{
    characterName: 'Nick Nolte';
    age: 80
    altRoles: ['Andgel has fallen', 'Parker'. 'Head FUll of Honey']

}

