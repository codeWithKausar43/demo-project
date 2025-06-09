import Navbar from "./components/Navbar"
import banner from "./assets/banner.png"

function App() {

  return (
    <div>
      <header style={{
        backgroundImage: `url(${banner})`, 
      backgroundSize: "cover",
      height: "90vh",
      width:"100%",
      backgroundposition:"center",
      
      }} className="">
        <Navbar></Navbar>
      </header>
      
    </div>
  )
}

export default App
