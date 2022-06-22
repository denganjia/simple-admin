import { MenuOption } from "naive-ui";
import { RouteRecordName } from "vue-router";
// import { RouteRecordRaw } from "vue-router";
// import { routes } from "../routers/index";
import { menu } from "./renderMenu";

// const flotRouter = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
// 	let arr: RouteRecordRaw[] = [];
// 	routes.forEach(route => {
// 		arr.push({ ...route });

// 		if (route.children && route.children.length > 0) {
// 			arr.push(...flotRouter(route.children));
// 		}
// 	});
// 	return arr;
// };

// const flotedRouter = flotRouter(routes[0].children!);

// export const renderBreadcrumb = (path: string): Breadcrumb[] => {
// 	const pathArr = path.split("/").slice(1);
// 	let breadcrumbArr: Breadcrumb[] = [];
// 	pathArr.forEach(p => {
// 		flotedRouter.forEach(f => {
// 			if (p === f.path) {
// 				const label = f.meta!.title ?? "未知";
// 				breadcrumbArr.push({
// 					label,
// 					path: p,
// 					children: f.children?.map(c => ({ label: c.meta!.title ?? "", path: c.path })),
// 					icon: f.meta!.icon ?? "",
// 				});
// 			}
// 		});
// 	});

// 	return breadcrumbArr;
// };
export const renderBreadcrumb = (routename?: string | null | undefined | symbol | RouteRecordName) => {
	if (!routename) {
		console.error("Function `renderbreadcrumb` needs to receive a parameter");
		return [];
	}
	const res: MenuOption[] = [];
	try {
		const getNodePath = (menu: MenuOption) => {
			res.push(menu);
			if (menu.key === routename) {
				throw new Error("Find It");
			}
			if (menu.children && menu.children.length > 0) {
				menu.children.forEach(m => getNodePath(m));
				res.pop();
			} else {
				res.pop();
			}
		};
		menu.forEach(m => {
			getNodePath(m);
			res.length = 0;
		});
	} catch (err) {
		return res;
	}
};
// export const renderBreadcrumb = (path: string): MenuOption[] => {
// 	const pathlist = path.split("/").slice(1);

// 	const maxIndent = pathlist.length - 1;
// 	let indent = 0;
// 	let res: MenuOption[] = [];
// 	const getNodePath = (menu: MenuOption) => {
// 		if (indent > maxIndent) indent = maxIndent;
// 		if (menu.key === pathlist[indent]) {
// 			res.push(menu);
// 		}
// 		if (menu.children && menu.children.length > 0) {
// 			indent++;
// 			menu.children.forEach(m => {
// 				getNodePath(m);
// 			});
// 		}
// 	};
// 	menu.forEach(m => {
// 		indent = 0;
// 		getNodePath(m);
// 	});

// 	return res;
// };
