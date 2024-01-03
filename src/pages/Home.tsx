import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Pagination } from "swiper/modules"
import CardComponent from "../components/CardComponent"
import { Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"
import AddCardComponent from "../components/AddCardComponent"

const Home = () => {
  interface DataType {
    description: string
    type: string
    amount: number
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Transactions",
      dataIndex: "description",
      key: "description",
      render: (text) => <a className="text-[#3C3C3B]">{text}</a>,
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
      render: (_, { type }) => (
        <>
          {type === "credit" ? (
            <Tag color="green" key={type}>
              {type.toUpperCase()}{" "}
            </Tag>
          ) : (
            <Tag color="red" key={type}>
              {type.toUpperCase()}
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount",
      render: (amount) => (
        <>
          <h1 className=" text-[#1446A0] font-semibold text-lg ">${amount}</h1>
        </>
      ),
    },
  ]

  const carouselItems = [
    {
      id: 1,
      title: "Card Number: 1",
      balance: "$20",
      expiresOn: "21/4/24",
      uId: "1000 2000 3000 4000",
    },
    {
      id: 2,
      title: "Card Number: 2",
      balance: "$40",
      expiresOn: "17/6/24",
      uId: "1000 2000 3000 4000",
    },
    {
      id: 3,
      title: "Card Number: 3",
      balance: "$30",
      expiresOn: "8/6/24",
      uId: "1000 2000 3000 4000",
    },
  ]

  const transactionData = [
    [
      {
        id: 1,
        description: "Transaction 1 for Slide 1",
        amount: 13,
        type: "credit",
      },
      {
        id: 2,
        description: "Transaction 2 for Slide 1",
        amount: 25,
        type: "debit",
      },
      {
        id: 1,
        description: "Transaction 1 for Slide 1",
        amount: 13,
        type: "credit",
      },
      {
        id: 2,
        description: "Transaction 2 for Slide 1",
        amount: 25,
        type: "debit",
      },
      {
        id: 1,
        description: "Transaction 1 for Slide 1",
        amount: 13,
        type: "credit",
      },
      {
        id: 2,
        description: "Transaction 2 for Slide 1",
        amount: 25,
        type: "debit",
      },
      {
        id: 1,
        description: "Transaction 1 for Slide 1",
        amount: 13,
        type: "credit",
      },
      {
        id: 2,
        description: "Transaction 2 for Slide 1",
        amount: 25,
        type: "debit",
      },
      
    ],
    [
      {
        id: 3,
        description: "Transaction 1 for Slide 2",
        amount: 23,
        type: "credit",
      },
      {
        id: 4,
        description: "Transaction 2 for Slide 2",
        amount: 41,
        type: "debit",
      },
    ],
    [
      {
        id: 5,
        description: "Transaction 1 for Slide 3",
        amount: 42,
        type: "debit",
      },
      {
        id: 6,
        description: "Transaction 2 for Slide 3",
        amount: 12,
        type: "credit",
      },
    ],
  ]

  const [selectedSlide, setSelectedSlide] = useState(0)

  const handleCarouselChange = (swiper) => {
    setSelectedSlide(swiper.activeIndex)
  }

  return (
    <div className="py-3 pl-3">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => handleCarouselChange(swiper)}
      >
        {carouselItems.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-[320px] h-[200px] bg-[#DB3069] text-white p-5 rounded-lg"
          >
            <CardComponent
              title={item.title}
              balance={item.balance}
              uId={item.uId}
              expiresOn={item.expiresOn}
              key={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <AddCardComponent />
      <Table pagination={false} columns={columns} dataSource={transactionData[selectedSlide]} />
    </div>
  )
}

export default Home
