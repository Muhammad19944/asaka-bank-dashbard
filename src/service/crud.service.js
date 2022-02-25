
import axios from "@/plugins/axios";

class CrudService {

	getList(url, params) {
		return new Promise((resolve, reject) => {
			axios.get(url, { params }).then(({ data }) => {
				resolve(data)
			}).catch((error) => {
				reject(error)
			})
		})
	}
}

export default new CrudService()
