import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="py-12">
      <div className="container flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <h3 className="text-3xl font-serif">Sohrab Hossan</h3>
          <p className="mt-4">Passionate journalist and traveller from Bangladesh. Staff Reporter at Protidiner Bangladesh and junior business developer in IT.</p>
        </div>
        <div className="md:w-1/3">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/journalism">Journalism</Link></li>
            <li><Link href="/travel">Travel</Link></li>
            <li><Link href="/scout">Scout</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h4 className="font-semibold mb-3">Subscribe to our Newsletter</h4>
          <p className="text-sm mb-3">Subscribe to my updates and exclusive stories.</p>
          <form className="flex gap-2">
            <input aria-label="email" placeholder="Enter your email" className="flex-1 p-2 rounded-full border" />
            <button className="bg-blush text-white px-4 rounded-full">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  )
}
