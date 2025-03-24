import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import links from './data/links'

function App() {

  return (
    <>
      <Header links={links} />
      <Main />
      <Footer />
    </>
  )
}

export default App
