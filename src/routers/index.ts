import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "main",
		redirect: { name: "index" },
		component: () => import("@/components/layout/index.vue"),
		children: [
			{
				path: "index",
				name: "index",
				component: () => import("@/views/Dashboard/index.vue"),
				meta: { title: "主控台", icon: "bill" },
			},
			{
				path: "table",
				name: "table",
				component: () => import("@/components/Empty/index.vue"),
				meta: { title: "表格页", icon: "like" },
				children: [
					{
						path: "pro-table",
						name: "pro-table",
						component: () => import("@/views/Table/ProTable/index.vue"),
						meta: { title: "ProTable表格", icon: "loading" },
					},
				],
			},
			{
				path: "form",
				name: "form",
				component: () => import("@/components/Empty/index.vue"),
				meta: { title: "表单页", icon: "like" },
				children: [
					{
						path: "base-form",
						name: "base-form",
						component: () => import("@/components/Empty/index.vue"),
						meta: { title: "基础表单", icon: "loading" },
						children: [
							{
								path: "base-form-login",
								name: "base-form-login",
								component: () => import("@/views/Table/ProTable/index.vue"),
								meta: { title: "基础登录表单", icon: "login" },
							},
						],
					},
					{
						path: "validate-form",
						name: "validate-form",
						component: () => import("@/views/Table/ProTable/index.vue"),
						meta: { title: "校验表单", icon: "square" },
					},
				],
			},
		],
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
	strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 }),
});
