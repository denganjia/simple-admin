import { defineStore } from "pinia";
type Tab = {
	title: string;
	key: string;
	icon?: string;
	closable?: boolean;
};
export const useTabBar = defineStore("tabBar", {
	state: (): { tablist: Tab[] } => ({
		tablist: [],
	}),
	getters: {
		currentTab: state => {},
	},
});
