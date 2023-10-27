import { BasicForm } from '../Component/BasicForm';

export const EventScheduling = () => {
	let data = {
		title: 'Add Event Link below',
		inputTitle: 'Add  Link Related to event ',
		inputTitleHeading: 'Add Event Heading',
		linkTitle: '	Click me to hit the Event related URL',
		type: 'event'
	};
	return (
		<>
			<BasicForm title={data} />
		</>
	);
};
