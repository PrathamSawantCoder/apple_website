import { navLinks } from "../constants"

const Navbar = () => {

    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="AppleLogo" />
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