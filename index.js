function getRandomBirthday() {
    return Math.floor(Math.random() * 365);
}

function birthdayToString(dayOfYear) {
    // input: number 0-355
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
    var day = dayOfYear;
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
    // input: list of numbers 0-355
    // output: list of numbers 0-355
    var result = [];
    for (const day of birthdays) {
        if (birthdays.includes(day) && !result.includes(day)) {
            result.push(day);
        }
    }
    return result;
}

function 