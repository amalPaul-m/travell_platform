import Header from '../../components/header.tsx'  
import Footer from '../../components/footer.tsx'
import Post from '../../components/post.tsx'
import HomeDetails from '../../components/homeDetails.tsx'
import { useState } from 'react'

const Home = () => {

    const[homeDetails, setHomeDetails] = useState(false)

  return (
    <>
        <Header />
        {homeDetails ? (
          <HomeDetails />
        ):(
          <>
          <Post setHomeDetails={ setHomeDetails }/>
          <Post setHomeDetails={ setHomeDetails }/>
          <Footer />
          </>
        )}
        
    </> 
  )
}

export default Home
