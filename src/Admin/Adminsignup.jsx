import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import './Admin.css';
import { Link, useNavigate } from 'react-router-dom';
import { AdminDesign } from './AdminDesign';
export const AdminSignup = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	let navigate = useNavigate();

	const handleSubmit = () => {
		let payload = !!password && !!email ? { password, email } : null;
		console.log(payload);
		let response = axios.post('http://localhost:3001/admin/createAdmin', payload);
		response
			.then(res => {
				res.status == 200 ? navigate('/TaruGaurdianAdminlogin') : toast('error');
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
						<h2>Admin Sign up</h2>

						<div className="form">
							<div className="inputBox">
								<input type="text" required onChange={e => setEmail(e.target.value)} value={email} /> <i>Username</i>
							</div>

							<div className="inputBox">
								<input type="password" required onChange={e => setPassword(e.target.value)} value={password} />{' '}
								<i>Password</i>
							</div>

							<div className="links">
								<Link to="/TaruGaurdianAdminsignup">Already Have Account</Link>
								<Link to="/TaruGaurdianAdminlogin">Login</Link>
							</div>

							<div className="inputBox">
								<input type="button" onClick={handleSubmit} value="Signup" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
