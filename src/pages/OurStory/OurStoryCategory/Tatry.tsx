import { OurStoryProps } from '../ourStoryArray'
import OurStoriesItem from '../OurStoriesItem'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const Tatry = (props: Props) => {
    const ourStoriesArray = useAppSelector((state) => state.ourStories)
    return (
        <>
            <section className="story">
                <div className="container">
                    <h1 className="story__title">Our Stories</h1>
                    <div className="story__list">
                        {ourStoriesArray
                            .filter(
                                ({ category }: OurStoryProps) =>
                                    category === 'tatry'
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tatry
