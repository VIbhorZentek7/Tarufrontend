import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { Login } from '../User/login';
import { Signup } from '../User/signup';
import { AdminMeeting } from './Admin/AdminMeeting';
import { EventScheduling } from './Admin/EventScheduling';
import { WorkAssign } from './Admin/WorkAssign';
import { Home } from '../User/Home';
import { TeamMeetingList } from '../Team/TeamMeetingList';
import { TeamEvent } from '../Team/TeamEvent';
import { TeamWorkAssign } from '../Team/TeamWorkassign';
import { AdminLogin } from './Admin/AdminLogin';
import { AdminSignup } from './Admin/Adminsignup';
import { IdRegister } from '../User/IdRegistration';
import { PrivateRoute } from './PrivateRoute';
import { AdminPrivateRoute } from './AdminPivateRoute';

function App() {
	return (
		<>
			<Routes>
				{/* User Protected Routes */}

				<Route path="/signup" element={<Signup />} />
				<Route exact path="/login" element={<Login />} />

				{/* User internal routes */}
				<Route
					path="/"
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>

				<Route
					path="/TeamMeetingList"
					element={
						<PrivateRoute>
							<TeamMeetingList />
						</PrivateRoute>
					}
				/>
				<Route
					path="/TeamEventSchedule"
					element={
						<PrivateRoute>
							<TeamEvent />
						</PrivateRoute>
					}
				/>
				<Route
					path="/TeamWorkAssign"
					element={
						<PrivateRoute>
							<TeamWorkAssign />
						</PrivateRoute>
					}
				/>
				<Route path="/Register" element={<IdRegister />} />

				{/* Admin protected routes */}
				<Route path="/TaruGaurdianAdminsignup" element={<AdminSignup />} />
				<Route path="/TaruGaurdianAdminlogin" element={<AdminLogin />} />

				{/* Admin internal routes */}
				<Route
					path="/AdminMeeting"
					element={
						<AdminPrivateRoute>
							<AdminMeeting />
						</AdminPrivateRoute>
					}
				/>
				<Route
					exact
					path="/AdminEvent"
					element={
						<AdminPrivateRoute>
							<EventScheduling />
						</AdminPrivateRoute>
					}
				/>
				<Route
					path="/AdminWorkAssign"
					element={
						<AdminPrivateRoute>
							<WorkAssign />
						</AdminPrivateRoute>
					}
				/>

				<Route path="*" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
