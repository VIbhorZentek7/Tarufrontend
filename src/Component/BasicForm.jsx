import { useEffect, useState } from 'react';
import './BasicForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Design } from '../../User/Design';
export const BasicForm = props => {
	const { title, inputTitle, inputTitleHeading, linkTitle, type, display = '' } = props?.title;
	const [TaskField, setTaskField] = useState('');
	const [TaskFieldHeading, setTaskFieldHeading] = useState('');
	const [localapi, setLocalapi] = useState([]);
	const [state, setState] = useState();
	const [counter, setCounter] = useState(0);
	const handleTaskAddition = () => {
		let data = {
			link: TaskField,
			name: TaskFieldHeading,
			linkTitle: linkTitle,
			type: type,
			display: display
		};
		let url = {
			meeting: 'meeting/createMeeting',
			event: 'event/createEvent',
			work: 'work/createWork'
		};
		if (TaskField !== '' && TaskFieldHeading !== '') {
			axios
				.post('http://localhost:3001/' + url[type], data)
				.then(res => setCounter(prev => prev + 1))
				.catch(err => console.log(err));
		}

		setTaskField('');
		setTaskFieldHeading('');
	};

	const handleDelete = value => {
		let deleteapi = {
			meeting: 'meeting/deleteMeeting',
			event: 'event/deleteEvent',
			work: 'work/deleteWork'
		};
		axios.delete(`http://localhost:3001/${deleteapi[type]}/${value}`);
		setCounter(prev => prev - 1);
	};
	let name = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'Work',
			link: '/TeamWorkAssign'
		},
		{
			name: 'Event',
			link: '/TeamEventSchedule'
		},
		{
			name: 'Meeting',
			link: '/TeamMeetingList'
		},
		{
			name: 'Create Meeting',
			link: '/AdminMeeting'
		},
		{
			name: 'Create Event',
			link: '/AdminEvent'
		},
		{
			name: 'Assign Work',
			link: '/AdminWorkAssign'
		}
	];
	useEffect(() => {
		let getURL = {
			meeting: 'meeting/getMeetings',
			event: 'event/getEvent',
			work: 'work/getWork'
		};
		axios
			.get('http://localhost:3001/' + getURL[type])
			.then(res => setLocalapi(res.data.data))
			.catch(err => {
				setLocalapi([]), console.log(err);
			});
	}, [counter]);

	function handleMenuToggle() {
		var menuItems = document.querySelectorAll('.col:not(:last-child)');
		menuItems.forEach(item => {
			item.style.display = item.style.display === 'none' ? 'block' : 'none';
		});
	}
	return (
		<>
			<section>
				<Design />
				<div className="form2">
					<div className="row">
						{name.map((self, index) => {
							return (
								<div className="col" key={index} style={{ display: 'none', marginBottom: '10px' }}>
									<Link to={self.link} style={{ color: 'white', textDecoration: 'none' }}>
										<button>{self.name}</button>
									</Link>
								</div>
							);
						})}
						<div className="col" style={{ display: 'block' }}>
							<button
								style={{
									color: 'white',
									backgroundColor: 'transparent',
									border: 'none',
									cursor: 'pointer',
									fontSize: '20px',
									padding: '10px 15px'
								}}
								onClick={() => handleMenuToggle()}
							>
								☰ Menu
							</button>
						</div>
					</div>
				</div>
				<div className="signin " style={{ background: 'none', zIndex: 999 }}>
					<div className="content">
						<div className="form">
							<div className="row justify-content-center">
								<div style={{ minWidth: '100%', display: 'flex', justifyContent: 'center' }}>
									<div
										className="app-container"
										id="taskList"
										style={{ overflowY: 'auto', maxHeight: '400px', minWidth: '40%' }}
									>
										<h1 className="app-header"> {title}</h1>

										{display !== 'none' ? (
											<div className="add-task">
												<input
													type="text"
													placeholder={inputTitleHeading}
													value={TaskFieldHeading}
													className="task-input"
													onChange={e => setTaskFieldHeading(e.target.value)}
												/>
												<input
													type="text"
													placeholder={inputTitle}
													value={TaskField}
													className="task-input"
													onChange={e => setTaskField(e.target.value)}
												/>
												<input type="submit" value="" className="submit-task" onClick={handleTaskAddition} />
											</div>
										) : null}
										{localapi?.map((task, index) => {
											return (
												<ul className="task-list" key={index}>
													<li className="task-list-item" style={{ justifyContent: 'space-between' }}>
														<label className="task-list-item-label">
															<p
																style={{
																	color: 'white'
																}}
															>
																{task?.name}
															</p>

															{task?.type == 'work' ? (
																<div>
																	<br /> <p style={{ color: 'white' }}>Assigned Task :- {task?.link}</p>
																</div>
															) : null}

															<br />

															{task?.linkTitle ? (
																<Link to={task?.link} style={{ color: 'whitesmoke', decoration: 'none' }}>
																	{task?.linkTitle}
																</Link>
															) : null}
														</label>
														{display !== 'none' ? (
															<p
																className="delete-btn"
																title="Delete Task"
																onClick={() => handleDelete(task?._id)}
																style={{ margin: '2px', width: '40px' }}
															>
																{task.del}
															</p>
														) : null}
													</li>
												</ul>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

// <div className="Parent">
// 	<div className="app-container" id="taskList">
// 		<h1 className="app-header"> {title}</h1>

// 		{display !== 'none' ? (
// 			<div className="add-task">
// 				<input
// 					type="text"
// 					placeholder={inputTitleHeading}
// 					value={TaskFieldHeading}
// 					className="task-input"
// 					onChange={e => setTaskFieldHeading(e.target.value)}
// 				/>
// 				<input
// 					type="text"
// 					placeholder={inputTitle}
// 					value={TaskField}
// 					className="task-input"
// 					onChange={e => setTaskField(e.target.value)}
// 				/>
// 				<input type="submit" value="" className="submit-task" onClick={handleTaskAddition} />
// 			</div>
// 		) : null}
// 		{localapi?.map((task, index) => {
// 			return (
// 				<ul className="task-list" key={index}>
// 					<li className="task-list-item">
// 						<label className="task-list-item-label">
// 							<span style={{ color: 'white' }}>{task?.name}</span>

// 							{task?.type == 'work' ? (
// 								<div>
// 									<br /> <span style={{ color: 'white' }}>Assigned Task :- {task?.link}</span>
// 								</div>
// 							) : null}

// 							<br />

// 							{task?.linkTitle ? (
// 								<Link to={task?.link} style={{ color: 'whitesmoke', decoration: 'none' }}>
// 									{task?.linkTitle}
// 								</Link>
// 							) : null}
// 						</label>
// 						{display !== 'none' ? (
// 							<span className="delete-btn" title="Delete Task" onClick={() => handleDelete(task?._id)}>
// 								{task.del}
// 							</span>
// 						) : null}
// 					</li>
// 				</ul>
// 			);
// 		})}
// 	</div>
// </div>;
