import { APIBaseResult } from "../apis/type";

export declare namespace UseTable {
	type API = (params?: any) => Promise<APIBaseResult<unknown[]>>;
	type InitValue = { [key: string]: unknown };
	type POST = (data: APIBaseResult<unknown>) => { total: number; datalist: unknown[] };

}
