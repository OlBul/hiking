import { Link } from 'react-router-dom'
import discount_1 from '../../assets/image/discount_1.jpg'
import discount_2 from '../../assets/image/discount_2.jpg'
import './DiacountSection.scss'

type Props = {}

const DiscountSection = (props: Props) => {
    return (
        <>
            <section className="discount">
                <div className="discount__list">
                    <div className="discount__item discount__item_img _item-big">
                        <img src={discount_1} alt="people" />
                    </div>
                    <div className="discount__item discount__item_big">
                        <div className="discount__item_title">
                            Discount up to 50% All Excursions
                        </div>
                        <div className="discount__item_text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                        </div>
                        <Link
                            to="/checkout"
                            className=" discount__item_button discount__item_button_big button"
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="discount__item discount__item_small">
                        <div className="discount__item_title discount__item-title_small">
                            January’s Promo: Buy 1 Get 1 Free!
                        </div>
                        <div className="discount__item_text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                        </div>
                        <Link
                            to="/checkout"
                            className=" discount__item_button discount__item_button_small button"
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="discount__item discount__item_img _item-small">
                        <img src={discount_2} alt="people" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DiscountSection
