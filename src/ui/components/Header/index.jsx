import { useDispatch, useSelector } from 'react-redux';
import { toggleBurgerMenu } from '../../../core/redux/toggleBurgerMenuSlice';
import {
    HeaderBox,
    HeaderContent,
    HeaderTopBar,
    MenuButton,
    Logo,
    BurgerMenu,
    MenuList,
    MenuItem,
    HeaderNav,
    HeaderUserInterface,
    HeaderLogo,
    CurrencySelectionButton,
    LanguageSelectionButton,
    UserMenuToggle,
} from './components';

export default function Header() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.toggleBurgerMenu);
    const isMobile = useSelector((state) => state.windowSize);

    const toggleMenu = () => {
        dispatch(toggleBurgerMenu(!isOpen));
    };

    // const expandedHeader = () => ({
    //     height: isOpen ? '100vh' : '39px',
    //     transition: 'height 0.5s ease',
    //     zIndex: 1,
    //     backgroundColor: "#FFFFFF",
    //     position: "absolute",
    //     width: '100%',
    // });

    return (
        <HeaderBox>
            <HeaderContent>
                {isMobile > 850 ? (
                    <>
                        <HeaderLogo />
                        <HeaderNav>
                            <MenuList>
                                <MenuItem>Last Minute Deals</MenuItem>
                                <MenuItem>Blog</MenuItem>
                                <MenuItem>About us</MenuItem>
                                <MenuItem>Contacts</MenuItem>
                            </MenuList>
                        </HeaderNav>
                        <HeaderUserInterface>
                            <CurrencySelectionButton href="">
                                <img src={new URL('../../img/svg/icon_money.svg', import.meta.url).href} alt="" />
                            </CurrencySelectionButton>
                            <LanguageSelectionButton>
                                <img src={new URL('../../img/svg/icon_language.svg', import.meta.url).href} alt="" />
                            </LanguageSelectionButton>
                            <UserMenuToggle>
                                <img src={new URL('../../img/svg/icon_user.svg', import.meta.url).href} alt="" />
                            </UserMenuToggle>
                        </HeaderUserInterface>
                    </>
                ) : (
                    <>
                        <HeaderTopBar>
                            <MenuButton onClick={toggleMenu}>
                                <BurgerMenu />
                            </MenuButton>
                            <Logo>Your<span>.logo</span></Logo>
                        </HeaderTopBar>
                        {isOpen && (
                            <MenuList>
                                <MenuItem>Last Minute Deals</MenuItem>
                                <MenuItem>Blog</MenuItem>
                                <MenuItem>About us</MenuItem>
                                <MenuItem>Contacts</MenuItem>
                            </MenuList>
                        )}
                    </>
                )}
            </HeaderContent>
        </HeaderBox>
    );
};

