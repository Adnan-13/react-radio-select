import { useState } from 'react';
import MultiRadioSelect from './components/MultiRadioSelect/MultiRadioSelect';

function App() {
	// example radio options
	const options = [
		'option 1',
		'option 2',
		'option 3',
		'option 4',
		'option 5',
	];

	const [selectedOption, setSelectedOption] = useState('');

	// this is just to show that the value is being updated
	const viewSelectedOption = <p>Selected option: {selectedOption}</p>;

	return (
		<>
			<MultiRadioSelect
				options={options}
				setValue={setSelectedOption}
				value={selectedOption}
			/>
			{viewSelectedOption}
		</>
	);
}

export default App;
