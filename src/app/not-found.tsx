import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-8xl font-bold text-brand-400">404</h1>
      <p className="text-xl text-surface-400">Page not found</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-brand-500/25 transition-all duration-200 hover:bg-brand-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
