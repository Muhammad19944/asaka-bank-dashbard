import Vue from "vue";
import axios from "axios";
import { getToken, removeToken } from "@/service/jwt.service";
import store from "@/store"

// axios.interceptors.request.use(
// 	(config) => {
// 		config.headers = {
// 			Authorization: getToken() ? "Token " + getToken() : "",
// 			Accept: "application/json"
// 		};
// 		return config;
// 	},
// 	(error) => Promise.reject(error)
// );
//
// axios.interceptors.response.use(
// 	(response) => response,
// 	(error) => {
// 		if (error.response.status === 401) {
// 			removeToken();
// 		}
//
// 		Vue.$toast.error(error.response.data.message);
//
// 		return Promise.reject(error.response);
// 	}
// );
//
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
// Vue.prototype.$http = axios;
//
// export default axios;

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL ,
    headers: {
        common: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    },
})

instance.interceptors.request.use(
    (config) => {

        if (getToken()) {
            config.headers.Authorization = "Token " + getToken()

            if(config.url !== "/my/profile/") {
                config.baseURL = store.state.auth.companyId ? `${process.env.VUE_APP_BASE_URL}/${store.state.auth.companyId}` : process.env.VUE_APP_BASE_URL
            }
        }

        return config
    },
    (error) => Promise.reject(error)
)

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
	        removeToken()
        }

	    Vue.$toast.error(error.response.data.message)

        return Promise.reject(error)
    }
)

Vue.prototype.$http = instance;

export default instance;
