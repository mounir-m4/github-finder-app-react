import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UserItem = ({ user: { login, avatar_url } }) => {
	return (
		<div className='card shadow-md compact side bg-base-100'>
			<div className='flex-row items-center space-x-4 card-body'>
				<div>
					<div className='avatar'>
						<div className='rounded-full shadow-14 h-14'>
							<img src={avatar_url} alt='profile' />
						</div>
					</div>
					<div>
						<h2 className='card-title text-white font-medium'>{login}</h2>
						<Link
							className='text-base-content text-opacity-60'
							to={`/user/${login}`}>
							Visit Profile
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};
export default UserItem;
