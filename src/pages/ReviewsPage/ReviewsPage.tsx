import ReviewsItem from 'components/ReviewsSection/ReviewsItem'
import './ReviewsPage.scss'
import '../../components/ReviewsSection/ReviewsSection.scss'
import React, { useState } from 'react'
import reviewsArray, {
    ReviewsArrayProps,
} from 'components/ReviewsSection/reviewsArray'

type Props = {}

const ReviewsPage = (props: Props) => {
    const [reviews, setReviews] = useState<ReviewsArrayProps[]>(reviewsArray)
    const [newReview, setNewReview] = useState<ReviewsArrayProps>({
        name: '',
        text: '',
    })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: ReviewsArrayProps) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: ReviewsArrayProps) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState: ReviewsArrayProps[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }
    return (
        <>
            <section className="reviews-page">
                <div className="container">
                    <h2 className="reviews__title">Reviews</h2>
                    <div className="reviews-page__items">
                        {reviews.map(
                            ({ id, name, text }: ReviewsArrayProps) => (
                                <div className="reviews-page__item" key={id}>
                                    <ReviewsItem
                                        id={id}
                                        name={name}
                                        text={text}
                                    />
                                </div>
                            )
                        )}
                    </div>

                    <form className="reviews__form" onSubmit={onSend}>
                        <h3 className="reviews__form-title">
                            Please leave review
                        </h3>
                        <div>
                            <label
                                className="reviews__form-label"
                                htmlFor="name"
                            >
                                Your Name
                            </label>{' '}
                            <br />
                            <input
                                className="reviews__form-input"
                                type="text"
                                onChange={handleChangeName}
                                value={newReview.name}
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label
                                className="reviews__form-label"
                                htmlFor="text"
                            >
                                Your review
                            </label>{' '}
                            <br />
                            <textarea
                                className="reviews__form-textarea"
                                onChange={handleChangeText}
                                value={newReview.text}
                                placeholder="Your review"
                            />
                        </div>
                        <button
                            className="reviews__form-button reviews__button button"
                            type="submit"
                        >
                            Leave review
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ReviewsPage
