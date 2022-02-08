import React, { useEffect, useRef, useCallback } from "react";
import { connect, useSelector } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = (props) => {
	const isSignedIn = useSelector((state) => state.auth.isSignedIn);
	const auth = useRef("");

	const onAuthChange = useCallback(
		(isSignedIn) => {
			if (isSignedIn) {
				props.signIn(auth.current.currentUser.get().getId());
			} else {
				props.signOut();
			}
		},
		[props]
	);

	useEffect(() => {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"539777620603-484nmhcejt9ni9v01f1k1j0v8kkslaan.apps.googleusercontent.com",
					scope: "email",
				})
				.then(() => {
					auth.current = window.gapi.auth2.getAuthInstance(); //creates instance of googleobject and stores it in this variable
					onAuthChange(auth.current.isSignedIn.get()); //when component first renders, we get the current status of user
					auth.current.isSignedIn.listen(onAuthChange); //listens to any change in the users status and by calling onAuthChange, we get the current status of user
				});
		});
	}, [onAuthChange]);

	const onSignInClick = () => {
		auth.current.signIn();
	};

	const onSignOutClick = () => {
		auth.current.signOut();
	};

	const renderAuthButton = () => {
		if (isSignedIn === null) {
			return null;
		} else if (isSignedIn) {
			return (
				<button
					onClick={onSignOutClick}
					className="ui compact red google button google-btn"
					style={{ fontSize: "17px" }}
				>
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button
					onClick={onSignInClick}
					className="ui red google button google-btn"
					style={{ fontSize: "17px" }}
				>
					<i className="google icon" />
					Sign In with Google
				</button>
			);
		}
	};

	return (
		<div>
			<div>{renderAuthButton()}</div>
		</div>
	);
};

export default connect(null, { signIn, signOut })(GoogleAuth);
