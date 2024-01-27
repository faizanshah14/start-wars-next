
import Link from "next/link";
import StarWarsIntro from "./Intro/startWarsIntro";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StarWarsIntro />
    </main>
  );
}
