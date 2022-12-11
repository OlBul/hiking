import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import './OrderPage.scss'

type Props = {}

const OrderPage = (props: Props) => {
    const validationSchema = yup.object().shape({
        firstName: yup.string().typeError('Wrong name').required('Necessarily'),
        lastName: yup.string().typeError('Wrong name').required('Necessarily'),
        phone: yup
            .number()
            .typeError('Enter correct number phone')
            .required('Necessarily'),
        email: yup
            .string()
            .email('Enter correct email')
            .required('Necessarily'),
    })

    const formOrder = () => {
        return (
            <main className="order">
                <div className="container">
                    <h2 className="order__title">
                        We will contact you shortly
                    </h2>
                    <div className="order__content">
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                phone: '',
                                email: '',
                                question: '',
                            }}
                            validateOnBlur
                            onSubmit={(values, { resetForm }) => {
                                axios.post(
                                    'https://my-json-server.typicode.com/OlBul/articales-json',
                                    {
                                        firstName: values.firstName,
                                        lastName: values.lastName,
                                        email: values.email,
                                        question: values.question,
                                    }
                                )
                                setIsSendMassege(true)

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
                                <div className="order__form">
                                    <div className="order__item">
                                        <label
                                            htmlFor="firstName"
                                            className="order__label"
                                        >
                                            Your Name
                                        </label>
                                        <br />
                                        <input
                                            className="order__input"
                                            type="text"
                                            name="firstName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                            placeholder="Your name"
                                        />
                                        {touched.firstName &&
                                            errors.firstName && (
                                                <p className="order__error">
                                                    {errors.firstName}
                                                </p>
                                            )}
                                    </div>

                                    <div className="order__item">
                                        <label
                                            htmlFor="lastName"
                                            className="order__label"
                                        >
                                            Your Last Name
                                        </label>
                                        <br />
                                        <input
                                            className="order__input"
                                            name="lastName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                            placeholder="Your Last Name"
                                        />
                                        {touched.lastName &&
                                            errors.lastName && (
                                                <p className="order__error">
                                                    {errors.lastName}
                                                </p>
                                            )}
                                    </div>

                                    <div className="order__item">
                                        <label
                                            htmlFor="phone"
                                            className="order__label"
                                        >
                                            Your phone
                                        </label>
                                        <br />
                                        <input
                                            className="order__input"
                                            type="tel"
                                            name="phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}
                                            placeholder="Your phone"
                                        />
                                        {touched.email && errors.email && (
                                            <p className="order__error">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    <div className="order__item">
                                        <label
                                            htmlFor="email"
                                            className="order__label"
                                        >
                                            Your email
                                        </label>
                                        <br />
                                        <input
                                            className="order__input"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder="Your email"
                                        />
                                        {touched.email && errors.email && (
                                            <p className="order__error">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div className="order__item">
                                        <label
                                            className="order__label"
                                            htmlFor="question"
                                        >
                                            Your question
                                        </label>{' '}
                                        <br />
                                        <textarea
                                            className="order__form-textarea"
                                            name="question"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.question}
                                            placeholder="Your question"
                                            
                                        />
                                    </div>
                                    <button
                                        className="order__button button"
                                        type="submit"
                                        disabled={!isValid && !dirty}
                                        onClick={() => {
                                            handleSubmit()
                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>
            </main>
        )
    }

    const [isSendMassege, setIsSendMassege] = useState<boolean>(false)
    const renderMassege = () => {
        return (
            <div className="order__answer">
                <p className="order__answer-title">Thank you!</p>
                <p className="order__answer-text">
                    We will contact you within 24 hours!
                </p>
            </div>
        )
    }

    return <>{isSendMassege ? renderMassege() : formOrder()}</>
}

export default OrderPage
