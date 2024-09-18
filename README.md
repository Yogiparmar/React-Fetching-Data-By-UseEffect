### Components
- Navbar: Contains three buttons (Users, Posts, Comments) controlled by a useState hook.
- PostsComponent: Displays posts data.
- UsersComponent: Displays users data.
- CommentsComponent: Displays comments data.

### State Management
- A useState hook to manage the current view (Users, Posts, Comments).
- A useState hook to store fetched data (users, posts, comments).

### Data Fetching
- Uses the useEffect hook to fetch data from the JSON Placeholder API when the view changes. The useEffect dependency array includes the current view to trigger refetching on view changes.

### Conditional Rendering
- Uses a ternary operator in the UsersComponent to conditionally render different content based on the selected view.

### Data Passing
- Passes fetched data to the relevant component using props.

### Contributing

* Contributions are welcome! If you'd like to improve the project, please fork the repository and submit a pull request.

### Acknowledgments

* Special thanks to the React community for their resources and support.
* Inspiration drawn from various coding challenges and tutorials.

### Contact

Feel free to reach out if you have any questions or feedback!

[@Yogiparmar](https://github.com/Yogiparmar)
