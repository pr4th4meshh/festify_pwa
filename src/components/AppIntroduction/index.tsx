import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Pagination } from "swiper/modules"
import { useNavigate } from "react-router-dom"
import ButtonComponent from "../ButtonComponent"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { MdDone } from "react-icons/md"
import { Image } from "antd"

const Introduction = () => {
  const navigate = useNavigate()
  const [swiper, setSwiper] = useState(null)
  const [isLastSlide, setIsLastSlide] = useState(false)
  const [isFirstSlide, setIsFirstSlide] = useState(true)

  const handleSwiper = (swiper) => {
    setSwiper(swiper);
    setIsFirstSlide(swiper?.isBeginning);
  };

  const goNext = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev()
    }
  }

  const finish = () => {
    navigate("/home")
  }

  const onSlideChange = () => {
    if (swiper) {
      setIsLastSlide(swiper.isEnd)
      setIsFirstSlide(swiper.isBeginning);
    }
  }

  return (
    <div>
      <Swiper
        onSwiper={handleSwiper}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSlideChange={onSlideChange}
        className="h-[90vh]"
      >
        <SwiperSlide>
          {/* Slide 1 content */}
          <div className=" h-[90vh] flex flex-col justify-center items-center ">
            <img className="h-[350px] w-[350px] " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xNtHnLtBfsHmZgXT3ttzTDzpH4ZquFOskw&usqp=CAU" alt="" />
            <h1 className=" text-3xl " >Welcome to Festify,</h1>
            <p className="text-lg text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, velit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 2 content */}
          <div className=" h-[90vh] flex flex-col justify-center items-center ">
            <img className="h-[350px] w-[350px] " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5UXYg2Gs1f9rl9SGYcVlqpT3nSHsrNUPog&usqp=CAUU" alt="" />
            <h1 className=" text-3xl " >Manage your Festify cards,</h1>
            <p className="text-lg text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, velit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 3 content */}
          <div className=" h-[90vh] flex flex-col justify-center items-center ">
            <img className="h-[350px] w-[350px] " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87Ua2G5y5jDwdyVh46xXlz8pLmcIivE9KLw&usqp=CAU" alt="" />
            <h1 className=" text-3xl text-center " >Easy access to your cards related information all at one place,</h1>
            <p className="text-lg text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, velit.</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-row justify-end p-4">
        {isFirstSlide ? null : <ButtonComponent className="mr-2 text-blue-500" icon={<FaArrowLeft />} name="Previous" onClick={goPrev}/>}

        {isLastSlide ? (
          <ButtonComponent className="bg-blue-500 text-white" icon={<MdDone />} onClick={finish} name="Finish" />
        ) : (
          <ButtonComponent className=" border-blue-500 text-blue-500" icon={<FaArrowRight />} onClick={goNext} name="Next"/>
        )}
      </div>
    </div>
  )
}

export default Introduction
