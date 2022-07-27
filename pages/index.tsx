import type { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <main className="bg-red-500">
      <p>
        <Link href={"/scanner"}>Scanner</Link>
      </p>
      <p>
        <Link href={"/search"}>Search</Link>
      </p>
      <p>
        <Link href={"/categories"}>Categories</Link>
      </p>
    </main>
  )
}

export default Home
