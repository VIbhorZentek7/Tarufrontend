import { BasicForm } from '../Component/BasicForm';

export const WorkAssign = () => {
	let data = {
		title: 'Add Work and assign it ',
		inputTitle: 'Add  Work ',
		inputTitleHeading: 'Add Student Name',
		type: 'work'
	};
	return (
		<>
			<BasicForm title={data} />
		</>
	);
};
