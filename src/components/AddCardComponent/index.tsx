import { Link } from "react-router-dom"
import ButtonComponent from "../ButtonComponent"
import { FaPlus } from "react-icons/fa"

const AddCardComponent = () => {
  return (
   <div className="py-4" >
    <h1 className="flex flex-row text-xl" >My Cards</h1>
     <div className="flex flex-row py-3 justify-evenly">
        <Link to="/qrscan">
        <div className="flex flex-col items-center text-black bg-white h-[90px] justify-center w-[90px] rounded-full shadow-xl" >
            <FaPlus className="text-[26px]" />
            Add Card
          </div>
        </Link> 
        <ButtonComponent disabled={true} name="Disabled" className="max-w-min p-5 rounded-full h-[90px] w-[90px] bg-white text-black shadow-xl" />
    </div>
   </div>
  )
}

export default AddCardComponent