import { Link } from "react-router-dom";
import {IoHomeOutline, IoPlanetOutline} from 'react-icons/io5'
export default function NotFound() {
  return (
    <div className="not-found-container">
      <IoPlanetOutline size='100' />
      <h1 className="not-found-heading">404</h1>
      <p className="not-found-text">Page Not Found</p>
      <button className="not-found-btn"><Link to={'/'}><IoHomeOutline /> Go Back Home</Link></button>
    </div>
  )
}
