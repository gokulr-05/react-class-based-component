import classes from "./User.module.css";
import { Component, useEffect } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   useEffect(() => {
//     console.log("user");
//     return () => {
//       console.log("unmounted clean up function ");
//     };
//   }, []);

//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
