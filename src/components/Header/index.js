import React, {useContext} from 'react';
import './style.scss';
import logoAcessaBr from '../../images/logo-acessaBR.svg';
import logoEbac from '../../images/logo-ebac.svg';
import { LocationContext } from '../../contexts/LocationContext';

const Header = () => {
    const { city, state } = useContext(LocationContext);
    return(
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={logoAcessaBr} alt="Logo AcessaBR" />
                <span className="header__city">
                     / {city} - {state}
                </span>
            </div>
            <div className="header__logo--ebac">
                <span className="header__span">
                    Apoio:  
                </span>
                <img src={logoEbac} alt="Logo EBAC" />
            </div>
        </header>
    )
}

export default Header;