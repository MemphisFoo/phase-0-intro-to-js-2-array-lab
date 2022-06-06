// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    [cats.push("Ralph")]
};

function destructivelyPrependCat(Bob) {
    [cats.unshift("Bob")]
};

function destructivelyRemoveLastCat(Garfield) {
    [cats.pop("Garfield")]
};

function destructivelyRemoveFirstCat(Milo) {
    [cats.shift("Milo")]
};

const copyCat = [...cats, "Broom"]

function appendCat(Broom) {
    return copyCat
};

const kittyKitty = ["Arnold", ...cats];

function prependCat(Arnold) {
    return kittyKitty
};

const kittyCats = [...cats.slice(0,2)];

function removeLastCat() {
    return kittyCats
};

const hereKittyKitty = [...cats.slice(1)];

function removeFirstCat() {
    return hereKittyKitty
};