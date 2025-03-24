import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import links from './data/links'
import comics from './data/comics'
import info from './data/info'

function App() {

  return (
    <>
      <Header links={links} />
      <Main comics={comics} />
      <Footer info={info} />
    </>
  )
}

export default App
