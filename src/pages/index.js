import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div className="bg-white">
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-spa-green mb-4">Welcome to Our Spa</h1>
              <p className="text-lg mb-6">Experience relaxation and rejuvenation like never before.</p>
              <button className="bg-spa-green text-white px-6 py-2 rounded-full hover:bg-spa-light-green transition">Book Now</button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-64 md:h-96">
                <Image src="/placeholder-spa-image.jpg" alt="Spa atmosphere" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Add more sections for services, testimonials, etc. */}
      </div>
    </Layout>
  )
}