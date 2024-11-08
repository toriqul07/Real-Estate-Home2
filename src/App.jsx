
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import AllRightReversed from './components/AllRightReversed/AllRightReversed'
import BlogAndNews from './components/BlogAndNews/BlogAndNews'
import BrowseByCategories from './components/BrowseByCategories/BrowseByCategories'
import ClientFeedBack from './components/ClientFeedBack/ClientFeedBack'
import FindMoreChoose from './components/FindMoreChoose/FindMoreChoose'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import MenuBar from './components/MenuBar/MenuBar'
import OurAgent from './components/OurAgent/OurAgent'
import OurCity from './components/OurCity/OurCity'
import OurExploreProperties from './components/OurExploreProperties/OurExploreProperties'

import OurServices from './components/OurServices/OurServices'
import SubscribeNewsletter from './components/SubscribeNewsletter/SubscribeNewsletter'
import TopBar from './components/TopBar/TopBar'
import WarchOurVideo from './components/WatchOurVideo/WarchOurVideo'
import WorkingProcess from './components/WorkingProcess/WorkingProcess'


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
      <OurCity></OurCity>
      <WorkingProcess></WorkingProcess>
      <OurAgent></OurAgent>
      <ClientFeedBack></ClientFeedBack>
      <SubscribeNewsletter></SubscribeNewsletter>
      <BlogAndNews></BlogAndNews>
      <Footer></Footer>
      <AllRightReversed></AllRightReversed>
    </>
  )
}

export default App
