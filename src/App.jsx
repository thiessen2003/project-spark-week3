import './styles/components/app.sass'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div id="portfolio">
      <h1>Gabriel Thiessen</h1>
      <Sidebar/>
      <MainContent />
    </div>
  )
}

export default App
