const findTheOldest = function(people) {
    const aged = people.reduce((oldest, person) => {
        let yearDifference;
        const currentYear = new Date().getFullYear();
        if(person.yearOfDeath) {
            yearDifference = person.yearOfDeath - person.yearOfBirth;
        } else {
            yearDifference = currentYear - person.yearOfBirth;
        }

        let oldestYearDifference = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;

        if(yearDifference > oldestYearDifference) {
            oldest = person;
        }

        return oldest;
    }, people[0]);

    return aged;
};

// Do not edit below this line
module.exports = findTheOldest;
