import Sidebar from '@/components/sidebar/Sidebar';

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-[1fr_4fr]">
      <Sidebar />
      <div className="bg-slate-800">AAA</div>
    </main>
  );
}
