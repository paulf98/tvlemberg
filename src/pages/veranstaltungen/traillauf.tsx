import Image from 'next/image';
import Trailstrecke from '../../../public/images/trailstrecke.png';
import ZehfuesslerHeader from '../../../public/images/zehfuessler-header.png';

const PastResults = [
	{
		year: 2022,
		link: 'https://my.raceresult.com/209846/',
	},
	{
		year: 2021,
		link: 'https://my.raceresult.com/165044/',
	},
];

export default function Traillauf() {
	return (
		<div className='text-center prose mx-auto'>
			<h1>Willkommen beim Zehfüssler Traillauf!</h1>
			<p>
				Die ersten Vorbereitungen zum 3. Zehfüssler Traillauf sind getroffen.
				Der Turnverein Lemberg würde Dich gerne am 24. September begrüßen und
				wünscht Dir schon heute eine erfolgreiche Teilnahme.
			</p>
			<a
				href='http://my.raceresult.com/256126/registration'
				className='btn btn-primary'
				target='_blank'>
				Zur Anmeldung bei Raceresult
			</a>
			<hr />
			<Image src={ZehfuesslerHeader} alt='Banner Zehfuessler' />
			<p>
				Über herrliche Pfade, vorbei an bizarren Sandsteinfelsen verläuft der
				anspruchsvolle Zehfüssler-Traillauf als sechster Wertungslauf innerhalb
				der Wasgau-Cup Trailrunning Laufserie 2023. Es werden zwei Distanzen
				angeboten. Die Kurzstrecke führt mit 5 km und 150 Höhenmetern rund um
				den Hummelberg und den Ruppertsstein. Auf der Langstrecke mit 10,6 km
				und 310 Höhenmetern wird die Runde der Kurzstrecke zweimal gelaufen und
				abschließend noch eine Schleife rund um den Rabenfels gedreht.
			</p>
			<Image
				src={Trailstrecke}
				alt='Streckenverlauf'
				className='rounded-md shadow-md'
			/>
			<div className='text-left'>
				<p>
					<span className='font-bold'>Veranstalter:</span> TV 1891 Lemberg e.V.
				</p>
				<h2>Wettbewerbe</h2>
				<h4>
					Kurzstrecke (Jahrgang 2013 und älter) ca. 5 km und ca. 150 Höhenmeter
				</h4>
				<p>
					Startzeit: 10:00 Uhr <br />
					Startgebühr: 6 Euro
				</p>
				<h4>Schülerlauf (Jahrgang 2010 - 2016) ca. 1,7 km</h4>
				<p>
					Startzeit: 10:05 Uhr <br />
					Startgebühr: 4 Euro
				</p>
				<h4>
					Langstrecke (Jahrgang 2009 und älter) ca. 10,6 km und ca. 310
					Höhenmeter
				</h4>
				<p>
					Startzeit: 11:00 Uhr <br />
					Startgebühr: 10 Euro
				</p>
				<h3>Anfahrt und Parken</h3>
				<p>
					Karl-Stucky-Halle / Turnhalle TV 1891 Lemberg, Fischweiherstraße 29,
					66969 Lemberg
				</p>
				<h3>Anmeldung</h3>
				<ul>
					<li>
						Ausschließlich online über die Plattform RACE RESULT bis 22.
						September 23:59 Uhr
					</li>
					<li>Startgebühren zahlbar per Lastschrift bei der Anmeldung</li>
					<li>
						Nachmeldungen am Veranstaltungstag nur mit zusätzlicher Gebühr von 2
						Euro möglich
					</li>
				</ul>
				<h3>Startnummernausgabe</h3>
				<ul>
					<li>
						In der Turnhalle am Veranstaltungstag bis 20 Minuten vor dem
						jeweiligen Lauf
					</li>
					<li>Startnummern bitte möglichst vereinsweise abholen </li>
				</ul>
				<h4>Start und Ziel</h4>
				<p>Parkplatz Burgruine Lemberg </p>
				<h4>Verpflegung</h4>
				<p>Mineralwasser und Obst nach Ankunft im Ziel</p>
				<h4>Duschen</h4>
				<p>
					Karl-Stucky-Halle / Turnhalle TV 1891 Lemberg, Fischweiherstraße 29
				</p>
				<h4>Auszeichnungen</h4>
				<ul>
					<li>
						Preise für die Plätze 1 bis 3 der 5km- und 10km-Gesamtwertung
						weiblich/männlich
					</li>
					<li>
						Medaillen und Urkunden für die Plätze 1 bis 3 des Schülerlaufs
					</li>
					<li>
						Urkunde und Ergebnisliste sind auf der Seite von RACE RESULT
						abrufbar
					</li>
				</ul>
				<h4>Siegerehrung</h4>
				<p>Ergebnisse mit Siegerehrung ab 11:30 Uhr in der Turnhalle</p>
				<h4>Haftung</h4>
				<p>
					Eine Haftung des Veranstalters für Schäden aufgrund von Unfällen,
					Diebstählen und sonstigen Ursachen ist ausgeschlossen. Die Teilnahme
					am Wettbewerb geschieht auf eigenes Risiko.
				</p>
				<h4>Datenschutz</h4>
				<p>
					Mit der Anmeldung zum Zehfüssler-Traillauf besteht das Einverständnis
					über die Speicherung und Veröffentlichung der abgegebenen
					personenbezogenen Daten in Ergebnislisten und Medien, sowie die
					während der Veranstaltung gemachten Fotos.
				</p>
				<p className='text-blue-700 font-bold'>
					In der Turnhalle des TV 1891 Lemberg werden wieder Speisen und
					Getränke, wie z.B. Kaffee und Kuchen angeboten. Wir freuen uns auf das
					sportliche Treffen am 24. September in Lemberg.
					<br />
					Euer Trail-Team
				</p>
			</div>
			<a
				href='/assets/2023TraillaufFlyer.pdf'
				className='btn btn-primary'
				download>
				Veranstaltungsinfos als PDF
			</a>
			<h1 className='my-8'>Ergebnisse der vorherigen Läufe</h1>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					{/* head */}
					<thead>
						<tr>
							<th>Jahr</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
						{PastResults.map((result) => (
							<tr key={result.year}>
								<th>{result.year}</th>
								<td>
									<a
										className='link link-primary'
										href={result.link}
										target={'_blank'}>
										Zu RaceResult
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
