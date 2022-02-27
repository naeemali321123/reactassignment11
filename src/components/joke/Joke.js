import React from 'react';

export default function Joke() {
	const btn = document.querySelector('#btn');
	const joke = document.querySelector('#joke');
	// const generateJoke = async () => {
	// 	try {
	// 		const setHeader = {
	// 			headers: {
	// 				Accept: 'application/json'
	// 			}
	// 		};
	// 		const res = await fetch('https.icanhazad.com', setHeader);
	// 		const data = await res.json();
	// 		joke.innerHTML = data.joke;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// btn.addEventListener('click', generateJoke);

	return (
		<div className="text-center">
			<h3>joke by API</h3>
			<p id="joke">Joke</p>
			<div id="btn" className="btn btn-success btn-sm">
				Next Joke
			</div>
		</div>
	);
}
