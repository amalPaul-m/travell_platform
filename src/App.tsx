import Header from './components/header.tsx'  
import './App.css'
import Footer from './components/footer.tsx'
import Post from './components/post.tsx'

function App() {


  return (
    <>
      <div className="container-body">
        <Header />
        <Post />
        <Footer />
      </div>
    </> 
  )
}

export default App
