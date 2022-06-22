import { defineStore } from "pinia";
import { MenuOption } from "naive-ui";
type Tab = Pick<MenuOption, "label" | "key"> & { closable?: boolean };
export const useTabStore = defineStore("tabBar", {
	state: (): { tablist: Tab[]; activeTab: Tab } => ({
		tablist: [{ label: "主控台", key: "index", closable: false }],
		activeTab: { label: "主控台", key: "index", closable: false },
	}),
	getters: {
		list: state => state.tablist,
		active: state => state.activeTab,
	},
	actions: {
		addTab(payload: MenuOption) {
			let isInTabList = false;
			this.tablist.forEach(tab => {
				if (tab.key === payload.key) isInTabList = true;
			});
			if (!isInTabList) {
				this.tablist.push({ ...payload, closable: true });
			}
			this.setActiveTab(payload);
		},
		setActiveTab(name: Tab | string) {
			if (typeof name === "string") {
				this.tablist.forEach(tab => {
					if (tab.key === name) {
						this.activeTab = tab;
					}
				});
			} else {
				this.activeTab = name;
			}
		},
		removeTab(name: string) {
			const index = this.tablist.findIndex(tab => tab.label === name);
			if (this.active === this.tablist[index].label) {
				if (index > 0) {
					this.activeTab = this.tablist[index - 1];
				}
			}
			this.tablist.splice(index, 1);
		},
	},
	persist: true,
});
