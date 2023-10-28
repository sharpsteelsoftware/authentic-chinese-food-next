import Link from 'next/link'
import * as R from 'ramda'

type Tab = { name: string; href: string }
const tabs: Tab[] = [
  { name: 'Recipes', href: '/' },
  { name: 'About', href: '/about' },
]
const makeTab = (tab: Tab) => {
  return (
    <Link href={tab.href} key={tab.name}>
      <div className='cursor-pointer bg-pink-500 p-4 text-center font-extrabold uppercase text-white hover:bg-pink-600'>
        {tab.name}
      </div>
    </Link>
  )
}

export const Navigate = () => {
  const tsx = R.map(makeTab)(tabs)
  return (
    <nav className='flex flex-col gap-2 sm:flex-row sm:justify-end'>{tsx}</nav>
  )
}
