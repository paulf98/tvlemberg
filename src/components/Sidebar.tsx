import Image from 'next/image';
import Yogakurs from '../../public/images/yogakurs.jpg';
import DAK from '../../public/images/dak.png';
import Theyson from '../../public/images/logo_theysohn.svg';
import Faass from '../../public/images/faass.png';
import Termine from '../../public/images/Termine24.jpg';
import Termine25 from '../../public/images/Termine25.jpg';

/**
 * Sidebar component that shows news
 * Is hidden on mobile
 */
export default function Sidebar() {
	return (
		<aside className='hidden lg:flex flex-col gap-8 w-min-32 max-w-xs min-h-screen p-8'>
			<h1 className='text-3xl font-bold text-center'>Aktuelles</h1>
			<a href={Termine.src} target='_blank' className='hover:bg-base-200'>
				<Image
					className='shadow-xl rounded-md hover:bg-base-200'
					src={Termine}
					alt='Termine 2024'
				/>
			</a>
			<a href={Termine25.src} target='_blank' className='hover:bg-base-200'>
				<Image
					className='shadow-xl rounded-md hover:bg-base-200'
					src={Termine25}
					alt='Termine 2025'
				/>
			</a>
			<Image
				className='shadow-xl rounded-md hover:bg-base-200'
				src={Yogakurs}
				alt='Yogakurs'
			/>
			<h2 className='text-center text-xl font-bold'>Unsere Partner</h2>
			<a
				href={'https://www.dak.de/'}
				target='_blank'
				className='hover:bg-base-200'>
				<Image src={DAK} alt='DAK' />
			</a>
			<a
				href={'https://www.daniel-theysohn-stiftung.de/'}
				target='_blank'
				className='hover:bg-base-200'>
				<Image src={Theyson} alt='Daniel Theyson Stiftung' />
			</a>
			<a
				href={'https://cafe-faass.de/'}
				target='_blank'
				className='hover:bg-base-200 mx-auto'>
				<Image src={Faass} alt='Cafe Faass' />
			</a>
		</aside>
	);
}
