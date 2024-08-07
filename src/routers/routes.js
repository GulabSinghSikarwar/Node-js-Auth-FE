import { createBrowserRouter } from 'react-router-dom'
// import Dashboard from '../components/Dashboard'
// import DomainTable from '../components/DomainTable'
// import DNSRecordForm from '../components/DNSRecordForm'
// import HostedZones from '../components/HostedZones'

// import LoginForm from '../component/Login/Login'
import SignupForm from '../component/SignUp/Signup'
import App from '../App';
import LoginForm from '../component/Login/Login'
import OTPForm from '../component/OTP/OtpForm';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/login',
                    element: <LoginForm />,
                },
                {
                    path: '/signup',
                    element: <SignupForm />
                },
                {
                    path: '/two-fa',
                    element: <OTPForm />
                },

            ]
        },

        {
            path: '*',
            element: <p>404 Error - Nothing here...</p>
        }

    ]
)

export default router 