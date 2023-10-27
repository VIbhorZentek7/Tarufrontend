import { BasicForm } from '../src/Component/BasicForm';

export const TeamMeetingList = () => {
	let data = {
		display: 'none',
		title: 'Meeting Links are as follow',
		inputTitle: 'Add Meeting Link',
		inputTitleHeading: 'Add Meeting Heading',
		linkTitle: '	Click me to hit the Meeting',
		type: 'meeting'
	};

	return (
		<>
			<BasicForm title={data} />
		</>
	);
};
