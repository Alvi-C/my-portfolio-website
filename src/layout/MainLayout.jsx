
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
			<div className=''>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		)
};

export default MainLayout;