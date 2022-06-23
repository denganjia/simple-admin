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
				// redirect: "/table/pro-table",
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
				path: "about",
				name: "about",
				component: () => import("@/views/About/index.vue"),
				meta: {
					title: "关于",
					icon: "doc-detail",
				},
			},
		],
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/Login/index.vue"),
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
	strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 }),
});
