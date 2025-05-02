import PageWrapper from '../../components/PageWrapper';

export default function Zeltlager() {
	return (
		<PageWrapper>
			<h1 className='my-8'>Zeltlager 2025</h1>
			<div className='flex flex-col flex-wrap md:flex-nowrap gap-4 items-center'>
				<div className='text-justify flex-1'>
					<p>
						Unser diesjähriges, traditionelles Zeltlager findet in der Zeit vom
						Mittwoch, 18. Juni bis Samstag, 21. Juni 2025 (Fronleichnam) in
						Lemberg auf dem Turngelände statt.
					</p>
					<p className='font-semibold text-center'>
						Lagerfeuer - Nachtwanderung - Bastelarbeiten - Spiele u. v. m.
						warten auf Euch.
					</p>
					<p>
						Unternehmungslustige Kinder ab 6 Jahre und Jugendliche mit Freude an
						Gemeinschaft, Spielen und Abenteuer sollten sich schnellstmöglich
						anmelden.
					</p>
				</div>
			</div>
			<h2>Anmeldung</h2>
			Anmeldungen können bis <strong>13. Juni 2025</strong> abgegeben werden
			bei:
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
				Der Beitrag pro Person beträgt: 100 € für Mitglieder 130 € für
				Nichtmitglieder (inkl. Versicherung)
			</p>
			<a download href='/assets/ZeltlagerInfo.pdf' className='btn btn-primary'>
				Download Anmeldeformular
			</a>
		</PageWrapper>
	);
}
