import React from "react";
import PropTypes from "prop-types";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {alert("clicked!")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Ken", age: 5 },
    { name: "hoge", age: 20 },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}


export default App;
