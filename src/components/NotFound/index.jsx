import "./notfound.css"
import NFound from "../../assets/img/404-page.png"

export const NotFound = () => {
  return (
    <div className="containr">
      <img src={NFound} alt="img" className="not_found_img" />
    </div>
  )
}
