import AdminLoginForm from "@/components/AdminLoginForm";

export default function Page() {
  return (
    <section className="flex items-center justify-center dark:bg-neutral-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Login
          </h1>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            관리자 전용 로그인
          </p>
        </div>
        <AdminLoginForm />
      </div>
    </section>
  );
}
