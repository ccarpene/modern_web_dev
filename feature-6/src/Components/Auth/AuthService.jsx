import Parse from "parse";
import "./Auth.css";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    
    .catch((error) => {
      if (error.code === 202) {
        alert("A user with this email already exists.");
      } else {
        alert(`Error: ${error.message}`);
      }
    });
};

// used in auth login component
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.email);

  console.log("User: ", user);
  console.log();
  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// log out a user
export const logoutUser = () => {
  return Parse.User.logOut()
    .then(() => {
      console.log("User logged out successfully");
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// check if user is already logged in
export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};

