import { MenuMobileType } from "../../../interface/GlobalTypes"; // importei a tipagem do setOpen (vai receber um valor BOOLEANO)

export default function MenuMobile(props: MenuMobileType){
    return (
        <nav className="navBar-container-mobile">
            <ul>
                <li><a onClick={() => props.setOpen(false)} href="#container-home">início</a></li> {/*Fechando o menu ao clicar*/}
                <li><a onClick={() => props.setOpen(false)} href="#section-about">Sobre</a></li>
                <li><a onClick={() => props.setOpen(false)} href="#section-skills">Habilidades</a></li>
                <li><a onClick={() => props.setOpen(false)} href="#section-project">Projetos</a></li>
            </ul>
        </nav>
    )
}