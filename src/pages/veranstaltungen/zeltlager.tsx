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
				<h1 className='my-8'>Zeltlager 2025</h1>
				<div className='bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8 mx-auto max-w-2xl'>
					<p className='font-medium'>
						Das Zeltlager ist für 2025 leider bereits ausgebucht. <br />
						Es können keine weiteren Plätze mehr gebucht werden.
					</p>
				</div>
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
							Unser diesjähriges, traditionelles Zeltlager findet in der Zeit vom Mittwoch, 18. Juni
							bis Samstag, 21. Juni 2025 (Fronleichnam) in Lemberg auf dem Turngelände statt.
						</p>
						<p className='font-semibold text-center'>
							Lagerfeuer - Nachtwanderung - Bastelarbeiten - Spiele u. v. m. warten auf Euch.
						</p>
						<p>
							Unternehmungslustige Kinder ab 6 Jahre und Jugendliche mit Freude an Gemeinschaft,
							Spielen und Abenteuer sollten sich schnellstmöglich anmelden.
						</p>
					</div>
				</div>
				<h2>Anmeldung</h2>
				Anmeldungen können bis <strong>13. Juni 2025</strong> abgegeben werden bei:
				<ul className='text-left'>
					<li>Patric Pfeifer, Rumbergring 41, 66969 Lemberg, Tel.-Nr. 0170/4966560</li>
					<li>Christine Gebhard, Karlstr. 17, 66969 Lemberg, Tel.-Nr. 0176/32001620</li>
					<li>Michaela Gebhard, Schloßgässel 12, 66969 Lemberg, Tel.-Nr. 0173/3560337</li>
				</ul>
				<p>
					Der Beitrag pro Person beträgt: 100 € für Mitglieder 130 € für Nichtmitglieder (inkl.
					Versicherung)
				</p>
				<a download href='/assets/ZeltlagerInfo.pdf' className='btn btn-primary'>
					Download Anmeldeformular
				</a>
			</PageWrapper>
		</div>
	);
}
