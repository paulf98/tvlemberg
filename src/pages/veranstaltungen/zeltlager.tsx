import PageWrapper from '../../components/PageWrapper';

export default function Zeltlager() {
	return (
		<PageWrapper>
			<h1 className='my-8'>Zeltlager 2023</h1>
			<p>
				Unser diesjähriges, traditionelles Zeltlager findet in der Zeit von
				Mittwoch, 07. Juni bis Samstag, 10. Juni 2023 (Fronleichnam) in Lemberg
				auf dem Turngelände statt.
			</p>
			<p className='font-semibold'>
				Lagerfeuer - Nachtwanderung - Bastelarbeiten - Spiele u. v. m. warten
				auf Euch.
			</p>
			<p>
				Unternehmungslustige Kinder ab 6 Jahre und Jugendliche mit Freude an
				Gemeinschaft, Spielen und Abenteuer sollten sich schnellstmöglich
				anmelden.
			</p>
			<h2>Anmeldung</h2>
			Anmeldungen können bis 31. Mai 2023 abgegeben werden bei:
			<ul className='text-left'>
				<li>
					Patric Pfeifer, Rumbergring 41, 66969 Lemberg, Tel.-Nr. 0170/4966560
				</li>
				<li>
					Christine Gebhard, Karlstr. 17, 66969 Lemberg, Tel.-Nr. 0176/32001620
				</li>
				<li>
					Michaela Gebhard, Schloßgässel 12, 66969 Lemberg, Tel.-Nr.
					0173/3560337
				</li>
			</ul>
			<p>
				Der Beitrag pro Person beträgt: 90 € für Mitglieder 120 € für
				Nichtmitglieder (inkl. Versicherung)
			</p>
			<a download href='/assets/Zeltlager23.pdf' className='btn btn-primary'>
				Download Anmeldeformular
			</a>
			<h2>Infoblatt</h2>
			<p className='text-red-600'>
				Wichtige Informationen rund ums Zeltlager. Bitte unbedingt beachten!
			</p>
			<a
				download
				href='/assets/Zeltlager23Info.pdf'
				className='btn btn-primary'
			>
				Download Infoblatt
			</a>
		</PageWrapper>
	);
}
