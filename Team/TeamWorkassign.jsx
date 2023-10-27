import { BasicForm } from '../src/Component/BasicForm';

export const TeamWorkAssign = () => {
	let data = {
		display: 'none',
		title: 'Work list   are as follow',
		inputTitle: 'Add Meeting Link',
		inputTitleHeading: 'Add Meeting Heading',
		linkTitle: '	Click me to hit the Meeting',
		type: 'work'
	};
	return (
		<>
			<BasicForm title={data} />
		</>
	);
};
