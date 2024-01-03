import { UserAuth } from "../context/AuthContext"
import ButtonComponent from "../components/ButtonComponent"
import Footer from "../components/FooterComponent"

const Profile = () => {
  const { user, logOut } = UserAuth()
  const handleLogout = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1 className="text-[46px] text-red-500 ">PROFILE PAGE</h1>
      <h3>Hello, {user.displayName}</h3>
      <ButtonComponent name="Logout" onClick={handleLogout} className="bg-red-500 flex max-w-min" /> 
      <Footer />
    </div>
  )
}

export default Profile
