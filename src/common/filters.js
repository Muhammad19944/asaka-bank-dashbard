import Vue from "vue"
import { format, isValid } from "date-fns";

Vue.filter("filterHHmm", (val) => {
	return isValid(new Date(val)) ? format(new Date(val), "HH:mm") : "Не верный формат даты"
})

Vue.filter("filterDateAndTimeHour", (val) => {
	return isValid(new Date(val)) ? format(new Date(val), "d.MM.yyyy HH:mm") : "Не верный формат даты"
})
