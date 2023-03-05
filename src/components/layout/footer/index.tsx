import { IconGithub } from "../../svg/Githubicon"

export default function Footer(){
    return (
        <footer className="section-footer">
            <div className="container-all-information-footer">
                <div className="container-only-name">
                    <p>© 2023</p>
                    <a href="https://www.instagram.com/miguelsperlee/" target='_blank'><p className="name-footer">Miguel Sperle</p></a>
                </div>
                <a  href="https://github.com/MiguelSperle" target='_blank'><IconGithub /></a>
            </div>
        </footer>
    )
}