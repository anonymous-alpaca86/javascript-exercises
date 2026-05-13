const findTheOldest = function(arr) {
    let max=0;
    const newArr=arr.map(el=>({
        ...el,age:(el.yearOfDeath||2026)-el.yearOfBirth }));
newArr.sort((a,b)=>b.age-a.age);
console.log(newArr);
return newArr[0];
}


// Do not edit below this line
module.exports = findTheOldest;
