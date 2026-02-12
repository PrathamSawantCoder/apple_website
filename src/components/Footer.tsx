import { footerLinks } from "../constants/index";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>More ways to shop: <a className="text-blue">Find an Apple Store</a> or <a className="text-blue">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
        <img src="/logo.svg" alt="Apple Logo" />
      </div>
      <hr />
      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        <ul>
          {footerLinks.map(({label, link}) =>(
            <li key={label} >
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer