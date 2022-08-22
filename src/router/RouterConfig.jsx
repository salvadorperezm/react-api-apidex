import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/'

export const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path='/react-api-apidex' element={<Home />} />
      </Routes>
    </Router>
  )
}
