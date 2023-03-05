import imgMain from '../../../assets/img/home-img.webp';
import { IconArrow } from '../../svg/RightSeta/index';
import { GlobalTypes } from '../../../interface/GlobalTypes';


export default function Main(props: GlobalTypes){
    return (
        <main id="container-home">
            <div className='container-info-home'>
                <p>Olá, eu sou</p>
                <h2>{props.name}</h2>
                <h3>{props.profissão}</h3>
                <button className='button-home'><a href="https://github.com/MiguelSperle" target='_blank'>Conheça meu Github.<IconArrow/></a></button>
            </div>
            <img className='img-home' src={imgMain} alt="" />
        </main>
    )
}