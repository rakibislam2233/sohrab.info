import Image from 'next/image'
import Link from 'next/link'

const mock = Array.from({length:3}).map((_,i)=>({
  id: i+1,
  title: ['Musical improvisation is the spontaneous music','Customizing your brand and design settings','Apps & integrations'][i],
  excerpt: 'Short excerpt about the article to entice readers and match the editorial tone.',
  cover: `https://picsum.photos/seed/feat${i}/600/500`,
  slug: `article-${i+1}`
}))

export default function FeaturedGrid(){
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {mock.map(item => (
        <article key={item.id} className="rounded-card p-6 relative">
          <div className="absolute -left-6 top-6">
            <span className="vertical-label">Journalism</span>
          </div>
          <div className="mb-4 rounded overflow-hidden">
            <Image src={item.cover} alt={item.title} width={600} height={400} className="w-full h-56 object-cover rounded" />
          </div>
          <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
          <Link href={`/journalism/${item.slug}`} className="inline-block bg-blush text-white px-4 py-2 rounded-full">Read More</Link>
        </article>
      ))}
    </div>
  )
}
