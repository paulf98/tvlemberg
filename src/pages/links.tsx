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
		name: 'Stützpunktturner',
		link: 'https://stützpunktturner.de',
	},
	{
		name: 'Turngau Westpfalz',
		link: 'https://westpfalz-turngau.de',
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
		name: 'Sportbund Pfalz',
		link: 'https://sportbund.de',
	},
	{
		name: 'Deutscher Olympischer Sportbund',
		link: 'https://dosb.de',
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
		<div className='text-center prose mx-auto'>
			<h1 className='my-8'>Weitere Links</h1>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{LinksList.map((link) => (
							<tr className='hover' key={link.name}>
								<td>
									<Link
										href={link.link}
										target={'_blank'}
										rel={'noreferrer'}
										className='link link-primary'>
										{link.name}
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
