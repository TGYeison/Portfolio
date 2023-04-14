import { useState } from 'react';

/**
 * Conponents
 */
import Icon from '../../atomics/icon/icon.atomic';
import Navar from '../../molecules/navar/navar.molecule';
import Profile from '../../molecules/profile/profile.molecules';
/**
 * Assets
 */
import logo from '../../../assets/images/logo.png';
import IconLinkedin from '../../../assets/icons/icon_linkedin';
import IconGithub from '../../../assets/icons/icon_github';
import IconClose from '../../../assets/icons/icon_close';
import IconNavBurger from '../../../assets/icons/icon_nav_burger';

const navarLinks = [
    {
        text: 'Sobre mi',
        link: '#',
    },
    {
        text: 'Habilidades',
        link: '#',
    },
    {
        text: 'Proyectos',
        link: '#',
    },
    {
        text: 'Contacto',
        link: '#',
    },
]


const Header = () => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <header>
            <button 
                type="button" 
                className="header__btn-mobile"
                onClick={()=>setVisible(!visible)}>
                <Icon height={24} width={24}>
                    {visible
                        ? <IconClose/>
                        : <IconNavBurger/>
                    }
                </Icon> 
            </button>
            <div className={`header__content ${visible ? 'header__active' : ''}`}>
                <div className="header__profile">
                    <Profile
                        link='#'
                        image={logo}
                        title='Yeison Quiroga'
                        description='Developer'
                    />
                </div>
                <nav className="header__nav">
                    <Navar
                        items={navarLinks}
                    />
                </nav>
                <div className="header__social">
                    <a 
                        target="_blank"
                        className="social__btn" 
                        href='https://www.linkedin.com/in/yeison-giovany-quiroga-basto-94397b18a'
                    >
                        <Icon height={24} width={24}>
                            <IconLinkedin/>
                        </Icon>     
                    </a>        
                    <a 
                        target="_blank"
                        className="social__btn" 
                        href='https://github.com/TGYeison'
                    >
                        <Icon height={24} width={24}>
                            <IconGithub/>
                        </Icon>
                    </a>             
                </div>
            </div>
            
        </header>
    );
}

export default Header;