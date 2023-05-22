let randoNum = Math.floor(Math.random()*100);
/*console.log(randoNum);
if (randoNum > 50){
    console.log("hooray you won, your score is " + randoNum);
}
else {
    console.log(`your number is less tan 50 it is ${randoNum}`)
}*/
if(randoNum > 50){
    console.log("greater than 50");
}
else if(randoNum <= 50 && randoNum >= 25){
    console.log("number is between 50 and 25");
}
else{
    console.log('number is less than 25');
}
if(randoNum % 2 == 0){
    console.log('num is even');
}
else{
    console.log('num is odd');
}
console.log(`the last digit if the number is ${randoNum % 10}`);

switch (randoNum){
    case 2: console.log('the number is 2');
    break;
    case 3: console.log('the number is 3');
    break;
    case 4: console.log('the number is 4');
    break;
    default: console.log('the number is not 2,3, or 4');
    
}