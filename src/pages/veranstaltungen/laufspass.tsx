import Image from 'next/image';
import Laufspass1 from '../../../public/images/Laufspass1.jpg';

const PastResults = [
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
				Der 11. Lemberger Laufspass findet erstmals im Rahmen des Laufladen-Cups
				und der WasgauCup-Laufserie statt. Der TV Lemberg würde Dich gerne am
				<strong> 11.05.2025</strong> begrüßen und wünscht Dir eine erfolgreiche
				Teilnahme. Zur gezielten Vorbereitung bietet der Turnverein Lemberg zwei
				drei Trainingsläufe unter der Leitung von Volker Ringelspacher und
				Nathan Schmitt an. Die Termine dazu werden noch veröffentlicht.
				Donnerstag 24.04 (18 Uhr) - Sonntag 27.04. (9.30 Uhr) - Montag 28.04 (18
				Uhr) Treffpunkt ist jeweils der Parkplatz unterhalb der Burgruine
				Lemberg.
			</p>
			<a
				href={'https://my.raceresult.com/318709/registration'}
				target='_blank'
				className='btn btn-primary mb-8'>
				Zur Anmeldung bei Raceresult
			</a>
			<Image
				src={Laufspass1}
				alt='Laufspass'
				className='mx-auto my-4 shadow-md rounded-md border'
			/>
			<a download className='btn btn-primary' href='/assets/Laufspass2025.pdf'>
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
