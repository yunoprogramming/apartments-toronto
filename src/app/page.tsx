/** @format */
'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="flex justify-center items-center p-3 bg-transparent">
        {/* Logo */}
        <div className="w-full max-w-screen-xl">
          <Image
            src="/images/header.png"
            alt="Apartments Toronto Logo"
            layout="responsive"
            width={100}
            height={50}
          />
        </div>
      </header>

      {/* Body */}
      <main className="flex-grow flex justify-center flex-col">
        <section
          id="inquiry"
          className="p-5 flex flex-col items-center justify-center text-center"
        >
          {/* Content of the about section */}
          <h1 className="font-lovelo text-3xl mb-4 mt-8">Find Your Next Apartment</h1>
          {/* Call to action button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeUjYLkjhNkqBJ6u0icwt6tAPXN47DQOEXoGk0OYxcRz0kGVg/viewform?fbclid=PAAaYVcgtYN4-VOejdGQm9Tdb9H4AE1UCzpMd9UmK8WruPlLaqBKv-2HwxGXg_aem_AdJi-cWuFo7sApq0Sejlop7LFupo8EyVC9tuxeS4CxnjhyQYG5-LwJxVGiu2pOcZa2E"
            className="bg-red-600 hover:bg-red-700 text-white font-lovelo font-bold py-4 px-8 rounded-lg mb-8 shadow-xl"
          >
            CLIENT INQUIRY FORM
          </a>
        </section>
        <section
          id="calendy"
          className="p-5 flex flex-col items-center justify-center text-center"
        >
          <h1 className="font-lovelo text-3xl mb-4 mt-8">Buy/Sell Your Home</h1>
          <a
            href="https://calendly.com/apartmentstoronto"
            className="bg-red-600 hover:bg-red-700 text-white font-lovelo font-bold py-4 px-8 rounded-lg mb-8 shadow-xl"
          >
            BOOK A CALL
          </a>
        </section>
        <section id="about" className="p-5 flex flex-col items-center justify-center text-center">
          {/* Content of the about section */}
          <h1 className="font-lovelo text-3xl mb-4 mt-8">WHO WE ARE</h1>
          <p className="font-open-sans text-lg mb-8">
            Apartments Toronto was created with the passion and drive to help people find their new home in an easy and efficient manner with the use of social media.
          </p>
        </section>
        {/* Subscription Form */}
        <section id="newsletter" className="p-5 flex flex-col items-center justify-center text-center">
          {/* Subscription Form Content */}
          <h1 className="font-lovelo text-3xl mb-4 mt-8">JOIN OUR NEWSLETTER</h1>
          <p className="font-open-sans text-lg mb-8">
            Get monthly updates on apartments statistics delivered directly to your inbox.
          </p>
          <form action="https://script.google.com/macros/s/AKfycbytEGPgyaDRsaOQBlII_dMdOpARhEOTTkBslUUTCA9yd20F8riMN8aakKeyNKgIjrtJeQ/exec"
                method="post"
                className="mb-8">
            <div className="flex flex-col md:flex-row">
              <label
                htmlFor="email"
                className="sr-only"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 mb-6 md:mb-0 mr-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-lovelo font-bold py-3 px-8 rounded-lg shadow-xl"
              >
                JOIN NOW
              </button>
            </div>
          </form>
        </section>
        <section id="contact" className="p-5 flex flex-col items-center justify-center text-center">
          <h1 className="font-lovelo text-3xl mb-4 mt-8">CONTACT US</h1>
          <p className="font-open-sans text-lg mb-4">
            Please do not hesitate to contact us via email or DM if you have any questions or concerns.
          </p>
          <p className="font-open-sans text-lg mb-4">
            <a
              href="mailto:theapartmentstoronto@gmail.com"
              className="text-blue-500 underline hover:text-blue-700"
            >
              theapartmentstoronto@gmail.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex justify-center p-5 space-x-5">
        <a
          href="https://www.instagram.com/apartmentstoronto/"
          className="p-1"
        >
          <Image
            src="/images/instagram.png"
            alt="Instagram"
            width={25}
            height={25}
          />
        </a>
        <a
          href="https://www.tiktok.com/@apartmentstoronto/"
          className="p-1"
        >
          <Image
            src="/images/tiktok.png"
            alt="TikTok"
            width={25}
            height={25}
          />
        </a>
        <a
          href="https://www.youtube.com/@apartmentstoronto/"
          className="p-1"
        >
          <Image
            src="/images/youtube.png"
            alt="YouTube"
            width={25}
            height={25}
          />
        </a>
      </footer>
    </div>
  );
}
