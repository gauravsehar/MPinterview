/**    ___                               ___       _
 *    / __| __ _  _  _  _ _  __ _ __ __ / __| ___ | |_   __ _  _ _
 *   | (_ |/ _` || || || '_|/ _` |\ V / \__ \/ -_)| ' \ / _` || '_|
 *    \___|\__,_| \_,_||_|  \__,_| \_/  |___/\___||_||_|\__,_||_|
 */

/**
 * Question 1:
 * Write a function to create a 2-D List/Array with random integers between 0 to 100.
 * This function should take two arguments - numberOfRows and numberOfColumns and return a 2D list.
 */
//Answer
function create2DArray(numberOfRows, numberOfColumns) {
	let result = new Array(numberOfRows);
	for (let i = 0; i < numberOfRows; i++) {
		result[i] = new Array(numberOfColumns);
	}
	for (let i = 0; i < numberOfRows; i++) {
		for (let j = 0; j < numberOfColumns; j++) {
			result[i][j] = Math.floor(Math.random() * 100);
		}
	}
	return result;
}

/**
 * Question 2:
 * Write a function to sort the 2-D list based on column index keeping the rows intact.
 * This function should take two arguments - 2D list created above and column Index and return sorted 2D list.
 */
//Answer
function sort2DArray(arr, columnIndex) {
	return arr.sort(function (a, b) {
		return a[columnIndex] - b[columnIndex];
	});
}

/**
 * Question 3:
 * Given INPUT & OUTPUT
 */
//INPUT GIVEN
const awards = [
	{
		name: 'James Peebles',
		category: 'Physics',
		research: 'Theoretical discoveries in physical cosmology',
		year: 2019,
	},
	{
		name: 'Michel Mayor',
		category: 'Physics',
		research: 'Discovery of an exoplanet orbiting a solar-type star',
		year: 2019,
	},
	{
		name: 'Didier Queloz',
		category: 'Physics',
		research: 'Discovery of an exoplanet orbiting a solar-type star',
		year: 2019,
	},
	{
		name: 'John B. Goodenough',
		category: 'Chemistry',
		research: 'Development of lithium-ion batteries',
		year: 2019,
	},
	{
		name: 'M. Stanley Whittingham',
		category: 'Chemistry',
		research: 'Development of lithium-ion batteries',
		year: 2019,
	},
	{
		name: 'Akira Yoshino',
		category: 'Chemistry',
		research: 'Development of lithium-ion batteries',
		year: 2019,
	},
	{
		name: 'Arthur Ashkin',
		category: 'Physics',
		research: 'Optical tweezers and their application to biological systems',
		year: 2018,
	},
	{
		name: 'Gerard Mourou',
		category: 'Physics',
		research: 'Method of generating high-intensity, ultra-short optical pulses',
		year: 2018,
	},
	{
		name: 'Donna Strickland',
		category: 'Physics',
		research: 'Method of generating high-intensity, ultra-short optical pulses',
		year: 2018,
	},
	{
		name: 'Frances H. Arnold',
		category: 'Chemistry',
		research: 'Directed evolution of enzymes',
		year: 2018,
	},
	{
		name: 'George P. Smith',
		category: 'Chemistry',
		research: 'Phage display of peptides and antibodies.',
		year: 2018,
	},
	{
		name: 'Sir Gregory P. Winter',
		category: 'Chemistry',
		research: 'Phage display of peptides and antibodies.',
		year: 2018,
	},
];
//Answer
function formatAwards(awards) {
	let prizes = [];
	/**
	 * group the awards by category like:
	 * {category1:[{},{},...],category2:[{},{},...]...}
	 */
	let groupedAwards = awards.reduce((acc, curr) => {
		acc[curr.category] = acc[curr.category] || [];
		acc[curr.category].push(curr);
		return acc;
	}, {});

	for (let cat in groupedAwards) {
		groupedAwards[cat].forEach((award) => {
			let prizeIndex = prizes.findIndex(
				(prize) => prize.category === cat && prize.year === award.year
			);
			if (prizeIndex === -1) {
				prizes.push({
					category: cat,
					year: award.year,
					winners: [],
				});
				prizeIndex = prizes.length - 1;
			}

			//due to limited knowledge about share given I simply ignored the 0.33 in expected output.
			let share = 0.5;
			if (prizes[prizeIndex].winners.length > 0) {
				share = 0.25;
			}
			prizes[prizeIndex].winners.push({
				name: award.name,
				share,
			});
		});
	}
	return prizes;
}

/**
 * Execution
 */
const arrayRows = 4;
const arrayColumn = 5;
const columnIndex = 2;

//1
let array = create2DArray(arrayRows, arrayColumn);
console.log('Answer 1: Original array:', array);
//2
let sortedArray = sort2DArray(array, columnIndex);
console.log(
	'Answer 2: Sorted array based on column ',
	columnIndex,
	':',
	sortedArray
);
//3
const formattedAwards = formatAwards(awards);
console.log('Answer 3: ', JSON.stringify(formattedAwards));

/**
 * OUTPUT:
 * node GauravSehar.js
 * Answer 1: Original array: [
 *   [ 73, 78, 22, 86, 13 ],
 *   [ 65, 33, 82, 55, 61 ],
 *   [ 69, 80, 76, 32, 96 ],
 *   [ 47, 15, 59, 91, 27 ]
 * ]
 * Answer 2: Sorted array based on column  2 : [
 *   [ 73, 78, 22, 86, 13 ],
 *   [ 47, 15, 59, 91, 27 ],
 *   [ 69, 80, 76, 32, 96 ],
 *   [ 65, 33, 82, 55, 61 ]
 * ]
 * Answer 3: [{"category":"Physics","year":2019,"winners":[{"name":"James Peebles","share":0.5},{"name":"Michel Mayor","share":0.25},{"name":"Didier Queloz","share":0.25}]},
 * {"category":"Physics","year":2018,"winners":[{"name":"Arthur Ashkin","share":0.5},{"name":"Gerard Mourou","share":0.25},{"name":"Donna Strickland","share":0.25}]},
 * {"category":"Chemistry","year":2019,"winners":[{"name":"John B. Goodenough","share":0.5},{"name":"M. Stanley Whittingham","share":0.25},{"name":"Akira Yoshino","share":0.25}]},
 * {"category":"Chemistry","year":2018,"winners":[{"name":"Frances H. Arnold","share":0.5},{"name":"George P. Smith","share":0.25},{"name":"Sir Gregory P. Winter","share":0.25}]}]
 */
