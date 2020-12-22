import React from "react"
import {Link} from "gatsby"

export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/gallery/">Gallery</Link>
      <Link to="/testimonials/">Testimonials</Link>
      <Link to="/contact/">Contact</Link>
    </div>
  )
}
