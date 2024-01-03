import { Outlet } from "react-router-dom"
import Navbar from "../components/PageNavbar/Navbar"
import { Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import BottomAppbar from "../components/BotttomAppbar"

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        {/* APP'S MAIN NAVBAR */}
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
        {/* APP'S BOTTOM NAVBAR */}
        <BottomAppbar />
      </Content>
    </Layout>
  )
}

export default MainLayout
