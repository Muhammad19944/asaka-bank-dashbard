import Vue from "vue";
import axios from "@/plugins/axios"
import JWTService from "@/service/jwt.service"

const plugins = {
	install (Vue) {
		Vue.mixin({
			computed: {
				$axios() {
					return axios
				},
				$jwt: () => JWTService,
			}
		});
	}
};

Vue.use(plugins);
