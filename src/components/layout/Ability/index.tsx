import FirstImg from '../../../assets/img/javascript.svg';
import SecondImg from '../../../assets/img/typescript.svg';
import ThirdImg from '../../../assets/img/nextJS.svg';
import FourthImg from '../../../assets/img/reactnative.svg';
import FifthImg from '../../../assets/img/prisma.svg';
import SixthImg from '../../../assets/img/nodeJS.svg'
import SeventhImg from '../../../assets/img/fastify.png'
import { GlobalTypes } from '../../../interface/GlobalTypes';

export default function Habilidade(props: GlobalTypes){
    return (
        <section id="section-skills">
           <div className="container-skills">
              <h2>{props.title}</h2>
              <div className='container-skills-grid'>
                <div className='container-tech'>
                    <img src={FirstImg} alt="" />
                    <p>{props.firstTech}</p>
                </div>

                <div className='container-tech'>
                    <img src={SecondImg} alt="" />
                    <p>{props.secondTech}</p>
                </div>

                <div className='container-tech'>
                    <img src={ThirdImg} alt="" />
                    <p>{props.thirdTech}</p>
                </div>

                <div className='container-tech'>
                    <img src={FourthImg} alt="" />
                    <p>{props.fourthTech}</p>
                </div>
              </div>
           </div>
        </section>
    )
}