import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import Technologies from '../pages/Technologies';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';


const Router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/technologies',
				element: <Technologies />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
])

export default Router;