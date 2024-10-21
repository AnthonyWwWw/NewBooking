import { styled } from 'styled-components';

export const HeaderBox = styled.header`
    position: relative;
`;

export const HeaderContent = styled.div`
    max-width: 1180px;
    display: flex;
    align-items: center;
`;

export const HeaderNav = styled.nav`
    flex: 1;
`;

export const MenuItem = styled.li`
     margin-left: 40px;
`;

export const MenuList = styled.ul`
    background-color: #FFFFFF;

    @media (min-width: 850px) {
        display: flex; 
    }
`;

export const HeaderUserInterface = styled.div`
    display: flex;

    @media (min-width: 850px) {
        display: flex;
        align-items: center;
    }
`;

export const CurrencySelectionButton =styled.div`
    margin-right: 30px;
`

export const LanguageSelectionButton = styled.div`
    margin-right: 30px;
`

export const UserMenuToggle = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`

export const HeaderTopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #FFFFFF;
    padding: 0 16px;

    @media (min-width: 850px) {
        display: none;
    }
`;

export const MenuButton = styled.nav`
    width: 32px;
`;

export const Logo = styled.h2`
    font-weight: 700;
    font-size: 32px;
    color: #2A90D9;
`;

export const IconUser = styled.img`
    width: 32px;
    height: 32px;
`;

export const BurgerMenu = styled.span`
    display: block;
    width: 32px;
    height: 2px;
    background-color: #333;
    position: relative;

    &::before, &::after {
        content: '';
        display: block;
        width: 32px;
        height: 2px;
        background-color: #333;
        position: absolute;
    }

    &::before {
        top: -10px;
    }

    &::after {
        bottom: -10px;
    }
`;

export const HeaderLogo = () => (
    <h2 style={{
        fontWeight: 700,
        fontSize: '32px',
        color: '#2A90D9'
    }}>
        Your
        <span style={{ color: '#EE685F' }}>.logo</span></h2>
);