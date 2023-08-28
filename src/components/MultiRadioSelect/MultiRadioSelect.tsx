type Props = {
	options: string[];
	setValue: (value: string) => void;
	value: string;
};

/**
 * @brief A component that allows the user to select one option from a list of options.
 * @param options An array of strings that represent the options to be displayed.
 * @param setValue A function that sets the value of the selected option.
 * @param value A string that represents the selected option. Keep empty if initially no option is selected.
 */
const MultiRadioSelect = (props: Props) => {
	return (
		<div className='multi-radio-select'>
			{props.options.map((option, index) => (
				<div key={index}>
					<input
						type='radio'
						id={option}
						name={option}
						value={option}
						checked={props.value === option}
						onChange={props.setValue.bind(null, option)}
					/>
					<label htmlFor={option}>{option}</label>
				</div>
			))}
		</div>
	);
};

export default MultiRadioSelect;
