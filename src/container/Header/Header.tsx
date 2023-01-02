import { useState } from 'react'
import './Header.scss'
import './../../components/HeaderMenu/HeaderMenu.scss'
import logo from '../../assets/image/logo.jpg'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import { SearchForm } from 'components/FormSections/Forms'

const Header = () => {
    const [menuActive, setMenuActive] = useState<boolean>(false)

    const getClassActive = () => {
        setMenuActive(!menuActive)
        !menuActive
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'visible')
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <div className="header__logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div
                            className={
                                menuActive
                                    ? 'header__burger active'
                                    : 'header__burger'
                            }
                            onClick={() => {
                                getClassActive()
                            }}
                        >
                            <span></span>
                        </div>
                        <HeaderMenu
                            menuActive={menuActive}
                            getClassActive={getClassActive}
                        />
                        <SearchForm />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
