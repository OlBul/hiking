import ContactsUs from 'pages/ContactsUs/ContactsUs'
import HomePage from 'pages/HomePage/HomePage'
import Alps from 'pages/OurStory/OurStoryCategory/Alps'
import Himalayas from 'pages/OurStory/OurStoryCategory/Himalayas'
import Tahtali from 'pages/OurStory/OurStoryCategory/Tahtali'
import Tatry from 'pages/OurStory/OurStoryCategory/Tatry'
import OurStoriesList from 'pages/OurStory/OurStoriesList'
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage'
import { Routes, Route } from 'react-router-dom'
import OrderPage from 'pages/OrderPage/OrderPage'
import OurStory from 'pages/OurStory/OurStory'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="ourStories" element={<OurStoriesList />} />
                    <Route path="himalayas" element={<Himalayas />} />
                    <Route path="alps" element={<Alps />} />
                    <Route path="tatry" element={<Tatry />} />
                    <Route path="tahtali" element={<Tahtali />} />
                    <Route path="contactsUs" element={<ContactsUs />} />
                    <Route path="reviewsPage" element={<ReviewsPage />} />
                    <Route path="checkout" element={<OrderPage />} />
                    <Route path="ourStories/:id" element={<OurStory />} />
                </Routes>
            </main>
        </>
    )
}

export default Main
