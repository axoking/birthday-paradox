function getRandomBirthday() {
    return Math.floor(Math.random() * 365);
}

function birthdayToString(dayOfYear) {
    // input: number 0-364
    // output: e.g. "1. Jan"
    const months = [
        ["Jan", 31],
        ["Feb", 28],
        ["Mär", 31],
        ["Apr", 30],
        ["Mai", 31],
        ["Jun", 30],
        ["Jul", 31],
        ["Aug", 31],
        ["Sep", 30],
        ["Okt", 31],
        ["Nov", 30],
        ["Dez", 31]
    ];
    var day = dayOfYear + 1;
    var monthIndex;
    for (monthIndex = 0; monthIndex < 12; monthIndex++) {
        const [name, daysThisMonth] = months[monthIndex];
        if (day <= daysThisMonth) {
            return day.toString() + ". " + name;
        };
        day -= daysThisMonth;
    }
}

function findPairBirthdays(birthdays) {
    // input: list of numbers 0-364
    // output: list of numbers 0-364
    var result = [];
    for (const day of birthdays) {
        if (birthdays.includes(day) && !result.includes(day)) {
            result.push(day);
        }
    }
    return result;
}

function getRandomBirthdayArray(count) {
    const array = [];
    for (var i = 0; i < count; i++)
        array.push(getRandomBirthday());
    return array;
}

function updatePeople(change) {
    // change: number (+1 or -1)
    const newCount = peopleCount + change;
    if (newCount < 2 || newCount > 100) return;
    peopleCount = newCount;

    tries = 0;
    succeses = 0;

    const [birthdays, pairs] = calculate();
    display(birthdays, pairs);
}

function calculate() {
    // generates random birthday for every person, finds pairs and updates the statistics
    // returns the birthdays and pairs
    const birthdays = getRandomBirthdayArray(peopleCount);
    const pairs = findPairBirthdays(birthdays);
    tries++;
    if (pairs.length) succeses++;
    return [birthdays, pairs];
}

function display(birtdays, pairs) {
    // both inputs: list of numbers 0-364
    const peopleElements = birthdays.map(birthday => {
        const element = document.createElement("div");
        element.classList.add("person");
        element.innerText = birthdayToString(birthday);
        if (pairs.includes(birthday))
            element.classList.add("success");
        return element;
    });
    peopleTag.innerHTML = "";
    for (const element of peopleElements) {
        peopleTag.appendChild(element);
    }
}

const peopleTag = document.getElementById("people");

document.getElementById("incPeople").addEventListener("click", () => {
    updatePeople(1);
})
document.getElementById("decPeople").addEventListener("click", () => { updatePeople(-1); })

var peopleCount = 2;
var tries = 0;
var succeses = 0;