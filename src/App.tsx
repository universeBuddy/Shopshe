import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

const App = () => {
  return (

    <Router>
      {/* {headers} */}
      <Routes>

      <Route path='/' element={<Home />}/>
      </Routes>

    </Router>
  )
}

export default App