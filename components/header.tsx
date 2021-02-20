import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 max-w-2xl mx-auto text-accent-orange dark:text-accent-caramel">
      <Link href="/">
        <a className="hover:underline">Home</a>
      </Link>
      <span>.</span>
    </h2>
  )
}

export default Header
