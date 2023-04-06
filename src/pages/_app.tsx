import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Raleway } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const font = Raleway({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${font.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}
