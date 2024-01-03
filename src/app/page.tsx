import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-96 m-4">
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="sm:p-6 px-4 py-5">
          <h1 className="text-2xl font-bold">Test Speed Insights</h1>
          <Link
            className="hover:underline hover:text-purple-600 text-purple-500"
            href={"https://vercel.com/docs/speed-insights"}
            target="_blank"
          >
            Testing Vercel speed insights
          </Link>
        </div>
      </div>
    </main>
  );
}
