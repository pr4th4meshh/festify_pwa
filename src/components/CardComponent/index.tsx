const CardComponent = ({ title, balance, expiresOn, uId }: any) => {
  return (
    <div>
      <h3 className="text-2xl">{title}</h3>
      <div className=" flex flex-row justify-around mt-3 ">
        <p>
          Balance: <br />
          {balance}
        </p>
        <p>
          Expires on: <br />
          {expiresOn}
        </p>
      </div>

      <div className=" flex flex-row justify-around mt-3 ">
        <p>FestifyTM</p>
        <p>
          UID: <br />
          {uId}
        </p>
      </div>
    </div>
  )
}

export default CardComponent
