import React, { Component } from 'react'
import Slider from 'react-slick'
import ReviewsItem, { reviewsProps } from './ReviewsItem'
import reviewsArray from './reviewsArray'
import './ReviewsSection.scss'
import { Link } from 'react-router-dom'

export type ReviewsArray = {
    reviewsArray: []
    review: []
    onSend: () => void
    amountToShow: number
}

export default class ReviewsSlider extends Component {
    state = {
        review: reviewsArray,
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            slide: 'reviews__items',
            className: 'reviews__item',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        }

        return (
            <section className="reviews">
                <div className="container">
                    <h2 className="reviews__title"> Reviews </h2>
                    <div className="reviews__items">
                        <Slider {...settings}>
                            {this.state.review.map(
                                ({ id, name, text }: reviewsProps) => (
                                    <div className="reviews__item" key={id}>
                                        <ReviewsItem
                                            id={id}
                                            name={name}
                                            text={text}
                                        />
                                    </div>
                                )
                            )}
                        </Slider>
                    </div>
                    <Link to="/reviewsPage" className="reviews__button button">
                        Leave review
                    </Link>
                    <div className="reviews__content">
                        <div className="reviews__commas">"</div>
                        <div className="reviews__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                        </div>
                        <div className="reviews__caption">Lorem Ipsum</div>
                    </div>
                </div>
            </section>
        )
    }
}
