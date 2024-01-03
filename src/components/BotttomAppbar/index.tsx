import { FaHome, FaPlus } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { Link } from "react-router-dom"

const BottomAppbar = () => {
  return (
    <div className="w-full bg-[#1446A0] h-[60px] fixed bottom-0 flex flex-row justify-evenly items-center">
      <div>
        <Link to="/home">
          <div className="flex flex-col items-center text-[#F5D547]">
            <FaHome className="  text-[26px] " />
            Home
          </div>
        </Link>
      </div>
      <div>
        <Link to="/qrscan">
          <div className="flex flex-col items-center text-[#1446A0] bg-[#F5D547] h-[90px] justify-center w-[90px] rounded-full p-3 mb-[50px] " >
            <FaPlus className="  text-[26px] " />
            Add Card
          </div>
        </Link>
      </div>
      <div>
        <Link to="/profile">
          <div className="flex flex-col items-center text-[#F5D547]">
            <CgProfile className="  text-[26px] " />
            Profile
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BottomAppbar
