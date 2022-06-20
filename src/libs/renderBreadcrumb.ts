import { RouteRecordRaw } from "vue-router";
import { routes } from "../routers/index";
import { Breadcrumb } from "../types/libs";

const flotRouter = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
	let arr: RouteRecordRaw[] = [];
	routes.forEach(route => {
		arr.push({ ...route });

		if (route.children && route.children.length > 0) {
			arr.push(...flotRouter(route.children));
		}
	});
	return arr;
};

const flotedRouter = flotRouter(routes[0].children!);

export const renderBreadcrumb = (path: string): Breadcrumb[] => {
	const pathArr = path.split("/").slice(1);
	let breadcrumbArr: Breadcrumb[] = [];
	pathArr.forEach(p => {
		flotedRouter.forEach(f => {
			if (p === f.path) {
				const label = f.meta!.title ?? "未知";
				breadcrumbArr.push({
					label,
					path: p,
					children: f.children?.map(c => ({ label: c.meta!.title ?? "", path: c.path })),
					icon: f.meta!.icon ?? "",
				});
			}
		});
	});
	return breadcrumbArr;
};
