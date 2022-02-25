import Vue from "vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
	// You can set your default options here
};

Vue.use(Toast, options);


export default class Notifier {
	constructor(store) {

	}

	info(text) {
		console.log(Toast);
	}

	success(text) {
		console.log(text);
	}

	error(text) {
		console.log(Toast);
		console.log(text);
	}

	warning(text) {
		console.log(text);
	}
}
