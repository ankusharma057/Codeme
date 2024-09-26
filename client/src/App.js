import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import User from './User';
import billliImage from './assets/billli.jpeg';
import Navbar from './Navbar';
import React from "react"
import Header from './headers/Header';
import ReactLogo from './assets/reactjs.png'
import Main from './components/Main'

import ReactDOM from "react-dom"

function App() {
  const [data, setData] = useState(0);
  
//   function Name() {
//     setData(data + 1);
//   }
  
//   const user = {
//     name: 'Hedy Lamarr',
//     imageUrl: 'billliImage', // Replace with a direct image URL
//     imageSize: 200,
//   };

//   function Profile() {
//     return (
//       <>
//       <div className="fa fa-search searchIcon"></div>
//         <h1>{user.name}</h1>
//         <img
//           className="avatar"
//           src={user.imageUrl}
//           alt={'Photo of ' + user.name}
//           style={{
//             width: user.imageSize,
//             height: user.imageSize
//           }}
//         />
//       </>
//     );
//   }

//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <Users />
//       <User />
//       <Navbar />
//       <Profile /> {/* Render the Profile component */}
//       <button onClick={() => alert("this is arrow => function")}>Click me</button>
//       <button onClick={Name}>ClickME</button>
//     </div>
//   );


  function TemporaryName() {
      return (
          <div>
              <Header/>
              <Main/>
          </div>
      )
  } 

  ReactDOM.render(<TemporaryName />, document.getElementById("root"))

}


export default App;
