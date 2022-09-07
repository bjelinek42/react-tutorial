// const page = (
//   <div>
//     <img src="https://reactjs.org/logo-og.png" width="100"></img>
//     <h1>Fun Facts About React</h1>
//     <ul>
//       <li>Was Released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )



// ReactDOM.render(page, document.getElementById("root"))



function Footer() {
  return (
    <footer className="footer">Copyright 2022 Jelinek development. All rights reserved.</footer>
  )
}
function Content() {
  return (
    <div>
      <h1>Why I want to learn React</h1>
      <ol>
        <li>I want to get a job</li>
        <li>React is more marketable and easier to use than Vue</li>
        <li>Components are interesting</li>
      </ol>
    </div>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))

