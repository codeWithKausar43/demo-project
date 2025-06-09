import { CiSearch } from "react-icons/ci"
import { IoBookmarks } from "react-icons/io5"


function Navbar() {

  return (
    
      <div className="flex items-center justify-between mx-auto max-w-7xl pt-12">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-3xl flex items-center gap-2"><IoBookmarks />
            HomeQuest</h2>
          <p>Projects</p>
          <p>Service</p>
          <p>contact</p>
          <p>Testimonial</p>
        </div>
        <div className="flex items-center gap-2 ">
          <p>0123456789</p>
          <p className="size-8 bg-gray-300 flex items-center justify-center rounded-full text-white ">
            <CiSearch />
            
          </p>
          <button className="bg-[#DBFB1E] px-6 py-2 text-white font-bold text-lg rounded-xl">
              Goin
            </button>
        </div>
        
      </div>
    
  )
}

export default Navbar
