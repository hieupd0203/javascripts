const buttons = document.getElementsByTagName("button");
const reset = document.querySelector("#reset");

const counterValue = document.querySelector("#counter-value");
let count = 0;

[...buttons].forEach((button) => {
	button.addEventListener("click", function () {
		const buttonType = this.dataset.buttonType;
    
		// switch (buttonType) {
		// 	case "increase":
        // counterValue.textContent = (+counterValue.textContent + 1).toString();
		// 		break;

		// 	case "decrease":
        // counterValue.textContent = (+counterValue.textContent - 1).toString();
		// 		break;

		// 	default:
        // counterValue.textContent = "0";
		// 		break;
		// }
		if (buttonType === "increase") {
            count += 1;
			counterValue.textContent = count;
		} else if (buttonType === "decrease") {
            count -= 1;
			counterValue.textContent = count;
		} else {
            count = 0;
			counterValue.textContent = count;
		}
	});
});