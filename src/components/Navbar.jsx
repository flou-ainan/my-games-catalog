import mgcLogo from '../assets/mgc-logo.svg' 
export default function Navbar() {
    return(
        <nav>
            <img className='nav--logo' src={mgcLogo} />
        </nav>
    )
}