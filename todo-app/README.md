# ToDo List App

This app was done using React and Redux, and the UI styling was done with Semantic UI. On the app you can add, edit, or delete ToDo's from a ToDo list. The database where the ToDo's get stored was created using JSON server. The app also has an authentication feature, which was made by implementing OAuth 2.0 authorization to access Google APIs. The app can only be used if the user is signed in to a Google account.

---

## Page Breakdown

1. **Header:** The 'Sign In with Google' button appears when the user is not signed in to a Google account. When the user signs in by clicking the button and entering the credentials, the user can start using the app. The user can sign out by clicking the same button, which by then will have in it the text: 'Sign Out'.
2. **Input Field:** The user can type in the ToDo's and add them to the list by either pressing the 'Enter' key or by clicking the 'Add' button. Whenever a ToDo gets added, the input field will be cleared. If the user submits an empty input field, no ToDo's will be added to the list and an error message will be displayed on the page.
3. **ToDo List:** Each item from the list has three different buttons. The blue check mark button, whenever clicked, will add a line through the ToDo; indicating that the ToDo was completed. The yellow note button, when clicked, redirects the user to a page where the Todo in which the clicked button was, can be edited/updated. When the user clicks the 'Update' button, the user will be redirected to the home page where the list of ToDo's is displayed. The update to the ToDo will be reflected on the page. The red trash button, when clicked, deletes the ToDo. Each item in the list includes simple animations, including the increase in size of the buttons when hovered.

---
