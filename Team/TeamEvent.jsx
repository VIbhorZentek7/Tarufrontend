import { BasicForm } from '../src/Component/BasicForm';

export const TeamEvent = () => {
	let data = {
		display: 'none',
		title: 'Event List are as follow',
		inputTitle: 'Add Meeting Link',
		inputTitleHeading: 'Add Meeting Heading',
		linkTitle: '	Click me to hit the Meeting',
		type: 'event'
	};
	return (
		<>
			<BasicForm title={data} />
		</>
	);
};
