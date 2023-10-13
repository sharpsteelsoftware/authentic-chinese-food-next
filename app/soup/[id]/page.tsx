
export default function Home({ params }: {
  params: { id: string }
}) {
    return (
      <main className="text-center uppercase mt-24 text-4xl">
        Soup ID: {params.id}
      </main>
    )
  }
  