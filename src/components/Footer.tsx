import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='footer footer-center p-4 py-8 sm:p-10 bg-primary text-base-100'>
			<div className='flex flex-wrap justify-center gap-4 text-lg'>
				<Link className='link link-hover' href={'/impressum'}>
					Impressum
				</Link>
				<Link className='link link-hover' href={'/datenschutz'}>
					Datenschutz
				</Link>
				<Link className='link link-hover' href={'/datenschutz-mitglieder'}>
					Datenschutz (Mitglieder)
				</Link>
				<Link className='link link-hover' href={'/satzung'}>
					Satzung
				</Link>
				{/* <a className='link link-hover'>Presse & Zeitung</a> */}
				<Link className='link link-hover' href={'/links'}>
					Weitere Links
				</Link>
			</div>
			<div>
				<a
					className='p-4 rounded-full bg-base-100 hover:bg-base-200'
					href='https://www.facebook.com/tv1891lemberg/?locale=de_DE'
					aria-label='Facebook'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						className='fill-current text-primary'>
						<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
					</svg>
				</a>
			</div>
			<div>
				<p className='italic'>
					Copyright © {new Date().getFullYear()} - Turnverein Lemberg e. V. -{' '}
					<a
						href='https://paulf.dev'
						className='link link-hover
					italic
					text-base-100
					text-sm
					'
						target={'_blank'}>
						Technische Umsetzung &amp; Design: Paul Faass
					</a>
				</p>
			</div>
		</footer>
	);
}
