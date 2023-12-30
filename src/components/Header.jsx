import './header.css'
import Sidebar from './sidebar/Sidebar'

const Header = () => {
    return (
        <header>
            <Sidebar/>
            <div>
            <img src="https://www.freeiconspng.com/download/49523" alt="Photography Logo" width='90px' height='90px' className='logo' />
            <h1>Vintage</h1>
            </div>
        </header>
    )
}

export default Header
