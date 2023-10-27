import { BasicForm } from '../Component/BasicForm';

export const AdminMeeting = () => {
	let data = {
		title: 'Add Meeting Link below',
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
