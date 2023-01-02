import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderMenu.scss'

type Props = {
    getClassActive: () => void

    menuActive: boolean
}

const HeaderMenu = ({ menuActive, getClassActive }: Props) => {
    const [openSubmenu, setOpenSubmenu] = useState<boolean>(false)

    return (
        <>
            <nav
                className={menuActive ? 'header__menu active' : 'header__menu'}
                onClick={() => getClassActive()}
            >
                <ul
                    className="header__list"
                    onClick={(e) => e.stopPropagation()}
                >
                    <li className="header__item">
                        <NavLink className="header__link" to="/">
                            Home
                        </NavLink>
                    </li>

                    <li className="header__item  header__item_submenu">
                        <NavLink
                            to="/ourStories"
                            className="header__link"
                            onClick={() => setOpenSubmenu(!openSubmenu)}
                        >
                            Our Stories
                            <span
                                className={
                                    openSubmenu && menuActive
                                        ? 'arrow active'
                                        : 'arrow'
                                }
                                onClick={() => setOpenSubmenu(!openSubmenu)}
                            ></span>
                        </NavLink>
                        <ul
                            className={
                                openSubmenu && menuActive
                                    ? 'header__sublist active'
                                    : 'header__sublist'
                            }
                        >
                            <li className="sublist-header__item">
                                <NavLink
                                    to="/himalayas"
                                    className="sublist-header__link"
                                >
                                    Himalayas
                                </NavLink>
                            </li>
                            <li className="sublist-header__item">
                                <NavLink
                                    to="/alps"
                                    className="sublist-header__link"
                                >
                                    Alps
                                </NavLink>
                            </li>
                            <li className="sublist-header__item">
                                <NavLink
                                    to="/tatry"
                                    className="sublist-header__link"
                                >
                                    Tatry
                                </NavLink>
                            </li>
                            <li className="sublist-header__item">
                                <NavLink
                                    to="/tahtali"
                                    className="sublist-header__link"
                                >
                                    Tahtali
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="header__item">
                        <NavLink to="/contactsUs" className="header__link">
                            Contact US
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default HeaderMenu
