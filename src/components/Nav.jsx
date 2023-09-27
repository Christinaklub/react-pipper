import { Button } from "./button";
import { BadgeCheck, Home, List, MessageCircle, MoreHorizontal, Search, Twitter, User } from "lucide-react";

export function Nav() {
    return(
        <div className="nav">
            <div className="logo" >
                <Twitter className="main-logo" size={40}/>
                <h1>Pipper</h1>
            </div>
            <ul className="nav-bar">
                <a href="#"><Home className="icon-nav"/> Forside</a>
                <a href="#"><Search className="icon-nav"/> Udforsk</a>
                <a href="#"><MessageCircle className="icon-nav"/> Meddelelser </a>
                <a href="#"><List className="icon-nav" /> Lister</a>
                <a href="#"><BadgeCheck className="icon-nav" /> Verificeret</a>
                <a href="#"><User className="icon-nav" /> Profil</a>
                <a href="#"><MoreHorizontal className="icon-nav" /> Mere</a>
            </ul>
               {/* start pip window */}
        </div>
    )
}