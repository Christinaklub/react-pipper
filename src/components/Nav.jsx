import { Button } from "./button";
import { HomeIcon } from "../imgComponents/homeIcon";

export function Nav() {
    return(
        <div className="nav">
            <div className="logo" >
                <img className="logo-img" src="img/twitter.svg" alt="pip-logo"></img>
                <h1>Pipper</h1>
            </div>
            <ul className="nav-bar">
                <a href="#"> <HomeIcon color={'black'}/> Forside</a>
                <a href="#"><img src="images/search.svg" alt="home"></img>Udforsk</a>
                <a href="#"><img src="images/bell.svg" alt="home"></img>Meddelelser </a>
                <a href="#"><img src="images/mail.svg" alt="home"></img>Beskeder</a>
                <a href="#"><img src="images/file-text.svg" alt="home"></img>Lister</a>
                <a href="#"><img src="images/x.svg" alt="home"></img>Verificeret</a>
                <a href="#"><img src="images/user.svg" alt="home"></img>Profil</a>
                <a href="#"><img src="images/more-horizontal.svg" alt="home"></img>Mere</a>
            </ul>
               {/* start pip window */}

    <Button></Button>
        </div>
    )
}