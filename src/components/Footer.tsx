import Logo from '../assets/logo-secondary.png'
import redes from '../assets/redes.png'
import '../css/reponsive.css'

export default function Footer() {
    return (
        <footer className="flex items-center w-full h-[467px] border border-black bg-black">
            <div className="flex w-full justify-between h-96 mx-16" id='footer-container'>
                <div className='flex flex-col justify-center flex-1 h-80 gap-5  card-responsive'>
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-[150px]"
                    />
                    <p className='text-white mb-2'>Codifique seu futuro - 2022</p>
                    <img
                        src={redes}
                        alt="redes"
                        className="w-[150px]"
                    />
                </div>
                <div className='flex flex-col items-start justify-center flex-1   h-80 text-white card-responsive'>
                    <ul className='pl-4'>
                        <li>Página inicial</li>
                        <li>Contato</li>
                        <li>Sobre</li>
                        <li>Orçamento</li>
                        <li>Parcerias</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center flex-1 h-80 text-white card-responsive'>
                    <p className='mb-2'>Elevasoft Code - CNPJ 00.000.000/0000-00.</p>
                    <p className='mb-2'>E-mail: contatoelevasoft@gmail.com</p>
                    <p className='mb-2'>WhatsApp: +99 99 99999-9999</p>
                    <p>Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
