export default function Antraege() {
	return (
		<div className='prose text-center mx-auto'>
			<h1 className='mb-8'>Vereinsmitgliedschaft, Anträge & Anmeldungen</h1>
			<div>
				<h2>Aufnahmeantrag des TV 1891 Lemberg e.V.</h2>
				<p>
					<span className='font-bold mb-2'>
						Ich beantrage hiermit die Aufnahme als Mitglied beim TV 1891 Lemberg
						e. V.
					</span>
					<br />
					Antrag ausdrucken, unterschreiben (damit die Mitgliedschaft gültig
					wird) und bei dem Abteilungs- oder Übungsleiter abgeben, dann erhältst
					du innerhalb kurzer Zeit eine schriftliche Bestätigung.
				</p>
				<a
					download
					className='btn btn-primary'
					href='/assets/Aufnahmeantrag.pdf'
				>
					Download
				</a>
			</div>
			<div>
				<h2>Beitragsordnung</h2>
				<p>
					Die Beitragsordnung 2014, gemäß Mitgliederversammlung vom 18.09.2013
					finden Sie nachfolgend als Download.
				</p>
				<a
					download
					className='btn btn-primary'
					href='/assets/Beitragsordnung.pdf'
				>
					Download
				</a>
				<p>
					Die Mitgliedsbeiträge ab 2023, gemäß Beschluss der
					Mitgliederversammlung vom 10.11.2021 finden Sie nachfolgend als
					Download
				</p>
				<a
					download
					className='btn btn-primary'
					href='/assets/BeitragsordnungAnhang.pdf'
				>
					Download
				</a>
			</div>
			<div>
				<h2>Einwilligung Personenbilder</h2>
				<p>
					Die Einwilligung in die Veröffentlichung von Personenbildnissen finden
					Sie nachfolgend als Download.
				</p>
				<a
					download
					className='btn btn-primary'
					href='/assets/EinwilligungPersonenbilder.pdf'
				>
					Download
				</a>
			</div>
		</div>
	);
}
