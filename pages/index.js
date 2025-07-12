
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ivan O. – Minimalist Portfolio</title>
      </Head>
      <main className="min-h-screen bg-white px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 tracking-tight">Ivan O.</h1>
          <p className="text-xl text-gray-600">Helping People + Exploring Tech + Having Fun</p>
          <p className="text-md text-gray-500 mt-2 italic">IT Specialist by day, Curious Tinkerer by always.</p>
        </header>

        <div className="flex justify-center gap-4 mb-12">
          <Link href="/about"><button className="px-6 py-2 bg-black text-white rounded-full">About</button></Link>
          <Link href="/skills"><button className="px-6 py-2 bg-black text-white rounded-full">My Skills</button></Link>
          <Link href="/contact"><button className="px-6 py-2 bg-black text-white rounded-full">Contact</button></Link>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Tech Ideas & Inspiration', href: '#tech' },
            { title: 'Favorite YouTube Channels', href: '#youtube' },
            { title: 'Amazon Favorites', href: '#amazon' },
            { title: 'Learning Printables', href: '#printables' },
            { title: 'Mini Web Projects & Games', href: '#projects' },
            { title: 'Tech News Daily (via Ground News)', href: '#news' }
          ].map(({ title, href }) => (
            <a key={title} href={href} className="p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform bg-gray-50 border">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600">Explore more about {title.split(" ")[0].toLowerCase()} and ideas.</p>
            </a>
          ))}
        </section>

        <section id="news" className="py-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">📰 Tech News Daily (via Ground News)</h2>
          <div className="w-full max-w-4xl mx-auto aspect-video">
            <iframe
              src="https://ground.news/interest/tech"
              width="100%"
              height="500"
              className="rounded-xl shadow-lg border border-gray-200"
              loading="lazy"
              title="Ground News Tech Feed"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}
