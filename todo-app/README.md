# ToDo List App

This app was done using React and Redux, and the UI styling was done with Semantic UI. On the app you can add, edit, or delete ToDo's from a ToDo list. The database where the ToDo's get stored was created using JSON server. The app also has an authentication feature, which was made by implementing OAuth 2.0 authorization to access Google APIs. The app can only be used if the user is signed in to a Google account.

---

## Page Breakdown

1. **Header:** The 'Sign In with Google' button appears when the user is not signed in to a Google account. When the user signs in by clicking the button and entering the credentials, the user can start using the app. The user can sign out by clicking the same button, which by then will have in it the text: 'Sign Out'.
2. **Input Field:** The user can type in the ToDo's and add them to the list by either pressing the 'Enter' key or by clicking the 'Add' button. Whenever a ToDo gets added, the input field will be cleared. If the user submits an empty input field, no ToDo's will be added to the list and an error message will be displayed on the page.
3. **ToDo List:** Each item from the list has three different buttons. The blue check mark button, whenever clicked, will add a line through the ToDo; indicating that the ToDo was completed. The yellow note button, when clicked, redirects the user to a page where the Todo in which the clicked button was, can be edited/updated. When the user clicks the 'Update' button, the user will be redirected to the home page where the list of ToDo's is displayed. The update to the ToDo will be reflected on the page. The red trash button, when clicked, deletes the ToDo. Each item in the list includes simple animations, including the increase in size of the buttons when hovered. 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
