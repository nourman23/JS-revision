//Q1
// Write a function that takes a number as input and returns 
// true if the number is less than or equal to zero, otherwise return false.

let n = -6;
console.log(zero(n));


function zero(num){
    if(num <= 0){
return true;
        }else{
        return false;
}}

// =================================

//Q2
// Print the Next integer from the input 
// number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)

let n1 = -6;
console.log(nextInt(n1));

function nextInt(n1){
   
        return n1+1;
}

//Q3
// Write a function that takes an array of strings and returns only the 
// strings with numbers in it as an array. And return an empty
//  array, If there are no strings containing numbers.

console.log(arrayOfStrings(['nour4344' , 'll' , '235']));
console.log(arrayOfStrings(['nour' , 'll' , 'ddd']));

function arrayOfStrings(str){
    let arr = [];
    for(let i=0; i<str.length; i++){
     if(/\d/.test(str[i])){
        arr.push(str[i]);
     }
     
}
return arr;
}

//Q4
// Develop a JS Code to check if a number is even or odd using recursion 

let n2=7;
console.log(isEven(n2));
function isEven(num){
    if(num % 2 == 0){
        return 'even';
    }else if(num % 2 != 0){
        return 'odd';
    }
    else{
        return 'not number';
    }
}


//Q5
// Write a function to swap all instances of string ch1 
// with string ch2 and vice versa  (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")

let string ='aaddeee';
// charSwap(string , 'a', 'd')
console.log(charSwap(string , 'a', 'd'));


function charSwap(str, ch1, ch2){
    let editString ='';

    for(let i=0; i<str.length; i++){
        if(str[i] == ch1){
            editString += ch2;
            // str[i]= ch2;
            // console.log(str[i]= ch2);
            // console.log(str[i]);
        }
        else if(str[i] == ch2){
            editString += ch1;
            // str[i]= ch1;
        } else{
            editString += str[i];
        }
    }
    // console.log(editString);

 return editString;
}


//Q6
// Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]

let names = ['Rawan', 'Jafar', 'Muhammad', 'Muhammad', 'Esraa', 'Dareen'];

console.log(names);

//Q7
// Use forEach to  Return all the names in the previous array

names.forEach(function(name){
    console.log(name);
});

//Q8
//Project an array of series into an array of {id, title} pairs using forEach()


	let newSeries = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		         ]

            console.log(newSeriesArray(newSeries));

                 function newSeriesArray() {

                    let newArrau =[];
                    newSeries.forEach(e=>
                        {
                            newArrau.push({"id": e.id, "title": e.title});
                        }
                        );
                        return newArrau;
                 }

//Q9
//Use map() now to implement the same previous functionality

let newArray = newSeries.map(e=>{
    return {
        "id": e.id,
        "title": e.title
    }
});

console.log(newArray);

//Q10
//Use filter() to return the series with a rating under 5 

let newArray2 = newSeries.filter(e=>{
   return e.rating <5 ;
});
console.log(newArray2);

//Q11
// Use reduce()  function to return the longest string in an array of strings.

let strings =["Java", "JavaScript", "Python", "C++", "PHP"];

let longestString = strings.reduce((a, b)=>{
    return a.length > b.length? a : b;
});

console.log(longestString);

//Q12

// Create a function displayName that, given the pokemon data, below, uses reduce to return 
// an array containing the names of the characters.

let pokemonData =[
    {
      "game_index": 76,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }}]

      console.log( displayName(pokemonData));

function displayName(pokData){
    return pokData.reduce((a, b)=>{
        return a.concat(b.version.name);
    }, []).join(', ');

}

//Q13
// Write a function that takes the following array of objects, uses binary search to 
// search for certain email input from the user, and return its value.

let objs = [ {
 "name": "ude.Top",
 "email": "Taya.Kerluke53@gmail.com",
 "add": {
 "street": " Felds", "suie": "Ste 231",
 "city": "Tinamuth", "zcode": "07584-6653",
 "geo": { "lat": "75.023", "lng": "-17.1824" }
 },
 "phone": "795-827-5446 x18366",
 "website": "nico.com",
 "company": {
 "name": "Champlin, Barrows and me",
 "catchPhrase": "Object user-facing orchestration",
 "bs": " integrated content" 
},
 "firstN": "Mida", "lastN": "Feey"
 } ]

 let email = prompt("email : ");

 objs.forEach(e=>{
    if(email==e.email){
        console.log("True : "+e.email);
    }
    else{
        console.log('not found');
    }
 }
    )


    //Q14
    //What is the output of the following JS code segments? and Why?

 