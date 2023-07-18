// functions, return, if, arrays, for loop

let food = [100, 200, 250];

var calci = (arr) => {
    let total = 0;
    for(var i=0; i<arr.length; i++)
    {
        total += arr[i];
    }
    if(total>500)
    {
        console.log(`too much expenditure bro`);
        return total; //cant have only return
    }
    console.log(`You are good too go bro`);
    return total;
}

console.log(`Your total is ${calci(food)}`);


//consoling the object
console.log({
    clothes: calci([400,400,1000,200]),
    food: calci(food),
});