import { request } from "../request";
import { Login } from "../type";

export function login(data: Login.LoginForm) {
	return request({
		url: "/login",
		data,
		method: "POST",
	});
}
