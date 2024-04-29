// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// I got help from my brother for the accordion/selecting

let obscurityValue = "";
let partOfSpeechValue = "";
let yearAddedValue = "";
const accordionHeader = document.querySelectorAll(".accordion-header");
const accordionItems = document.querySelectorAll(".accordion-item");
accordionHeader.forEach((header) =>
	header.addEventListener("click", () => {
		const item = header.parentElement;
		const isItemOpen = item.classList.contains("open");
		accordionItems.forEach((item1) => {
			item1.classList.remove("open");
			let content = Array.from(item1.children).filter((s) =>
				s.className.includes("accordion-content")
			)[0];
			content.style.height = "0px";
		});
		let content = Array.from(item.children).filter((s) =>
			s.className.includes("accordion-content")
		)[0];
		if (!isItemOpen) {
			item.classList.toggle("open");
			content.style.height = "200px";
		} else content.style.height = "0px";
	})
);

const accordionOptions = document.querySelectorAll(".accordion-option");
accordionOptions.forEach((option) =>
	option.addEventListener("click", () => {
		const optionType = option.parentElement.id;
		const value = option.id;
		console.log(value);
		console.log(optionType);
		accordionOptions.forEach((option) => {
			console.log(option.parentElement.id, optionType);
			if (option.parentElement.id == optionType) {
				option.parentElement.previousElementSibling.classList.remove(
					"active"
				);
				option.classList.remove("active");
			}
		});
		option.parentElement.previousElementSibling.className += " active";
		option.className += " active";
		if (optionType == "obscurity") obscurityValue = value;
		else if (optionType == "part-of-speech") partOfSpeechValue = value;
		else if (optionType == "year-added") yearAddedValue = value;
		console.log(obscurityValue);
	})
);

const searchButton = document.querySelector("#discover-button");
const errorText = document.querySelector("#error-text");
searchButton.addEventListener("click", () => {
	if (
		!obscurityValue ||
		!partOfSpeechValue // || !yearAddedValue//
	) {
		errorText.innerText = "Please select all options";

		return;
	}
	window.location.href = `/results.html?obscurity=${obscurityValue}&partOfSpeech=${partOfSpeechValue}&yearAdded=${yearAddedValue}`;
});

const options = document.querySelectorAll(".accordion-option");

/*Got help from ChatGPT on how to make hover features stay on click*/
options.forEach((option) => {
	option.addEventListener("click", function () {
		// Add 'active' class to the clicked element
		this.classList.add("active");
	});
});
// Remove 'active' class from all elements
options.forEach((el) => {
	el.classList.remove("active");
});
