// I got help from my brother to display the word info and the graph

const wordElement = document.getElementById("word");

const urlParams = new URLSearchParams(window.location.search);
const word = urlParams.get("word");

wordElement.innerText = word;
const thisWordData = worddata.find((wordData) => wordData.word === word);

const wordDefinition = document.getElementById("word-definition");
wordDefinition.innerText = thisWordData.definition;

const wordPartofSpeech = document.getElementById("word-part-of-speech");
wordPartofSpeech.innerText = thisWordData.partOfSpeech;

const wordSynonyms = document.getElementById("word-synonyms");
wordSynonyms.innerText = thisWordData.synonyms;

const wordExamples = document.getElementById("word-examples");
wordExamples.innerText = thisWordData.examples;

console.log(wordExamples);

const wordEtymology = document.getElementById("word-etymology");
wordEtymology.innerText = thisWordData.etymology;

const wordObscurity = document.getElementById("word-obscurity");
wordObscurity.innerText = thisWordData.obscurity;

const buildChart = () => {
	const canvas = document.getElementById("word-timeseries");
	// labels are range from 2024 to 2024-n
	let labels = [];
	for (let i = -thisWordData.timeseries.length; i < 0; i++) {
		labels.push("" + (2024 + i));
	}
	new Chart(canvas, {
		type: "line",
		data: {
			labels: labels,
			datasets: [
				{
					label: "Frequency",
					data: thisWordData.timeseries,
					borderColor: "rgba(75, 192, 192, 1)",
					fill: false,
					tension: 0.1,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	});
};

buildChart();
