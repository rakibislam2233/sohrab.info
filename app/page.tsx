
import Footer from '../components/Footer'
import FeaturedGrid from '../components/sections/FeaturedGrid'
import GallerySection from '../components/sections/GallerySection'
import Hero from '../components/sections/Hero'
import HomeHighlights from '../components/sections/HomeHighlights'

export default async function Home(){
  return (
    <main>
      <Hero />
      <section className="container py-12">
        <h2 className="text-3xl font-serif mb-6">Featured Articles</h2>
        <FeaturedGrid />
      </section>
      <HomeHighlights />
      <GallerySection />
      <Footer />
    </main>
  )
}
