import { h } from "vue";
import type { Component } from "vue";
import { NIcon } from "naive-ui";
import { IconPark } from "@icon-park/vue-next/es/all";

export function renderIcon(icon: string | Component) {
	if (typeof icon === "string") {
		return () => h(NIcon, null, { default: () => h(IconPark, { type: icon }) });
	} else {
		return () => h(NIcon, { component: icon });
	}
}
