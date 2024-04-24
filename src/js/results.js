// I got help from my brother to display the results

const urlParams = new URLSearchParams(window.location.search);

const partOfSpeech = urlParams.get("partOfSpeech");
const obscurity = urlParams.get("obscurity");
const yearAdded = urlParams.get("yearAdded");

const filtersDisplay = document.querySelector("#filters-display");

filtersDisplay.innerText = `Part of Speech: ${partOfSpeech}, Obscurity: ${obscurity}, Year Added: ${yearAdded}`;

const getResults = () => {
	const filtered = worddata.filter((word) => {
		return word.partOfSpeech === partOfSpeech && word.obscurity === obscurity; // && word.yearAdded === yearAdded
	});
	return filtered;
};

const resultsList = document.querySelector("#word-results");

function displayResults() {
	const results = getResults();
	console.log("results", results);
	results.forEach((word) => {
		const listItem = document.createElement("li");
		const wordLink = document.createElement("a");
		wordLink.href = `word.html?word=${word.word}`;
		wordLink.innerText = word.word;
		listItem.appendChild(wordLink);
		resultsList.appendChild(listItem);
	});
}

displayResults();
