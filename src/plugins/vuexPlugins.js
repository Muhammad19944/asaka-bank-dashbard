import JWTService from "@/service/jwt.service";
import axios from "@/plugins/axios";
import Notifier from "@/plugins/vueToast"

export default function(store) {
	store.$jwt = JWTService
	store.$axios = axios
	store.$toaster = Notifier
}
