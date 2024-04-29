// I got help from my brother to get data for each of my words to paste into my scripts.js file
const words = [
	"curtail",
	"veracity",
	"moire",
	"philistine",
	"inure",
	"imperturbable",
	"mesocarp",
	"myriad",
	"prognosticate",
	"sesquipedalian",
];

let output = [];

async function build() {
	for (let word of words) {
		let data = {};
		let response = await fetch(
			`https://books.google.com/ngrams/json?content=${word}&year_start=1850&year_end=2024&corpus=26&smoothing=0`
		);
		let json = await response.json();
		data["timeseries"] = json[0]["timeseries"];
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key":
					"d2ac1a79bfmsh467b05d3bc9928fp1c9c54jsndbb3c1e1d403",
				"X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
			},
		};
		let wordsapiresponse = await fetch(
			`https://wordsapiv1.p.rapidapi.com/words/${word}`,
			options
		);
		let wordsapi = (await wordsapiresponse.json())["results"][0];
		data["definition"] = wordsapi["definition"];
		data["synonyms"] = wordsapi["synonyms"];
		data["partOfSpeech"] = wordsapi["partOfSpeech"];
		data["examples"] = wordsapi["examples"];
		data["word"] = word;

		output.push(data);
	}

	console.log(JSON.stringify(output, null, 4));
}

build();
