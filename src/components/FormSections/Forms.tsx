import React, { useState } from 'react'
import './ReviewsForm.scss'
import { Formik } from 'formik'
import * as yup from 'yup'
import { SearchIcons } from 'components/Icons/Icons'
import '../../container/Header/Header.scss'
import '../../components/TitleSection/TitleSection.scss'
import reviewsArray, {
    ReviewsArrayProps,
} from 'components/ReviewsSection/reviewsArray'

type Props = {}

export const ReviewsForm = (props: Props) => {
    const validationSchema = yup.object().shape({
        title: yup.string().typeError('Wrong name').required('Necessarily'),
        text: yup.string().typeError('Wrong name').required('Necessarily'),
    })
    const [review, setReview] = useState<ReviewsArrayProps[]>(reviewsArray)
    const [newReview, setNewReview] = useState<ReviewsArrayProps>({
        name: '',
        text: '',
    })

    const onSend = () => {
        setReview((prevState: ReviewsArrayProps[]) => {
            return [...prevState, newReview]
        })
        setNewReview({
            name: '',
            text: '',
        })
    }

    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    text: '',
                }}
                validateOnBlur
                onSubmit={onSend}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                    handleSubmit,
                    dirty,
                }) => (
                    <div className="review__form">
                        <div className="review__form_name">
                            <label htmlFor="title" className="review__label">
                                Your Name
                            </label>
                            <br />
                            <input
                                className="review__input"
                                type="text"
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                                placeholder="Your name"
                            />
                            {touched.title && errors.title && (
                                <p className="review__error">{errors.title}</p>
                            )}
                        </div>
                        <div className="review__form_text">
                            <label htmlFor="text" className="review__label">
                                Your review
                            </label>
                            <br />
                            <textarea
                                className="review__input"
                                name="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.text}
                                placeholder="Leave your review"
                            />
                            {touched.text && errors.text && (
                                <p className="review__error">{errors.text}</p>
                            )}
                        </div>
                        <button
                            className="review__btn"
                            type="submit"
                            disabled={!isValid && !dirty}
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export const SearchForm = () => {
    const validationSchema = yup.object().shape({
        text: yup
            .string()
            .typeError('Nothing found for your request')
            .required('Necessarily'),
    })
    return (
        <>
            <Formik
                initialValues={{
                    text: '',
                }}
                validateOnBlur
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    resetForm()
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                    handleSubmit,
                    dirty,
                }) => (
                    <div className="header__form">
                        <input
                            className="header__search"
                            type="text"
                            placeholder="Search"
                            name="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.text}
                        />
                        <button
                            type="submit"
                            className="search-header__btn"
                            disabled={!isValid && !dirty}
                            onClick={() => handleSubmit()}
                        >
                            <SearchIcons />
                        </button>
                    </div>
                )}
            </Formik>
        </>
    )
}

export const TitleForm = () => {
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Enter correct email')
            .required('Necessarily'),
    })
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                }}
                validateOnBlur
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    resetForm()
                }}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                    handleSubmit,
                    dirty,
                }) => (
                    <div className="title__form">
                        <input
                            className="title__input"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Your email"
                        />
                        {touched.email && errors.email && (
                            <p className="title__error">{errors.email}</p>
                        )}
                        <button
                            className="title__btn"
                            type="submit"
                            disabled={!isValid && !dirty}
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                )}
            </Formik>
        </div>
    )
}
