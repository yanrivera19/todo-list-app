import React, { useEffect, useRef, useCallback } from "react";
import { connect, useSelector } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = (props) => {
	const isSignedIn = useSelector((state) => state.auth.isSignedIn);
	const auth = useRef("");

	const onAuthChange = useCallback(
		(isUserSignedIn) => {
			if (isUserSignedIn) {
				props.signIn(auth.current.currentUser.get().getId());
			} else {
				props.signOut();
			}
		},
		[props]
	);

	useEffect(() => {
		/*The following loads up the client portion of the gapi (Google API) library. 
		But because it takes some time to load, we use a callback function 
		for when the loading has finished.*/
		window.gapi.load("client:auth2", () => {
			/*With the following we initialize the gapi library with our OAuth client Id. 
			We do this when the component is first rendered on screen.*/
			window.gapi.client
				.init({
					clientId:
						"539777620603-484nmhcejt9ni9v01f1k1j0v8kkslaan.apps.googleusercontent.com",
					scope: "email", //This email is what we want to have access to
				})
				.then(() => {
					//This 'then' will run when the gapi library has been initialized

					/*The following getAuthInstance() returns the GoogleAuth object and stores it in 
					the auth ref, so that we can have access to its value anywhere in this component. 
					This GoogleAuth object contains all the methods that will be used to manipulate the 
					user's authentication status (signIn, signOut, etc.)*/
					auth.current = window.gapi.auth2.getAuthInstance();

					//The following helps us figure out if the user is currently signed in or not
					onAuthChange(auth.current.isSignedIn.get());

					/*The following tracks any change in the user's authentication status and updates 
					the isSignedIn property of the gapi object to either true or false. This reflects
					the user's authentication status in the UI (sign in button).*/
					auth.current.isSignedIn.listen(onAuthChange);
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
					className="ui compact red google button google-btn"
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
