import Image from 'next/image';
import PageWrapper from '../../components/PageWrapper';
import Zeltlager1 from '../../../public/images/zeltlager1.jpeg';
import Zeltlager2 from '../../../public/images/zeltlager3.jpeg';
import Zeltlager3 from '../../../public/images/zeltlager4.jpeg';
import Zeltlager4 from '../../../public/images/zeltlager5.jpeg';

export default function Zeltlager() {
	return (
		<div>
			<div className='prose mx-auto text-center'>
				<h1 className='my-8'>Zeltlager 2026</h1>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch w-full my-4 md:my-8'>
				<Image src={Zeltlager1} alt='Bild vom Zeltlager' className='rounded-md shadow-md' />
				<Image src={Zeltlager2} alt='Bild vom Zeltlager' className='rounded-md shadow-md' />
				<Image src={Zeltlager3} alt='Bild vom Zeltlager' className='rounded-md shadow-md' />
				<Image src={Zeltlager4} alt='Bild vom Zeltlager' className='rounded-md shadow-md' />
			</div>
			<PageWrapper>
				<div className='flex flex-col flex-wrap md:flex-nowrap gap-4 items-center'>
					<div className='text-justify flex-1'>
						<p>
							Unser diesjähriges, traditionelles Zeltlager fand in der Zeit vom Mittwoch, 03. Juni
							bis Samstag, 06. Juni 2026 (Fronleichnam) in Lemberg auf dem Turngelände statt.
						</p>
						<p className='font-semibold text-center'>
							Lagerfeuer - Nachtwanderung - Bastelarbeiten - Spiele u. v. m. – ein abwechslungsreiches
							Programm für alle Teilnehmer.
						</p>
					</div>
				</div>
			</PageWrapper>
		</div>
	);
}
