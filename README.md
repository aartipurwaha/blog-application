# Blog Application

This is a blogging application.
There are five categories of blogs - Technology, Management, Medical, Cultural and Social.

A user can only read blogs before login.
However, upon successful login, a user can do the following operations:
- Mark/unmark a blog as favourite.
- Add a new blog.
- See all blogs.
- See blogs category-wise.
- Add a new blog.
- Edit his/her blogs.
- Delete his/her blogs.

### Pre-requisites

You need to create two key-value pairs in browser's local storage :
1. isloggedin - It checks whether the user is logged-in or logged-out. Its value is true till the user is logged-in, otherwise false.
2. userId - It stores the id of the user who is logged-in.

Two users have been created in db.json file. You can login using these credentials.
