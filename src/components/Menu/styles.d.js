import styled from "styled-components";

export const MenuBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  padding: 6px 14px;
  z-index: 99;
  width: ${ props => props.show ? '250':'78' }px;
  transition: all 0.5s ease;
  border-radius: 0 20px 0 0;
  background: blue;

  span {
  ${ props => !props.show ? (`
     opacity: 0;
  `) : (`
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 1;
    pointer-events: none;
    transition: 0.6s;
  `)}

    @media (max-width: 700px) {
      display: none;
    }
  }

  i {
    color: var(--white-default);
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
  }

  @media (max-width: 700px) {
    left: 0;
    width: 100vw;
    top: initial;
    bottom: 0;
    padding: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    border-radius: 20px 20px 0 0;
    align-items: flex-end
  }
`;

export const LogoDetails = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;

  i {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const LogoName = styled.div`
  color: var(--white-default);
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: 0;

  ${ props => props.show && (`
    margin-left: 50px;
    opacity: 1;
  `)}
`;

export const LogoImage = styled.img`
  width: 80%;
  margin: 15px auto 0;
  display: ${ props => props.show ? (`block`) : (`none`)};
  filter: contrast(0) brightness(0) invert(100%);

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  margin-top: 20px;
  height: 100%;

  @media (max-width: 700px) {
    display: flex;
  }
`;

export const NavItem = styled.li`
  position: relative;
  margin: 8px 0;
  list-style: none;

  a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: transparent;

    i {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      border-radius: 12px;
    }

    &:hover{
      background: #FFF;

      i, span {
        color: var(--blue-default);
      }
    }

    @media (max-width: 700px) {
      display: flex;
      width: 100%;
      font-weight: 500;
    }
  }

  @media (max-width: 700px) {
    margin: 8px 5px;
  }
`;

export const ProfileInfo = styled(NavItem)`
  position: fixed;
  height: 60px;
  width: ${ props => props.show ? ('250px') : ('78px')};
  left: 0;
  bottom: -8px;
  padding: 10px 14px;
  background: var(--blue-darker);
  transition: all 0.5s ease;
  overflow: hidden;

  i {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: var(--blue-darker);
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    transition: all 0.5s ease;

    ${ props => props.show && (`
      width: 50px;
      cursor: pointer;
      background: none;
    `)};
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

export const Name = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
`;

export const Email = styled(Name)`
  font-size: 12px;
`;

export const HomeSection = styled.div`
  top: 0;
  position: relative;
  background: #E4E9F7;
  min-height: 100vh;
  transition: all 0.5s ease;
  padding: 20px 20px 20px 40px;
  z-index: 2;

  ${ props => !props.show ? (`
    left: 50px;
    width: calc(100% - 50px);
  `) : (`
    left: 230px;
    width: calc(100% - 230px);
  `)};

  @media (max-width: 700px) {
    width: 100vw;
    padding-left: 20px;
    left: 0;
  }
`;
