import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Raleway } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const font = Raleway({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${font.style.fontFamily};
				}
			`}</style>
			<Navbar>
				<main className='flex flex-1'>
					<div className='flex flex-1 flex-col p-4 py-8 bg-base-200'>
						<Component {...pageProps} />
					</div>
					<Sidebar />
				</main>
				<Footer />
			</Navbar>
			<Analytics />
		</>
	);
}
