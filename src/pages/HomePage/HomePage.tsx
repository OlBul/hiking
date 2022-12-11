import ArticalesList from 'components/ArticalesSection/ArticalesList'
import TimeSection from 'components/TimeSection/TimeSection'
import DiscountSection from 'components/DiscountSection/DiscountSection'
import HikingSection from 'components/HikingSection/HikingSection'
import ExploreSection from 'components/ExploreSection/ExploreSection'
import TitleSection from 'components/TitleSection/TitleSection'
import ReviewsSlider from 'components/ReviewsSection/ReviewsSlider'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <>
            {' '}
            <TimeSection />
            <ArticalesList />
            <DiscountSection />
            <HikingSection />
            <ExploreSection />
            <ReviewsSlider />
            <TitleSection />
        </>
    )
}

export default HomePage
