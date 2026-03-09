import Image from 'next/image';
import Laufspass1 from '../../../public/images/Laufspass.jpg';

const PastResults = [
	{
		year: 2025,
		link: 'https://my.raceresult.com/318709/results',
	},
	{
		year: 2024,
		link: 'https://my.raceresult.com/281995/results',
	},
	{
		year: 2023,
		link: 'https://my.raceresult.com/236854/results',
	},
	{
		year: 2020,
		link: 'https://my.raceresult.com/149621/results?lang=de',
	},
	{
		year: 2019,
		link: 'https://my2.raceresult.com/96922/results?lang=de',
	},
	{
		year: 2018,
		link: 'http://my5.raceresult.com/96921/results?lang=de',
	},
	{
		year: 2017,
		link: 'http://my5.raceresult.com/54003/results?lang=de',
	},
	{
		year: 2016,
		link: 'http://my5.raceresult.com/48170/results?lang=de',
	},
	{
		year: 2015,
		link: 'http://my5.raceresult.com/34850/results?lang=de',
	},
	{
		year: 2014,
		link: 'http://my5.raceresult.com/24950/results?lang=de',
	},
	{
		year: 2013,
		link: 'http://my5.raceresult.com/15047/?lang=de',
	},
];

export default function Laufspass() {
	return (
		<div className='text-center prose mx-auto'>
			<h1 className='mb-8'>Willkommen beim Lemberger Laufspass!</h1>
			<p>
				Der TV 1891 Lemberg würde Dich gerne am Samstag <strong>09.05.2026</strong> beim 12.
				Lemberger Laufspass begrüßen. Der Hauptlauf über 10,2 km und 210 hm startet um 16 Uhr. Zur
				gezielten Vorbereitung bietet der Turnverein nachfolgende Trainingsläufe unter der Leitung
				von Volker Ringelspacher und Nathan Schmitt an. Donnerstag 23.04 (18 Uhr) - Montag 27.04 (18
				Uhr) - Donnerstag 30.04 (18 Uhr) - Sonntag 03.05 (10 Uhr). Treffpunkt ist jeweils der
				Parkplatz unterhalb der Burgruine Lemberg. Der Turnverein wünscht Dir eine erfolgreiche
				Vorbereitung und Teilnahme.
			</p>
			<a
				href={'https://my.raceresult.com/387155/registration'}
				target='_blank'
				className='btn btn-primary mb-8'>
				Zur Anmeldung bei Raceresult
			</a>
			<Image
				src={Laufspass1}
				alt='Laufspass'
				className='mx-auto my-4 shadow-md rounded-md border'
			/>
			<a download className='btn btn-primary' href='/assets/Laufspass.pdf'>
				Download als PDF
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
									<a className='link link-primary' href={result.link} target={'_blank'}>
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
