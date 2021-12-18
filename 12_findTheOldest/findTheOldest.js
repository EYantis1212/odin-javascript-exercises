const people = [
	{
		name: "Carly",
		yearOfBirth: 1942,
		yearOfDeath: 1970,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];

const findTheOldest = function (array) {
	return array.reduce((previousPerson, currentPerson) => {
		const previousAge = findAge(
			previousPerson.yearOfDeath,
			previousPerson.yearOfBirth
		);
		const currentAge = findAge(
			currentPerson.yearOfDeath,
			currentPerson.yearOfBirth
		);
		return previousAge < currentAge ? currentPerson : previousPerson;
	});
};
function findAge(death, birth) {
	if (!death) {
		death = new Date().getFullYear();
	}
	return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
