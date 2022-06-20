import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "index",
		redirect: "/dashboard",
		component: () => import("@/components/layout/index.vue"),
		children: [
			{
				path: "dashboard",
				name: "dashboard",
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
		],
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
	strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 }),
});
