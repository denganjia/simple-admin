import { reactive, onBeforeMount, ref } from "vue";
import { UseTable } from "../types/libs";

export const useTable = (api: UseTable.API, post?: UseTable.POST, initValue: UseTable.InitValue = {}) => {
	const data = ref<any[]>([]);
	const searchForm = reactive<{ [key: string]: any }>({});
	const pagination = reactive({
		pageNum: 1,
		pageSize: 10,
		total: 0,
	});
	onBeforeMount(async () => {
		await getData();
	});

	//合并参数
	const assignParams = () => {
		return Object.assign({}, searchForm, initValue, pagination);
	};

	//获取数据
	const getData = async () => {
		const res = await api(assignParams());
		if (post) {
			const postResult = post(res);
			pagination.total = postResult.total;
			data.value = postResult.datalist;
		} else {
			data.value = res.data;
			pagination.total = res.data.length;
		}
	};

	return {
		getData,
		data,
		pagination,
		searchForm,
	};
};
