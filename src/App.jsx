
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import BrowseByCategories from './components/BrowseByCategories/BrowseByCategories'
import FindMoreChoose from './components/FindMoreChoose/FindMoreChoose'
import HeroSection from './components/HeroSection/HeroSection'
import MenuBar from './components/MenuBar/MenuBar'
import OurExploreProperties from './components/OurExploreProperties/OurExploreProperties'

import OurServices from './components/OurServices/OurServices'
import TopBar from './components/TopBar/TopBar'
import WarchOurVideo from './components/WatchOurVideo/WarchOurVideo'

function App() {
 

  return (
    <>
      <TopBar></TopBar>
      <MenuBar></MenuBar>
      <HeroSection></HeroSection>
      <BrowseByCategories></BrowseByCategories>
      <AboutUs></AboutUs>
      <OurServices></OurServices>
      <WarchOurVideo></WarchOurVideo>
      <FindMoreChoose></FindMoreChoose>
      <OurExploreProperties></OurExploreProperties>
    </>
  )
}

export default App
