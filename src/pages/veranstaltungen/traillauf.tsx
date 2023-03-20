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
										target={'_blank'}
									>
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
