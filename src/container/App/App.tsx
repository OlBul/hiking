import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { useAppDispatch } from 'redux/hooks'
import { useEffect } from 'react'
import { fetchOurStories } from 'redux/ourStoriesReducer'

type Props = {}

const App = (props: Props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchOurStories())
    }, [dispatch])

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App
