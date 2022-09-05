// ReactDOM.render(<h1>Hello, everyone?</h1>, document.getElementById("root"))

// ReactDOM.render(
//   <ul><li>Pizza</li><li>Beer</li></ul>,
//   document.querySelector("#root")
// )

// function NavBar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Link</a>
//             </li>
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li><a className="dropdown-item" href="#">Action</a></li>
//                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                 <li><hr className="dropdown-divider"></hr></li>
//                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//             </li>
//           </ul>
//           <form className="d-flex">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   )
// }

// function Paragraph() {
//   return (<p>This is a paragraph</p>)
// }

// function MainContent() {
//   return (<p>This is after the paragraph</p>)
// }

// ReactDOM.render(
//   <div>
//     <NavBar />
//     <Paragraph />
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// )

// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// )

// console.log(page)

const navbar = (
  <nav>
    <h1>Ultimate</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(
  navbar,
  document.getElementById("root")
)