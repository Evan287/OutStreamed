import Image from "next/image";
import Link from "next/link"; // 1. Import the component

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <Link href="/frontend/app/page.tsx">Outstreamed</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/about">About Us</Link>
      </div>
      <h3>
        A fun game where you guess which spotify artist gets more monthly
        streams
      </h3>
      <h1> OUTSTREAMED</h1>
    </div>
  );
}
