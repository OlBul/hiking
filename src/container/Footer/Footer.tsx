import './Footer.scss'
import '../../components/HikingSection/HikingSection.scss'

import {
    FacebookIcons,
    InstagramIcons,
    TwitterIcons,
    WhatsAppIcons,
} from 'components/Icons/Icons'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="footer__columns">
                        <div className="footer__column">
                            <div className="column-footer__title">
                                Title Here
                            </div>
                            <div className="column-footer__text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aliquam at dignissim nunc, id
                                maximus ex. Etiam nec dignissim elit, at
                                dignissim enim.{' '}
                            </div>
                            <div className="column-footer__icons">
                                <a
                                    className="icon-item"
                                    href="http://instagram.com"
                                    target="blank"
                                >
                                    <InstagramIcons />
                                </a>
                                <a
                                    className="icon-item"
                                    href="http://facebook.com"
                                    target="blank"
                                >
                                    <FacebookIcons />
                                </a>
                                <a
                                    className="icon-item"
                                    href="http://twitter.com"
                                    target="blank"
                                >
                                    <TwitterIcons />
                                </a>
                                <a
                                    className="icon-item"
                                    href="http://whatsapp.com"
                                    target="blank"
                                >
                                    <WhatsAppIcons />
                                </a>
                            </div>
                        </div>
                        <div className="footer__column">
                            <div className="column-footer__title">About</div>
                            <ul className="column-footer__list">
                                <li className="column-footer__item">
                                    <a
                                        href="#a"
                                        className="column-footer__link"
                                    >
                                        History
                                    </a>
                                </li>
                                <li className="column-footer__item">
                                    <a
                                        href="#a"
                                        className="column-footer__link"
                                    >
                                        Our Team
                                    </a>
                                </li>

                                <li className="column-footer__item">
                                    <a
                                        href="#a"
                                        className="column-footer__link"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <div className="column-footer__title">Services</div>
                            <ul className="column-footer__list">
                                <li className="column-footer__item">
                                    <a
                                        href="#b"
                                        className="column-footer__link"
                                    >
                                        How to Order
                                    </a>
                                </li>
                                <li className="column-footer__item">
                                    <a
                                        href="#b"
                                        className="column-footer__link"
                                    >
                                        Our Product
                                    </a>
                                </li>
                                <li className="column-footer__item">
                                    <a
                                        href="#b"
                                        className="column-footer__link"
                                    >
                                        {' '}
                                        Order Status
                                    </a>
                                </li>
                                <li className="column-footer__item">
                                    <a
                                        href="#b"
                                        className="column-footer__link"
                                    >
                                        {' '}
                                        Promo
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <div className="column-footer__title">Other</div>
                            <ul className="column-footer__list">
                                <li className="column-footer__item">
                                    <a
                                        href="#c"
                                        className="column-footer__link"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li className="column-footer__item">
                                    <a
                                        href="#c"
                                        className="column-footer__link"
                                    >
                                        Help
                                    </a>
                                </li>
                                <li className="column-footer__item">
                                    <a
                                        href="#c"
                                        className="column-footer__link"
                                    >
                                        Privacy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
