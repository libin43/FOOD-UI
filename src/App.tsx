
// import viteLogo from '/vite.svg'
import './App.css'
import { HomeBanner } from './components/Home/HomeBanner'
import { HomeBrand } from './components/Home/HomeBrand'
import { NavSidebarContainer } from './components/Navbar/NavSidebarContainer'
import { ProvinceSelect } from './components/Province/ProvinceSelect'

function App() {

  return (
    <>
    <NavSidebarContainer/>
    <HomeBanner/>
    <div className="homesection">
      {/* haijhi */}
    <HomeBrand/>
    <ProvinceSelect/>
    </div>
    </>
  )
}

export default App
