import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return (
		<div className="ui secondary menu">
			<div className="right menu">
				<div className="item">
					<GoogleAuth/>
				</div>				
			</div>
		</div>
	);
};

export default Header;