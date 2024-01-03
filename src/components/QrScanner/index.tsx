import { useEffect, useState } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"
import ButtonComponent from "../ButtonComponent"
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

type Result = string
type Error = string       

const QrScanner = () => {
  const [scanResult, setScanResult] = useState<Result | null>(null)
  const navigate = useNavigate()
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
      rememberLastUsedCamera: true,
    },true)

    scanner.render(success, error)
    function success(result: Result | undefined) {
      scanner.clear()
      setScanResult(window.location.href = result as Result )
      // handleSr()
    }

    function error(err : Error | null) {
      console.warn(err)
    }
  }, [])
  return (
    <div className="p-10" >
      <ButtonComponent name="Back" icon={<FaArrowLeft />} onClick={() => navigate(-1)} className="text-sm text-[#3C3C3B] border-b-[1px]" />
    <div style={{fontSize: '10px', marginTop: '30px'}} >
      <h1>SCAN THE QR CODE TO ADD A NEW CARD..</h1>
    </div>
      {scanResult ? (
        <div>
          Success: <a href={scanResult}>Click this link to navigate to: </a>
          {scanResult}
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  )
}

export default QrScanner