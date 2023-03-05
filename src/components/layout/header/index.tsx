import { useState } from "react";
import { GlobalTypes } from "../../../interface/GlobalTypes";
import { IconBurguer } from "../../svg/Burgericon";
import { IconClose } from "../../svg/Closeicon";
import MenuMobile from "../headerMobile"; // componente do menu mobile



export default function Header(props: GlobalTypes){ 

    const [open, setOpen] = useState(false)

    function showMenu(){
        setOpen(!open)
    }

    return (
     <>
     <header id="container-header">
        <h1>{props.name}</h1>
         <nav className="navbar">
            <ul>
                <li><a href="#container-header">início</a></li>
                <li><a href="#section-about">Sobre</a></li>
                <li><a href="#section-skills">Habilidades</a></li>
                <li><a href="#section-project">Projetos</a></li>
            </ul>
         </nav>
         <button className="button-menu-mobile" onClick={showMenu}>{open ? <IconClose/> : <IconBurguer/>}</button>
     </header>
     {open && <MenuMobile setOpen={setOpen} />} {/*como eu passei a tipagem de props no menu mobile, aqui eu tenho que colocar obrigatoriamente o setOpen={setOpen}*/}
     </>
    )
}

