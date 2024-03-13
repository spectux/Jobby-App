import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-found-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="not found"
        />
      </div>
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-message">We are sorry, the page you requested could not be found</p>
    </div>
  </div>
)

export default NotFound
