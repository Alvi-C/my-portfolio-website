
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
			<div className='bg-slate-900 min-h-screen'>
				<div className='bg-gradient-to-b from-violet-600/[.15] via-transparent'>
					<Navbar />
					<Outlet />
					<Footer />
				</div>
			</div>
		)
};

export default MainLayout;