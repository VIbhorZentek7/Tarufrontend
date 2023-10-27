import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
export const AdminPrivateRoute = ({ children }) => {
	const [cookies, setCookie] = useCookies(['myCookie']);
	const loginCookie = cookies.myCookie;
	console.log(loginCookie, 'loginCookie');
	const navigate = useNavigate();
	const isAuthenticated = true;
	const type = 'admin';
	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/login');
		}
	}, [isAuthenticated, navigate]);

	return isAuthenticated && type == 'admin' ? children : null;
};
