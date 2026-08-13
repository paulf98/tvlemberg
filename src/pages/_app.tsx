import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Raleway } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const font = Raleway({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const scrollToTop = () => {
			window.scrollTo(0, 0);
			document.querySelector('.drawer-content')?.scrollTo(0, 0);
		};

		router.events.on('routeChangeComplete', scrollToTop);
		return () => {
			router.events.off('routeChangeComplete', scrollToTop);
		};
	}, [router.events]);

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
