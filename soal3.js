const divideAndSort = (number) => {
    if (typeof number !== "number") {
        return "Please enter a valid number";
    }
    const array = number.toString().split("0");
    const sorted = array.map((num) => parseInt(num.split("").sort().join("")));
    const result = parseInt(sorted.join(""));

    return result;
};

const input = 28183023813023878092;
console.log(divideAndSort(input));
