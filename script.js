const users = [
{
id: 1,
title: "Juliet Alaribe",
job: "Software Developer",
skill: "JavaScript & ReactJs" 
  },
{
id: 2,
title: "Eze Anthony",
  job: "Mobile Developer",
skill: "React native" 
  },
{ 
id: 3,
title: "Kingsley Relms",
job: "Software Tester",
skill: "Angular & Vue"
},
 {
id: 4,
title: "Augusta Julie",
job: "Frontend Developer",
skill: "JavaScript & React"
},
  {
id: 5,
title: "John Smilger",
job: "Talent Recruiter",
skill: "JavaScript & Python"
}
]

/* Map over the Arrayof data to return a new array that will be returned by the user component*/
const newUsers = users.map(function (user){
  return (
<section className="component"> 
<div><span className="captn"> Name: </span><h4>{user.title}</h4></div>
<div><span className="captn"> Role: </span><h4>{user.job}</h4></div>
 <div>
 <span className="captn"> Skills: </span><h4>{user.skill}</h4></div>
  </section>
 )}
)

//Declare Header Compliment
const Header = () => {
  return ( 
<div className="backgrnd">
<ul>
<li>Home</li>
<li>Users</li>
<li>About</li>
</ul>
</div>
  )}


//Declare User component

const Users = () => {
  return (
  <div>
  <h2 className="header">Registered Users</h2>
  {newUsers}
  </div>
  )
}

//Footer
const Footer = () => {
return (
<div className="backgrnd footer">
<small> Copyright © Juliet 2023. All rights reserved.
</small>
</div>
       )
  }

//Declare App component and //receive all other components here

const App = () => {
return (
<div className="app">
<Header />
<Users />
<Footer />
</div>
)
}

//Render App component to the DOM
ReactDOM.render(
<App />, document.getElementById('root')
)
