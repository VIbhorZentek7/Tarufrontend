import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Design } from './Design';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
export const Signup = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	let navigate = useNavigate();

	const handleSubmit = () => {
		let payload = !!password && !!email ? { password, email } : null;
		console.log(payload);
		let response = axios.post('http://localhost:3001/user/createUser', payload);
		response
			.then(res => {
				res.status == 200 ? navigate('/login') : toast('error');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<>
			<section>
				<Design />
				<div className="signin" style={{ minWidth: '400px' }}>
					<div className="content">
						<h2>Sign up</h2>

						<div className="form">
							<div className="inputBox">
								<input type="text" required onChange={e => setEmail(e.target.value)} value={email} /> <i>Username</i>
							</div>

							<div className="inputBox">
								<input type="password" required onChange={e => setPassword(e.target.value)} value={password} />{' '}
								<i>Password</i>
							</div>

							<div className="links">
								<Link to="/signup">Already Have Account</Link>
								<Link to="/login">Login</Link>
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
