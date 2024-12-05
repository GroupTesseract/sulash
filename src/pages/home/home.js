import ImgPrincipal from '../../assets/imgs/home/imgPrincipal.svg';

import { FaWhatsapp} from 'react-icons/fa';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './home.css';

export default function Home() {
    return (
       <>
        <Header/>
        <main>
            <section className='introduction-container'>
                <div className='introduction-container__actions-container'>
                    <h1>MARQUE SUA SESSÃO COMIGO HOJE MESMO</h1>
                    <button>
                        AGENDAR SERVIÇO 
                        <FaWhatsapp size={36} color='#000' />
                    </button>
                </div>
                <div className='introduction-container__img-container'> 
                    <img src={ImgPrincipal} />
                </div>
            </section>
        </main>
        <Footer/>
       </>
       
    );
}


