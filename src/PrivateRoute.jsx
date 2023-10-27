import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
export const PrivateRoute = ({ children }) => {
	const [cookies, setCookie] = useCookies(['authorization']);
	const data = cookies?.authorization;
	console.log(data, 'authdata');
	const navigate = useNavigate();
	useEffect(() => {
		if (!data?.isAuthenticated) {
			navigate('/login');
		}
	}, [data?.isAuthenticated, navigate]);

	return data?.isAuthenticated && data?.type == 'user' ? children : null;
};
