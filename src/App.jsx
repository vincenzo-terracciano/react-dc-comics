import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import links from './data/links'
import comics from './data/comics'

function App() {

  return (
    <>
      <Header links={links} />
      <Main comics={comics} />
      <Footer />
    </>
  )
}

export default App
