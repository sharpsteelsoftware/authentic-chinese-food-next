import { Debug } from "@/common/debug";
import { sanityClient } from "@/lib/sanity";

export default async function Home() {
 // const res = await fetch('http://localhost:3333/desk/cuisine');
 // const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const result = await sanityClient.fetch('*[_type == "cuisine"]');
  return (
    <main className="text-center uppercase mt-24 text-4xl">
      <Debug data={result} />
    </main>
  )
}
