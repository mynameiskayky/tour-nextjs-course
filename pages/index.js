import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>

      <img src="/images/kayky.jpeg" alt="" />

      <ul>
        <li>
          <Link href="/sobre">
            Ir para a /sobre
          </Link>
        </li>
      </ul>
    </div>
  )
}