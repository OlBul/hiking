import {
    FacebookIcons,
    InstagramIcons,
    TwitterIcons,
    WhatsAppIcons,
} from 'components/Icons/Icons'
import './ContactsUs.scss'
import '../../container/Footer/Footer.scss'

type Props = {}

const ContactsUs = (props: Props) => {
    return (
        <>
            <section className="contacts">
                <div className="container">
                    <h1 className="contacts__title">Contacts</h1>
                    <div className="contacts__content">
                        <div className="contact__address">
                            <div className="contact__location">
                                <p>
                                    Maxim Gorky Central Park for Culture and
                                    Recreation Sumska St, 81{' '}
                                </p>
                                <p>61000</p>
                                <p>Kharkiv Oblast</p>
                                <p>Kharkiv</p>
                                <p>Ukraine</p>
                            </div>

                            <div>
                                Phone:{' '}
                                <a
                                    href="tel:+30977778899"
                                    className="contact__number"
                                >
                                    +3(097)-777-88-99
                                </a>
                            </div>
                            <div className="">
                                {' '}
                                E-mail:{' '}
                                <a
                                    href="email:hiking_world@gmail.com"
                                    className="contact__email"
                                >
                                    hiking_world@gmail.com
                                </a>
                            </div>
                            <div className="column-contacts__icons">
                                <a
                                    href="http://instagram.com"
                                    className="icon-item"
                                >
                                    <InstagramIcons />
                                </a>
                                <a
                                    href="http://facebook.com"
                                    className="icon-item"
                                >
                                    <FacebookIcons />
                                </a>
                                <a
                                    href="http://twitter.com"
                                    className="icon-item"
                                >
                                    <TwitterIcons />
                                </a>
                                <a
                                    href="http://whatsapp.com"
                                    className="icon-item"
                                >
                                    <WhatsAppIcons style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                        <div className="contact__map">
                            <iframe
                                className="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164153.23443639991!2d36.2858247!3d49.99459135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1000e0da5b9%3A0x7bc3ddab9336dd55!2sMaxim%20Gorky%20Central%20Park%20for%20Culture%20and%20Recreation!5e0!3m2!1sen!2spl!4v1663790270695!5m2!1sen!2spl"
                                title="address"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactsUs
