import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Design } from './Design';
import { Link, useNavigate } from 'react-router-dom';

// import '../User/login.css';
export const IdRegister = () => {
	const [id, setid] = useState();
	const navigate = useNavigate();
	const handleSubmit = () => {
		let payload = !!id ? { id } : null;

		axios
			.post('http://localhost:3001/user/register', payload)
			.then(res => {
				res.status == 200 ? navigate('/') : null;
			})
			.catch(err => console.log(err));
	};

	return (
		<>
			<section>
				<Design />
				<div className="signin">
					<div className="content">
						<h2>Registration ID</h2>

						<div className="form">
							<div className="inputBox">
								<input type="text" required onChange={e => setid(e.target.value)} value={id} />{' '}
								<i>Enter Your College Registration ID</i>
							</div>

							<div className="inputBox">
								<input type="button" onClick={handleSubmit} value="Register" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
