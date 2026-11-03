'use client';
import { useRouter } from 'next/navigation';
import AuthForm from './_components/auth-form';

export default function Page() {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 z-310 flex items-center justify-center bg-black/20"
      onClick={() => router.push('/')}
    >
      <div
        className="absolute flex min-w-1/2 items-center justify-center rounded-3xl border-6 border-slate-900 bg-blue-900 py-10 sm:py-20"
        onClick={(e) => e.stopPropagation()}
      >
        <AuthForm />
      </div>
    </div>
  );
}
