// usage of for loops and template literals

let names = ['bob','tim','david'];
let lName = 'jonathan';

let fullNames = [];
for(let i=0; i<names.length; i++)
{
    let str = `${names[i]} ${lName}`;
    fullNames.push(str);
}
console.log(fullNames);