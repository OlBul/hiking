import { OurStoryProps } from './ourStoryArray'
import './OurStories.scss'
import '../../components/ArticalesSection/ArticalesList.scss'
import OurStoriesItem from './OurStoriesItem'
import { useState } from 'react'
import { useAppSelector } from 'redux/hooks'

const OurStoriesList = () => {
    const [valueOurStory, setValueOurStory] = useState<string>('')
    const [page, setPage] = useState(1)

    const ourStoriesArray = useAppSelector((state) => state.ourStories)

    return (
        <>
            <section className="story">
                <div className="container story__container">
                    <h1 className="story__title">Our Stories</h1>
                    <form className="form__story">
                        <input
                            value={valueOurStory}
                            type="text"
                            placeholder="Search..."
                            className="search__story"
                            onChange={(e) => setValueOurStory(e.target.value)}
                        />
                    </form>
                    <div className="story__list">
                        {ourStoriesArray
                            .filter((obj) =>
                                obj.title
                                    .toLowerCase()
                                    .includes(valueOurStory.toLowerCase())
                            )
                            .map(
                                ({
                                    id,
                                    title,
                                    photo1,
                                    paragraph,
                                    category,
                                }: OurStoryProps) => (
                                    <div className="story__item" key={id}>
                                        <OurStoriesItem
                                            id={id}
                                            title={title}
                                            photo1={photo1}
                                            paragraph={paragraph}
                                            category={category}
                                        />
                                    </div>
                                )
                            )}
                        <div className="story__pagination">
                            <ul className="pagination">
                                {[...Array(5)].map((_, i) => (
                                    <li
                                        key={i}
                                        onClick={() => setPage(i + 1)}
                                        className={
                                            page === i + 1 ? 'active' : ''
                                        }
                                    >
                                        {i + 1}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStoriesList
