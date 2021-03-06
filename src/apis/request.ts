import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { APIBaseResult } from "./type";
import { router } from "@/routers/index";
// 根据环境变量区分接口的默认地址
switch (import.meta.env.MODE) {
	case "development":
		// 默认使用这个地址
		// axios.defaults.baseURL = "http://192.168.0.59:21002"'
		// 跨域使用代理
		axios.defaults.baseURL = "/api";
		break;
	case "production":
		// axios.defaults.baseURL = "http://example.com";
		break;
}

// 设置超时时间（10s）
// axios.defaults.timeout = 10000;
// 跨域时候允许携带凭证
axios.defaults.withCredentials = true;

// axios.defaults.withCredentials = false;

const serves = axios.create({
	timeout: 5000,
	method: "get",
	headers: {
		"Content-Type": "application/json",
		"Cache-Control": "no-cache",
	},
});

serves.interceptors.request.use((config: AxiosRequestConfig) => {
	if (config.headers) {
		config.headers.access_token = localStorage.getItem("access_token") ?? "";
		config.headers.role = localStorage.getItem("role") ?? "";
	}
	return config;
});

serves.interceptors.response.use(
	(res: AxiosResponse<{ code: number; data: any | any[]; msg: string }>) => {
		return res.data;
	},
	(err: { response: AxiosResponse }) => {
		const { response } = err;
		if (response) {
			// console.log(response);
			if (response.status === 403) {
				// window.message.error("未登录或登录信息失效！");
				router.push({ path: "/login" });
			} else {
				// window.message.error(response.statusText);
			}
		} else {
			// window.message.error("请求超时");
		}
	},
);

export default serves;

export const request = async <T = any>(config: AxiosRequestConfig): Promise<APIBaseResult<T>> => {
	return new Promise(async (resolve, reject) => {
		serves(config)
			.then(value => {
				console.log(value);
				resolve(value as any);
			})
			.catch(err => {
				reject(err);
			});
	});
};

type RequestConfig = {
	url: string;
	data?: any;
	params?: any;
	contentType?: "application/json" | "application/x-www-form-urlencoded" | "multipart/form-data";
};

export const POST = <T = any>(config: AxiosRequestConfig): Promise<APIBaseResult<T>> => {
	return new Promise(async (resolve, reject) => {
		serves({
			url: config.url,
			data: config.data,
			headers: config.headers ?? {
				"Content-Type": "application/json",
			},
			method: "POST",
		})
			.then(value => {
				resolve(value as any);
			})
			.catch(err => {
				reject(err);
			});
	});
};

export const GET = <T = any>(config: RequestConfig): Promise<APIBaseResult<T>> => {
	return new Promise(async (resolve, reject) => {
		serves({
			url: config.url,
			params: config.params,
			headers: {
				"Content-Type": config.contentType ?? "application/json",
			},
			method: "GET",
		})
			.then(value => {
				resolve(value as any);
			})
			.catch(err => {
				reject(err);
			});
	});
};

export const PUT = <T = any>(config: RequestConfig): Promise<APIBaseResult<T>> => {
	return new Promise(async (resolve, reject) => {
		serves({
			url: config.url,
			data: config.data,
			headers: {
				"Content-Type": config.contentType ?? "application/json",
			},
			method: "PUT",
		})
			.then((value: any) => {
				resolve(value);
			})
			.catch(err => {
				reject(err);
			});
	});
};

export const DELETE = <T = any>(config: RequestConfig): Promise<APIBaseResult<T>> => {
	return new Promise(async (resolve, reject) => {
		serves({
			url: config.url,
			params: config.params,
			headers: {
				"Content-Type": config.contentType ?? "application/json",
			},
			method: "DELETE",
		})
			.then((value: any) => {
				resolve(value);
			})
			.catch(err => {
				reject(err);
			});
	});
};

export const post = POST;
export const get = GET;
export const put = PUT;
export const _delete = DELETE;
