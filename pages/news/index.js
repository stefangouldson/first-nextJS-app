import Link from 'next/link'

const news = () => {
  return (
    <>
    <h1>News Page</h1>
    <ul>
      <li><Link href="/news/nextjs-is-great">Next JS is good</Link></li>
      <li><Link href="/news/something-else">Something else</Link></li>
    </ul>
    </>
  )
}

export default news
