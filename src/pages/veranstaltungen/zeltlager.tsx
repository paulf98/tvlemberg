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
				<div className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8 mx-auto max-w-2xl'>
					<p className='font-medium'>
						Für das Zeltlager 2026 sind ab sofort Anmeldungen möglich. <br />
						Wir freuen uns auf eure Anmeldungen.
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
							Unser diesjähriges, traditionelles Zeltlager findet in der Zeit vom Mittwoch, 03. Juni
							bis Samstag, 06. Juni 2026 (Fronleichnam) in Lemberg auf dem Turngelände statt.
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
				Anmeldungen können bis <strong>26. Mai 2026</strong> abgegeben werden bei:
				<ul className='text-left'>
					<li>Michaela Gebhard, Schloßgässel 12, 66969 Lemberg, Tel.-Nr. 0173 35 60 337</li>
					<li>Jutta Wenzel, Fischweiherstraße 25, 66969 Lemberg, Tel. 0173 65 56 857</li>
				</ul>
				<p>
					Der Beitrag pro Person beträgt: 120 € für Mitglieder 150 € für Nichtmitglieder (inkl.
					Versicherung)
				</p>
				<a download href='/assets/ZeltlagerInfo.pdf' className='btn btn-primary'>
					Download Anmeldeformular
				</a>
			</PageWrapper>
		</div>
	);
}
