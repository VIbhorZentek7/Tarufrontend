import { Link, useNavigate } from 'react-router-dom';
import { Design } from './Design';
import './Home.css';
import { useSelector } from 'react-redux';
export const Home = () => {
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

	// let user = [
	// 	{
	// 		name: 'Home',
	// 		link: '/'
	// 	},
	// 	{
	// 		name: 'Work',
	// 		link: '/TeamWorkAssign'
	// 	},
	// 	{
	// 		name: 'Event',
	// 		link: '/TeamEventSchedule'
	// 	},
	// 	{
	// 		name: 'Meeting',
	// 		link: '/TeamMeetingList'
	// 	}
	// ];
	// let Admin = [
	// 	{
	// 		name: 'Create Meeting',
	// 		link: '/AdminMeeting'
	// 	},
	// 	{
	// 		name: 'Create Event',
	// 		link: '/AdminEvent'
	// 	},
	// 	{
	// 		name: 'Assign Work',
	// 		link: '/AdminWorkAssign'
	// 	}
	// ];

	// let name = data.type ? [{ ...user, ...Admin }] : user;
	// console.log(name, 'name');

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
				<div className="signin " style={{ top: '20px', maxWidth: '100%' }}>
					<div className="content">
						<div className="form">
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
					</div>
				</div>
			</section>
		</>
	);
};

{
	/* <div className="container mt-5">
	<div className="row">
		{name.map((self, index) => (
			<div className="col" key={index}>
				<button onClick={() => navigate(self.link)}>{self.name}</button>
			</div>
		))}
	</div>
</div>; */
}
