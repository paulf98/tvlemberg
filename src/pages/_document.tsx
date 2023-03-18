import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Document() {
	return (
		<Html lang='en' data-theme='winter'>
			<Head />
			<body>
				<Navbar />
				<main className='flex flex-1'>
					<div className='flex flex-1 flex-col p-4 py-8 bg-base-200'>
						<Main />
					</div>
					<Sidebar />
				</main>
				<Footer />
				<NextScript />
			</body>
		</Html>
	);
}
