import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export default function Header() {
    return (
        <header className="flex items-center w-full h-32 border border-black bg-black">
            <div className="flex items-center w-full h-full mx-16 justify-between">
                <div className='borde'>
                    <Link to="/home" className="flex-shrink-0">
                        <img src={Logo} alt="Logo" className="h-8" />
                    </Link>
                </div>

                <div className="flex items-center space-x-5">
                    <ul className="flex gap-5 items-center text-white">
                        <li>Projetos</li>
                        <li>Parcerias</li>
                        <li>Perguntas</li>
                        <li>
                            <Link to="/orcamento"><Button variant={'secondary'} className='text-textcolor-orange border border-textcolor-borderbutton bg-black hover:bg-textcolor-btn1hover focus:bg-textcolor-btn1hover'>
                                Orçamento
                            </Button></Link>

                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
