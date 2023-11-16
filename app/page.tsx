import { Debug } from '@/components/debug'
import { Navigate } from '@/components/nav'
import { sanityClient } from '@/lib/sanity'
import Image from 'next/image'

export default async function Home() {
  // const res = await fetch('http://localhost:3333/desk/cuisine');
  // const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const result = await sanityClient.fetch(
    '*[_type == "cuisine"]{...,"imageUrl": image.asset->url}',
  )
  return (
    <main className=''>
      <Image height={600} width={600} src={result[0].imageUrl} alt='Picture of the author' />
      <Debug data={result[0]} />
    </main>
  )
}
