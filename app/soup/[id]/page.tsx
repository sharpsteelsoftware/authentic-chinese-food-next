export default function Home({ params }: { params: { id: string } }) {
  return (
    <main className='mt-24 text-center text-4xl uppercase'>
      Soup ID: {params.id}
    </main>
  )
}
