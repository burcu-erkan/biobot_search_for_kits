import React, { useState } from 'react';
import './App.css';
import Data from './data/data.json';
import Datatable from './Datatable';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function App() {
	const [input, setInput] = useState('');
	const [data, setData] = useState(Data);

	let filtered = data.filter((x) => {
		if (
			x.label_id.substr(0, input.length) === input ||
			x.id.toString().substr(0, input.length) === input
		) {
			return true;
		} else {
			return false;
		}
	});

	return (
		<div className='app'>
			<nav className='navbar'>
				<img
					className='logo'
					src='https://biobot.io/wp-content/themes/biobot/assets/img/logo.svg'
					alt='Biobot Analytics'
				/>
			</nav>

			<div className='input'>
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder='Search kit id or label_id'
				/>

				{input.length === 0 ? (
					<SearchIcon className='input_icon' />
				) : (
					<CloseIcon className='input_icon' onClick={() => setInput('')} />
				)}
			</div>

			<Datatable data={filtered} />
		</div>
	);
}

export default App;
