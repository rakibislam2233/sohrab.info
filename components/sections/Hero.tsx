import Image from 'next/image'

export default function Hero(){
  return (
    <section className="w-full py-20" style={{background: 'linear-gradient(180deg,#FFF8F0,#FDEBD0)'}}>
      <div className="container flex flex-col md:flex-row items-center gap-8">
        <div className="w-40 h-40 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image src="https://picsum.photos/400" alt="Sohrab Hossan" width={300} height={300} className="object-cover" />
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl font-serif">Hi, I'm Sohrab Hossan 👋</h1>
          <p className="text-xl text-gray-700 mt-2">Journalist · Traveller · Scout</p>
          <p className="max-w-xl mt-4">Passionate, curious, and motivated individual who strives for personal growth. Believes in hard work, honesty, and continuous learning. Enjoys reading, writing, and spending time in nature.</p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/share/155DH45GhJ/" className="text-sm px-3 py-2 rounded-full border">Facebook</a>
            <a href="https://www.youtube.com/@sohrab49" className="text-sm px-3 py-2 rounded-full border">YouTube</a>
            <a href="https://www.instagram.com/sohrab_shrb/" className="text-sm px-3 py-2 rounded-full border">Instagram</a>
            <a href="https://www.linkedin.com/in/sohrab49/" className="text-sm px-3 py-2 rounded-full border">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
