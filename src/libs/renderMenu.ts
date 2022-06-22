import { routes } from "@/routers/index";
import { MenuOption } from "naive-ui";
import { RouteRecordRaw } from "vue-router";
import { renderIcon } from "./renderIcon";

const renderMenu = (routes: RouteRecordRaw[], arr: MenuOption[] = []) => {
	routes.forEach(route => {
		if (!route.children) {
			arr.push({
				label: route.meta?.title ?? route.path,
				key: route.name as string,
				icon: renderIcon(route.meta!.icon! as string),
			});
		} else {
			let option: MenuOption = {
				label: route.meta?.title ?? route.path,
				key: route.name as string,
				children: [],
				icon: renderIcon(route.meta!.icon! as string),
			};
			renderMenu(route.children, option.children);
			arr.push(option);
		}
	});
};

export const menu: MenuOption[] = [];
renderMenu(routes[0].children ?? [], menu);
