import { navLinks } from "../constants"
import {scrollToSection} from "../utils/scrollToSection"


const Navbar = () => {

    return (
        <header>
            <nav>
                <img src="/apple_full_logo_small.svg" alt="AppleLogo" className="w-5" onClick={() => scrollToSection('hero')}/>
                <ul>
                        {navLinks.map(({label}) => (
                            <li key= {label}><a href={label}>{label}</a></li>
                        ))}

                </ul>
                <div>
                    <button>
                        <img src="/search.svg" alt="search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                </div>

            </nav>
        </header>
    )
}

export default Navbar