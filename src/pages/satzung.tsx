export default function Satzung() {
	return (
		<div className='prose mx-auto'>
			<h1>Satzung und Ordnungen des TVL:</h1>
			<div className='flex flex-col gap-8'>
				<a download className='btn btn-primary' href='/assets/Satzung.pdf'>
					Download Satzung 2021
				</a>
				<a download className='btn btn-primary' href='/assets/Ehrungsordnung 09-10-2024.pdf'>
					Download Ehrungsordnung 2024
				</a>
				<a download className='btn btn-primary' href='/assets/BeitragsordnungAufnahmeantrag.pdf'>
					Download Beitragsordnung
				</a>
			</div>
		</div>
	);
}
