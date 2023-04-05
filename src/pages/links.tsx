import Link from 'next/link';

export type Link = {
	name: string;
	link: string;
};

const LinksList = [
	{
		name: 'SV Lemberg 1919 e.V.',
		link: 'https://sv-lemberg.de ',
	},
	{
		name: 'Blasorchester Lemberg',
		link: 'https://blasorchesterlemberg.de',
	},
	{
		name: 'Turnverein Münchweiler',
		link: 'https://turnverein-muenchweiler.de',
	},
	{
		name: 'Pfälzer Turnerbund',
		link: 'https://pfaelzer-turnerbund.de',
	},
	{
		name: 'Deutscher Turnerbund',
		link: 'https://dtb-online.de',
	},
	{
		name: 'Fachgebiet Prellball',
		link: 'https://prellball.de',
	},
	{
		name: 'Leichtathletikverband Pfalz',
		link: 'https://lv-pfalz.de',
	},
	{
		name: 'Turngau Westpfalz',
		link: 'https://westpfalz-turngau.de',
	},
	{
		name: 'Sportbund Pfalz',
		link: 'https://sportbund.de',
	},
	{
		name: 'Deutscher Olympischer Sportbund',
		link: 'https://dosb.de',
	},
	{
		name: 'Stützpunktturner',
		link: 'https://stützpunktturner.de',
	},
	{
		name: 'Volleyballverband Pfalz',
		link: 'https://vvp-online.de',
	},
	{
		name: 'Volleyballverband Rheinland Pfalz',
		link: 'https://vvrp.de',
	},
	{
		name: 'Deutscher Volleyballverband',
		link: 'https://volleyball-verband.de',
	},
];

export default function Links() {
	return (
		<div className='overflow-x-auto'>
			<table className='table w-full'>
				{/* head */}
				<thead>
					<tr>
						<th>Name</th>
						<th>Link</th>
					</tr>
				</thead>
				<tbody>
					{LinksList.map((link) => (
						<tr className='hover' key={link.name}>
							<td>{link.name}</td>
							<td>
								<Link
									href={link.link}
									target={'_blank'}
									rel={'noreferrer'}
									className='hover:underline'
								>
									{link.link}
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
