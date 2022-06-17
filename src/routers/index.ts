import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";

const routers: RouteRecordRaw[] = [
	{
		path: "/",
		name: "index",
		component: () => import("@/components/layout/index.vue"),
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: routers,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
