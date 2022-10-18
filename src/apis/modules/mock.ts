import { get } from "../request";
import { MockData } from "../type";



export function getMockData(params?: any) {
	return get<MockData[]>({
		url: "/table-data",
		params,
	});
}
