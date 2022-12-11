import { Link } from 'react-router-dom'
import './TimeSection.scss'

type Props = {}

const TimeSection = (props: Props) => {
    return (
        <section className="time">
            <div className="container">
                <div className="time__columns">
                    <div className="time__content">
                        <div className="content-time__title">
                            IT´S TIME FOR HIKING
                        </div>
                        <div className="content-time__subtitle">
                            LOREMIPSUM DOLOR
                        </div>
                        <Link
                            to="/checkout"
                            className="content-time__button button"
                        >
                            READ MORE
                        </Link>
                        <div className="content-time__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do iusmod tempor incididunt ut labore et
                            dolore magna.
                        </div>
                    </div>
                    <div className="time__content"></div>
                </div>
            </div>
        </section>
    )
}

export default TimeSection
