"use client";

import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { loginAdmin, logoutAdmin } from "@/service/auth";
import { clearAuth, setAuth } from "@/store/features/authSlice";

export default function AdminLoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, adminId } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginAdmin(formData);

      if (response.success) {
        dispatch(setAuth({ adminId: response.admin.id }));
        router.push("/");
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "로그인에 실패했습니다."
      );
    }
  };

  const handleLogout = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await logoutAdmin();

      if (response.success) {
        dispatch(clearAuth());
        router.push("/");
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "로그아웃에 실패했습니다."
      );
    }
  };

  return (
    <form
      onSubmit={isAuthenticated ? handleLogout : handleSubmit}
      className="space-y-4"
    >
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-100 dark:bg-red-900/30 rounded-md">
          {error}
        </div>
      )}

      {!isAuthenticated && (
        <>
          <div className="space-y-2">
            <label
              htmlFor="text"
              className="text-sm font-medium text-gray-700 dark:text-neutral-300"
            >
              ID
            </label>
            <input
              id="text"
              type="text"
              required
              className="w-full px-3 py-2 border rounded-md border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
              value={formData.id}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, id: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 dark:text-neutral-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="off"
              required
              className="w-full px-3 py-2 border rounded-md border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
        </>
      )}

      {isAuthenticated && adminId && (
        <p className="text-sm text-gray-500 dark:text-neutral-400 text-center">
          {adminId}님 안녕하세요.
        </p>
      )}

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        {isAuthenticated ? "로그아웃" : "로그인"}
      </button>
    </form>
  );
}
