import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';
import { AdminDesign } from './AdminDesign';
// import '../User/login.css';
export const AdminLogin = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	let navigate = useNavigate();
	const handleSubmit = () => {
		let payload = !!password && !!email ? { password, email } : null;
		console.log(payload);
		axios
			.post('http://localhost:3001/admin/adminlogin', payload)
			.then(res => {
				res.status == 200 ? navigate('/AdminMeeting') : toast('Failed due to some issues');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<>
			<section>
				<AdminDesign />
				<div className="signin" style={{ minWidth: '400px' }}>
					<div className="content">
						<h2>Admin Log In</h2>

						<div className="form">
							<div className="inputBox">
								<input type="text" required onChange={e => setEmail(e.target.value)} value={email} /> <i>Username</i>
							</div>

							<div className="inputBox">
								<input type="password" required onChange={e => setPassword(e.target.value)} value={password} />{' '}
								<i>Password</i>
							</div>

							<div className="links">
								<Link to="/resetpassword">Forget Password</Link>
								<Link to="/TaruGaurdianAdminsignup">Signup</Link>
							</div>

							<div className="inputBox">
								<input type="button" onClick={handleSubmit} value="Login" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
