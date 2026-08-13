import Image from 'next/image';
import Hochsprung from '../../../public/images/hoch-weitsprung-meeting.png';

export default function HochWeitsprung() {
	return (
		<div className='prose mx-auto'>
			<h1 className='text-center mb-2'>Hoch- und Weitsprung-Meeting</h1>
			<p className='text-center font-bold mt-0'>Samstag, 19. September 2026 ab 14 Uhr</p>
			<Image
				src={Hochsprung}
				alt='Hochsprung beim TV Lemberg'
				className='rounded-md shadow-md mx-auto'
			/>
			<p>
				Nach 24 Leichtathletik-Sportfesten (1996 bis 2019) und einer sechsjährigen Pause bietet der
				Turnverein nun wieder eine offizielle, vom LVP genehmigte Leichtathletik-Veranstaltung an.
				Am Samstag, den 19. September ab 14 Uhr ist es so weit. Hoch- und Weitsprungtalente sind
				ebenso wie Athletinnen und Athleten mit Ambitionen auf neue Bestleistungen herzlich
				willkommen.
			</p>

			<div className='not-prose flex flex-wrap justify-center gap-4 my-6'>
				<a
					href='/assets/Hoch-Weitsprung-Meeting-Ausschreibung.pdf'
					className='btn btn-primary'
					download>
					Ausschreibung als PDF
				</a>
			</div>

			<h2>Ausschreibung</h2>
			<ul>
				<li>
					<strong>Altersklassen:</strong> U14, U16, U18, U20, Frauen und Männer
				</li>
				<li>
					<strong>Meldeschluss:</strong> Montag, 14.09.2026 (ausschließlich über LAnet3)
				</li>
				<li>
					<strong>Meldegebühren:</strong> 4 Euro pro Disziplin
				</li>
				<li>
					<strong>Auszeichnungen:</strong> Urkunden und Präsente (Plätze eins bis vier)
				</li>
				<li>
					<strong>Austragungsort:</strong> 66969 Lemberg, Fischweiherstraße 29
				</li>
				<li>
					<strong>Bewirtung:</strong> Ofenfrische Pizza, Getränke, Kaffee, Kuchen
				</li>
				<li>
					<strong>Auskunft:</strong> Bernd Köhler, 0179 / 59 43 464
				</li>
			</ul>

			<h2>Vorläufiger Zeitplan</h2>
			<p className='text-sm'>Stand: 11.08.2026 – Änderungen möglich. Der finale Zeitplan wird nach Meldeschluss veröffentlicht.</p>
			<div className='overflow-x-auto not-prose'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th>Zeit</th>
							<th>Hochsprung</th>
							<th>Weitsprung</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>14:00</td>
							<td>
								Einstiegshöhe 1,15 m
								<br />
								(max. 15 Teilnehmer)
							</td>
							<td>U14 und U16</td>
						</tr>
						<tr>
							<td>16:30</td>
							<td>
								Einstiegshöhe 1,70 m
								<br />
								(max. 10 Teilnehmer)
							</td>
							<td>–</td>
						</tr>
						<tr>
							<td>18:00</td>
							<td>
								Einstiegshöhe 1,40 m
								<br />
								(max. 12 Teilnehmer)
							</td>
							<td>U18 und älter</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2>Hinweise</h2>
			<p>
				Der Wettbewerb wird nach den „Internationalen Wettkampfregeln“ und der „Deutschen
				Leichtathletikordnung“ durchgeführt.
			</p>
			<p>
				Der Hochsprung wird als gemischter Wettbewerb (M/W) unabhängig von den Altersklassen nach
				Einstiegshöhen ausgeführt. Wir bitten die ungefähre Einstiegshöhe mit der Meldung bekannt zu
				geben.
			</p>
			<p>
				Der Weitsprung wird mit Vor- und Endkampf ausgetragen, die besten acht Athleten je
				Altersklasse qualifizieren sich für den Endkampf.
			</p>

			<h2>Startunterlagen</h2>
			<p>
				Die Startunterlagen werden nur vereinsweise nach vollständiger Bezahlung der
				Organisationsgebühr ausgegeben. Diese ist per Überweisung vorab bis zum 15.09.2026 auf das
				Konto bei der VR Bank Südwestpfalz{' '}
				<span className='whitespace-nowrap'>DE47 5426 1700 0105 2038 21</span> des Turnvereins
				Lemberg zu leisten.
			</p>

			<h2>Haftung und Einverständnis</h2>
			<p>
				Der Veranstalter übernimmt keine Haftung bei Unfällen, Diebstählen oder sonstigen Schäden.
			</p>
			<p>
				Mit der Meldung erklärt sich der Teilnehmer damit einverstanden, dass sein Name, Alter,
				Verein mit Leistung und Platzierung sowie Fotoaufnahmen genutzt und veröffentlicht werden.
			</p>
		</div>
	);
}
