let count = 0
let counter = 0
function printBanner(text){
    console.log("*".repeat(text.length + 4))
    console.log("* " + text + " *")
    console.log("*".repeat(text.length + 4))
}

printBanner("WELCOME TO THE DUNGEON")

while (count <= 10) {
    console.log(count)
    count ++
}

numbers = []

function factors(numeral) {
    while (counter <= numeral){
    if (numeral % counter === 0) {
            numbers.push(counter)
            counter ++
        } 
    else {
        counter ++
    }
    } 
    counter = 1
    return numbers

}

console.log(factors(90))
