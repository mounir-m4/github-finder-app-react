const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
			<div>
				<p>copyright &copy;{year}</p>
			</div>
		</footer>
	);
};

export default Footer;
