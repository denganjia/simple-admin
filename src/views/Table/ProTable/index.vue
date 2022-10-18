<template>
	<pro-table :columns="columns" :api="API.getMockData" :postData="postData"> </pro-table>
</template>

<script setup lang="ts">
import ProTable from "@/components/ProTable/index.vue";
import { ProTableColumns } from "@/components/ProTable/types";
import { NButton, NImage } from "naive-ui";
import { h } from "vue";
import { API } from "@/apis";
import { MockData, APIBaseResult } from "@/apis/type";
const postData = (res: APIBaseResult) => {
	return {
		total: res.data.total,
		datalist: res.data.datalist,
	};
};
const columns: ProTableColumns<MockData> = [
	{
		title: "头像",
		key: "avatar",
		align: "center",
		search: false,
		render(row) {
			return h(NImage, { src: row.avatar, width: 20 });
		},
	},
	{
		title: "姓名",
		key: "name",
		filedType: "Input",
		fieldProps: {
			maxlength: 12,
			showPasswordToggle: true
		},
	},
	{
		title: "年龄",
		key: "age",
		filedType: "InputNumber",
		fieldProps: { disabled: true },
	},
	{
		title: "性别",
		key: "gender",
		filedType: "Select",
		fieldProps: {
			multiple: true
		}
	},
	{
		title: "城市",
		key: "city",
		filedType: "Select",
	},

	{
		title: "操作",
		key: "action",
		search: false,
		render(row) {
			return h("span", {}, h(NButton, { size: "small" }, { default: () => "删除" }));
		},
	},
];
</script>

<style scoped lang="scss">
</style>
