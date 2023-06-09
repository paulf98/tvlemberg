import Image from 'next/image';
import Yogakurs from '../../public/images/yogakurs.jpg';
import Turnfest from '../../public/images/Turnfest2023.jpg';
import DAK from '../../public/images/dak.png';

/**
 * Sidebar component that shows news
 * Is hidden on mobile
 */
export default function Sidebar() {
	return (
		<aside className='hidden lg:flex flex-col gap-8 w-min-32 max-w-xs min-h-screen p-8'>
			<h1 className='text-3xl font-bold text-center'>Aktuelles</h1>
			<Image
				className='shadow-xl rounded-md hover:bg-base-200'
				src={Turnfest}
				alt='Plakat Turnfest 2023'
			/>
			<Image
				className='shadow-xl rounded-md hover:bg-base-200'
				src={Yogakurs}
				alt='Yogakurs'
			/>
			<h2 className='text-center text-xl font-bold'>Unser Partner</h2>
			<a
				href={'https://www.dak.de/'}
				target='_blank'
				className='hover:bg-base-200'
			>
				<Image src={DAK} alt='DAK' />
			</a>
		</aside>
	);
}
