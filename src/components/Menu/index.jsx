import { useState } from 'react';
import { menuOptions } from './data';
import logo_paroquia from './../../assets/logo_paroquia.png';
import { Outlet, Link } from 'react-router-dom';
import {
  MenuBar,
  LogoDetails,
  LogoName,
  LogoImage,
  NavList,
  NavItem,
  ProfileInfo,
  ProfileDetails,
  Name,
  Email,
  HomeSection,
} from './styles.d.js';

export const Menu = () => {
    const [appear, setAppear] = useState(false);

    return (
      <>
        <MenuBar show={appear}>
          <LogoDetails onClick={() => appear ? setAppear(false) : setAppear(true)}>
            <LogoName show={appear}>Scheduler</LogoName>
            <i className={appear ? 'bx bx-x' : 'bx bx-menu'}></i>
          </LogoDetails>

          <LogoImage src={logo_paroquia} show={appear} />

          <NavList>
            {menuOptions.map(({dest, icon, desc}) => <NavItem key={desc}>
              <Link to={dest}>
                <i className={icon} />
                <span>{desc}</span>
              </Link>
            </NavItem>)}

            <ProfileInfo show={appear}>
              <ProfileDetails>
                <div>
                  <Name>Rodrigo M. Ribeiro</Name>
                  <Email>rodrigomarqribeiro@gmail.com</Email>
                </div>
              </ProfileDetails>
              <i className='bx bx-log-out' />
            </ProfileInfo>
          </NavList>
        </MenuBar>

        <HomeSection show={appear}>
          <Outlet />
        </HomeSection>
      </>
    );
};