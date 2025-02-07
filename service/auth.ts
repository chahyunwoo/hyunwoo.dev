import axios from "axios";

interface LoginCredentials {
  id: string;
  password: string;
}

export const loginAdmin = async ({ id, password }: LoginCredentials) => {
  const response = await axios.post("/api/auth/login", { id, password });

  if (response.status !== 200) throw new Error("로그인에 실패했습니다.");

  return response.data;
};

export const logoutAdmin = async () => {
  const response = await axios.post("/api/auth/logout");

  if (response.status !== 200) throw new Error("로그아웃에 실패했습니다.");

  return response.data;
};
