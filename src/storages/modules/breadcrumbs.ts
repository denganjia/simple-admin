import { MenuOption } from "naive-ui";
import { defineStore } from "pinia";

// 面包屑存储库
export const useBreadcrumbStore = defineStore("breadcrumbStore", {
	state: (): { breadcrumb: any } => ({
		breadcrumb: {},
	}),
	getters: {
		get(state) {
			return (key: string) => {
				return state.breadcrumb[key];
			};
		},
	},
	actions: {
		init(menuList: MenuOption[]) {
			console.log("do It");
			const loop = (menu: MenuOption) => {
				if (menu.children && menu.children.length > 0) {
					menu.children.forEach(m => loop(m));
				} else {
					this.breadcrumb[menu.key as string] = findPath(menu.key, menuList);
				}
			};
			menuList.forEach(m => {
				loop(m);
			});
		},
	},
	persist: true,
});

const findPath = (routename: string | unknown, menu: MenuOption[]) => {
	if (!routename) {
		console.error("Function `findPath` needs to receive a parameter");
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
