
import { Link } from "react-router-dom";
import { contactDetails } from "../webData";

const Contact = () => {
    const { email } = contactDetails;
    return (
			<div className='container-size section'>
				<h1 className='text-center text-2xl md:text-3xl lg:text-6xl text-slate-300 font-semibold md:font-bold'>
					For any questions please drop a mail
				</h1>
				<h3 className='text-center text-3xl md:text-4xl lg:text-6xl text-gradient-secondary font-semibold md:font-bold pt-5 md:pt-10 md:pb-6'>
					<Link to={`mailto:${email}`}>{email}</Link>
				</h3>
			</div>
		)
};

export default Contact;