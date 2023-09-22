
import { GlobalTypes } from '../../../interface/GlobalTypes';


export default function About(props: GlobalTypes){
    return (
        <section id="section-about">
            <div className="container-about">
                <h2 className='title-about'>{props.title}</h2>
                <div className='container-about-information'>
                     <div className='container-text-information'>
                        <p>
                            Sou estudante de TI, tenho 16 anos, estou focado no Desenvolvimento Front-End, eu vivo no Rio de Janeiro
                            e atualmente estou no 2° ano do Ensino médio.
                        </p>

                        <p>
                            Meu interesse e primeiro contato com TI em si 
                            começou em abril de 2022, vendo vídeos aleatorios no youtube e 
                            me deparei com um vídeo sobre programação.
                        </p>

                        <p>
                            Estou estudando e desenvolvendo projetos Web, Mobile, para que eu possa
                            cada vez mais aprender com meus erros e criar uma maturidade e conhecimento
                            suficiente para desenvolver projetos ainda mais complexos.
                        </p>
                     </div>
                </div>
            </div>
        </section>
    )
}