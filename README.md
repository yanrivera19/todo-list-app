# To-Do List App

On the app you can add, edit, or delete to-do's from a to-do list. The app can only be used if you're signed in to a Google account.

### How the App Works

You can sign in to your Google account by clicking the 'Sign In with Google' button on the top right corner of the page. You can sign out by clicking the same button, which will by then have in it the text: 'Sign Out'.

In the input field, you can type in your to-do's and add them to the list by either pressing the 'Enter' key or by clicking the 'Add' button. If you submit an empty input field, no to-do's will be added to the list and an error message will be displayed on the page.

Each to-do on the list has three different buttons:

-   The **blue** check mark icon, when clicked, will add a line through the to-do; indicating that the to-do was completed.
-   The **yellow** note icon, when clicked, redirects you to a page where the to-do in which the clicked button was, can be edited/updated. When you click the 'Update' button, you will be redirected to the home page where the list of to-do's is displayed. The update made to the to-do will be reflected on the page.
-   The **red** trash icon, when clicked, deletes the to-do.

---

## Technologies Used

-   React
-   Redux
-   Semantic UI (UI styling)
-   Axios
-   JSON Server (back-end/database)
-   OAuth 2.0 (authentication)

## Quick Start

1. If you don't have a Google account, you can create one [here](https://www.google.com/account/about/).
2. Clone the app onto your local machine and open it up.
3. Open two different terminals (console) and select the cloned app on each.
4. Select the **todo-app** folder in one terminal and the **api** folder in the other.
5. Type in the command <code>npm install</code> on each terminal.
6. After that command is done running on both terminals, type in the command <code>npm start</code> on each. The app will then open in the browser on localhost:3000 and the server will be up and running.
