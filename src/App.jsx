import Navbar from "./components/Navbar"
import banner from "./assets/banner.png"
import Tusted from "./components/Tusted"

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
      <Tusted></Tusted>
      
    </div>
  )
}

export default App
