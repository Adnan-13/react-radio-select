type Props = {
	options: string[];
	onChange: (value: string) => void;
	value: string;
};

const MultiRadioSelect = (props: Props) => {
	return (
		<div className='MultiRadioSelect'>
			{props.options.map((option, index) => (
				<div key={index}>
					<input
						type='radio'
						id={option}
						name={option}
						value={option}
						checked={props.value === option}
						onChange={() => props.onChange(option)}
					/>
					<label htmlFor={option}>{option}</label>
				</div>
			))}
		</div>
	);
};

export default MultiRadioSelect;
