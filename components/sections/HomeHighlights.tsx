import Link from 'next/link'
import Reveal from '../ui/Reveal'

const blocks = [
  {
    title: 'Travel Stories',
    text: 'Field notes, routes, and real experiences from different places.',
    href: '/travel',
  },
  {
    title: 'Journalism',
    text: 'Feature writing and storytelling with social impact.',
    href: '/journalism',
  },
  {
    title: 'Scout Activities',
    text: 'Leadership, service, and event-based community engagement.',
    href: '/scout',
  },
]

export default function HomeHighlights() {
  return (
    <section className="container py-12">
      <Reveal>
        <h2 className="text-3xl font-serif mb-6">What I Focus On</h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-4">
        {blocks.map((block, index) => (
          <Reveal key={block.title} delay={index * 0.08}>
            <div className="rounded-card p-5">
              <h3 className="font-serif text-2xl mb-2">{block.title}</h3>
              <p className="text-sm text-black/70 mb-4">{block.text}</p>
              <Link href={block.href} className="inline-block border rounded-full px-4 py-2">Explore</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
