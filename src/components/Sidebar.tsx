import React from 'react';

/**
 * Sidebar component that shows news
 * Is hidden on mobile
 */
export default function Sidebar() {
	return (
		<aside className='hidden lg:flex flex-col z-40 w-min-32 max-w-md h-screen p-4 border-l-2'>
			<div className='card card-side bg-base-100 shadow-xl'>
				<div className='card-body'>
					<h2 className='card-title'>New movie is released!</h2>
					<p>Click the button to watch on Jetflix app.</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Watch</button>
					</div>
				</div>
			</div>
		</aside>
	);
}
