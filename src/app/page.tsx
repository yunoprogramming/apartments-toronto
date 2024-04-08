/** @format */
'use client';
import Image from 'next/image';

export default function Home() {

	return (
		<div className='min-h-screen bg-white text-black flex flex-col'>
			{/* Header */}
			<header className='flex justify-center items-center p-3 bg-black'>
				{/* Logo */}
				<div>
					<Image
						src='/images/logo.png'
						alt='Apartments Toronto Logo'
						width={100}
						height={50}
					/>
				</div>
			</header>

			{/* Body */}
			<main className='flex-grow flex justify-center'>
				<section
					id='about'
					className='p-5 flex flex-col items-center justify-center text-center'>
					{/* Content of the about section */}
					<h1 className='font-lovelo text-3xl mb-4'>Who We Are</h1>
					<p className='font-open-sans text-lg mb-4'>
						Apartments Toronto was created with the passion and drive to help
						people in the GTA find their new home in an easy and efficient
						manner with the use of social media.
					</p>
					<p className='font-open-sans text-lg mb-4'>
						Our aim is to connect our clients to the best agents in the GTA by
						truly understanding their needs and sharing listings to help them
						find exactly what they are looking for.
					</p>

					{/* Call to action button */}
					<a
						href='https://your-google-form-url'
						className='bg-red-600 hover:bg-red-700 text-white font-lovelo font-bold py-2 px-4 rounded mt-8 shadow-md'>
						client inquiry
					</a>
				</section>
			</main>

			{/* Footer */}
			<footer className='flex justify-center p-5'>
				<a
					href='https://www.instagram.com'
					className='mr-5'>
					<Image
						src='/images/instagram.png'
						alt='Instagram'
						width={25}
						height={25}
					/>
				</a>
				<a href='https://www.tiktok.com'>
					<Image
						src='/images/tiktok.png'
						alt='TikTok'
						width={25}
						height={25}
					/>
				</a>
			</footer>
		</div>
	);
}
