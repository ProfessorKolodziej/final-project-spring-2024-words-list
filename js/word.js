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

const wordEtymology = document.getElementById("word-etymology");
wordEtymology.innerText = thisWordData.etymology;

const wordObscurity = document.getElementById("word-obscurity");
wordObscurity.innerText = thisWordData.obscurity;

const wordAnimation = document.getElementById("word-animation");
wordAnimation.src = "images/animations/" + thisWordData.word + ".gif";

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
					borderColor: "white",
					fill: false,
					tension: 0.1,
					pointRadius: 0,
					borderWidth: 1.5,
					// make the y axis be 0.0000X% instead of 2.5E-5
					text: (value) => value.toExponential(1),
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					ticks: {
						color: "white",
						callback: function (value, index, values) {
							return value.toFixed(8) + "%";
						},
					},
				},
				x: {
					ticks: {
						color: "white",
					},
				},
			},
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	});
};

buildChart();

document
	.getElementsByClassName("back-arrow")
	.item(0)
	.addEventListener("click", () => {
		window.history.back();
	});
