import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Design } from './Design';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginData } from '../src/Redux/slices/login.slice';
import { useCookies } from 'react-cookie';
// import '../User/login.css';
export const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [cookies, setCookie] = useCookies(['authorization']);
	const handleSubmit = () => {
		let payload = !!password && !!email ? { password, email } : null;

		axios
			.post('http://localhost:3001/user/login', payload)
			.then(res => {
				console.log(res.data);
				dispatch(loginData(res.data));
				setCookie(
					'authorization',
					JSON.stringify({
						success: res.data.success,
						status: res.data.status,
						isAuthenticated: res.data.isAuthenticated,
						type: res.data.type
					}),
					{
						path: '/',
						maxAge: 3600
					}
				);

				res.data.status == 200 ? navigate('/') : null;
			})
			.catch(err => console.log(err));
	};

	return (
		<>
			<section>
				<Design />
				<div className="signin" style={{ minWidth: '400px' }}>
					<div className="content">
						<h2>Log In</h2>

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
								<Link to="/signup">Signup</Link>
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
