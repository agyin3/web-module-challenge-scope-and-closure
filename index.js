// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter1 is using closure and will only update it's count through invoking it
 * 
 * Counter2 is accessing the global variable count
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter1
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    return Math.floor(Math.random() * 3)

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, numOfInnings){
  let score = {
    home: 0,
    away: 0
  }

  for(let i=1; i <= numOfInnings; i++){
    // Use cb to randomly generate home team
    // runs for inning and add to total score
    score.home += cb()

    // Use cb to randomly generate away team
    // runs for inning and add to total score
    score.away += cb()

    i++
  }  

  return score
}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(getInningScore, inning, numofInnings) {
  let score = {
    home: 0,
    away: 0
  }

  let inningNum = 1;

  while (inningNum <= numofInnings) {
    let inningScore = getInningScore(inning, 1)
    score.home += inningScore.home
    score.away += inningScore.away

    console.log(`Inning ${inningNum}: Away: ${inningScore.away} - Home: ${inningScore.home}`)

    inningNum++
  }

  return `Final Score: Away: ${score.away} - Home: ${score.home}`
}

console.log(scoreboard(finalScore, inning, 9))


