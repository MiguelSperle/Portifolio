import imgMain from '../../../assets/img/home-img.webp';
import { IconArrow } from '../../svg/RightSeta/index';
import { GlobalTypes } from '../../../interface/GlobalTypes';


export default function Main(props: GlobalTypes){
    return (
        <main id="container-home">
            <div className='container-info-home'>
                <p>Olá, eu sou</p>
                <h2>{props.name}</h2>
                <h3>{props.job}</h3>
                <a href="https://github.com/MiguelSperle" target='_blank'><button className='button-home'>Conheça meu Github.<IconArrow/></button></a>
            </div>
            <img className='img-home' src={imgMain} alt="" />
        </main>
    )
}