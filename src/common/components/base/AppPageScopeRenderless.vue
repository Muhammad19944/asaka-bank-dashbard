
<script>
import { debounceEvent } from "@/common/helpers";
import CrudService from "@/service/crud.service";

import { mapGetters } from "vuex"

export default {
	name: "AppPageScopeRenderless",
	props: {
		apiUrl: {
			type: String,
			default: null
		}
	},
	data() {
		return {
			filters: {
				search: null,
				status: null,
			},
			list: [],
			listCount: 0,
			loading: true
		}
	},
	computed: {
		...mapGetters({
			currentUser: "auth/getCurrentUser"
		})
	},
	watch: {
		filters: {
			deep: true,
			handler(value) {
				this.$store.state.pageOptions.page = 1

				window.addEventListener('keyup', this.debouncedSearch())
			}
		}
	},
	created() {
		this.debouncedSearch = debounceEvent(() => this.getAll(),500);

		this.getAll()
	},
	methods: {
		getAll() {
			this.loading = true

			CrudService.getList(this.apiUrl, {
				search: this.filters.search,
				status: this.filters.status,
				page: this.$store.state.pageOptions.page,
				page_size: this.$store.state.pageOptions.page_size
			})
			.then((data) => {
				console.log(data);

				this.list = data.results
				this.listCount = data.count

				// Calculate pagination
				this.$store.state.pageOptions.page_length = Math.ceil(data.count / this.$store.state.pageOptions.page_size);
			})
			.finally(() => {
				this.loading = false
			})
		},
		/*
		*
		* */
		paginate(val) {
			this.$store.state.pageOptions.page = val;
			this.loading = true;

			this.getAll();
		},
	},
	render() {
		return this.$scopedSlots.default({
			filters: this.filters,
			list: this.list,
			count: this.listCount,
			loading: this.loading,
			paginate: this.paginate,
		})
	},
}
</script>
