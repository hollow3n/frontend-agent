import '../App.css'
import {Link} from 'react-router-dom'

export default function Navbar () {
    return (
        <div className = "a-div">
            <h1>Console AGENT</h1>
            <nav className ="a-nav">
                <Link to="/" className='a-link'>Transferts</Link>
                <Link to="/readClient" className='a-link'>Clients</Link>
                <Link to="/readBeneficiaire" className='a-link'>Bénéficiaires</Link>
                <Link to="/readCompte" className='a-link'>Comptes</Link>
                <Link to="/profile" className='a-link'>Profil</Link>
                <Link to="/login" className='a-link'>Déconnexion</Link>
            </nav>
        </div>
    )
}