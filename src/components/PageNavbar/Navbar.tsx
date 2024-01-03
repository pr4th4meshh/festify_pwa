import { Link } from "react-router-dom"
import { UserAuth } from "../../context/AuthContext"
import ButtonComponent from "../ButtonComponent"

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const handleLogout = async() => {
    try {
        await logOut()
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className="w-full bg-[#E9CE2C] h-[70px] flex flex-row justify-between items-center px-4 py-2 ">
      <h1 className="text-[18px] text-[#1446A0]" >Welcome to Festify, <br /> {user?.displayName}</h1>
      {user ? <ButtonComponent name='Logout' onClick={handleLogout} className="bg-red-500 flex max-w-min" /> : <Link to="/">Sign in</Link>}
    </div>
  )
}

export default Navbar