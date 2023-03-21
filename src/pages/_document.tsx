import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Document() {
	return (
		<Html lang='en' data-theme='winter'>
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicon-16x16.png'
			/>
			<link rel='manifest' href='/site.webmanifest' />
			<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
			<meta name='msapplication-TileColor' content='#da532c' />
			<meta name='theme-color' content='#ffffff'></meta>
			<title>TV Lemberg e. V.</title>
			<meta
				name='description'
				content='Der Turnverein 1891 Lemberg kann auf viele Jahre Vereinsgeschichte zurückblicken. Mit verschiedenen Sportarten und einer großen Gemeinschaft ist der Verein ein wichtiger Bestandteil der Dorfgemeinde Lemberg.'
			/>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<Head />
			<body>
				<Navbar>
					<main className='flex flex-1'>
						<div className='flex flex-1 flex-col p-4 py-8 bg-base-200'>
							<Main />
						</div>
						<Sidebar />
					</main>
					<Footer />
				</Navbar>
				<NextScript />
			</body>
		</Html>
	);
}
