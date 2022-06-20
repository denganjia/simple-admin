export type Breadcrumb = {
	label: string | {};
	path: string;
	icon?: string| {};
	children?: Breadcrumb[];
};
