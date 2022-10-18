export type APIBaseResult<T = any> = {
  code: number;
  data: T;
  msg: string;
};

export type PaginationResponse<T = any> = {
  total: number;
  datalist: T[];
};

export declare namespace Login {
  type LoginForm = {
    account: string;
    password: string;
  };

  type LoginResult = {
    access_token: string;
    role: string;
  };
}

export declare namespace UserManager {
  export type UserInfo = {
    _id: string;
    account: string;
    nickname: string;
    avatar: string;
    createTime: number;
  };
}

export interface MockData {
	id: number;
	name: string;
	age: number;
	city: string;
	avatar: string;
	gender: number;
}