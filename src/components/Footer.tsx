import { footerLinks } from "../constants/index";
import {scrollToSection} from "../utils/scrollToSection"


const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>More ways to shop: 
        <a 
        href="https://www.google.com/maps/search/Apple+Store/@60.8073289,23.1941803,7.29z?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D" 
        className="text-primary" target="_blank" rel="noopener noreferrer">Find an Apple Store</a> {' '} or {' '}
        <a href="https://www.google.com/maps/search/macbook+stores/@61.3616655,23.8127383,7z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D" className="text-primary" target="_blank" rel="noopener noreferrer">other retailer near you.</a> Or call 1-800-MY-APPLE.</p>
        <img src="/apple_full_logo_small.svg" alt="Apple Logo" className="w-5 cursor-pointer" onClick={() => scrollToSection('hero')}/>
      </div>
      <hr />
      <div className="links">
        <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
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