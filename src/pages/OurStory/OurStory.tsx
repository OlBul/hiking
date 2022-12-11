import { keys } from 'lodash'
import OurStories, {
    getOurStoriesObject,
    OurStoryProps,
} from 'pages/OurStory/ourStoryArray'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'

type Props = {
    OurStoriesObject?: {
        [id: number]: OurStoryProps
    }
}

type StoryProps = {
    [id: number]: number
}

const OurStory = ({
    OurStoriesObject = getOurStoriesObject(OurStories),
}: Props) => {
    const { id } = useParams()
    const [articaleInStories, setArticaleInStories] = useState<StoryProps>({
        1: 1,
    })
    console.log(setArticaleInStories)
    const isLikes = useAppSelector(
        (state) => state.likeState.isLike[parseInt(`${id}`)]
    )
    const disLikes = useAppSelector(
        (state) => state.likeState.disLike[parseInt(`${id}`)]
    )

    const addCountLike = useAppSelector((state) => state.likeState.countLike)

    const addCountDisLike = useAppSelector(
        (state) => state.likeState.countDisLike
    )
    const dispatch = useAppDispatch()

    return (
        <>
            <section className="story">
                <div className="container">
                    {keys(articaleInStories).map((StoryId) => (
                        <div className="story__content" key={StoryId}>
                            <h1 className="story__title">
                                {OurStoriesObject[parseInt(`${id}`)].title}
                            </h1>
                            <div className="story__articale">
                                <div className="story__photo">
                                    <img
                                        src={
                                            OurStoriesObject[parseInt(`${id}`)]
                                                .photo1
                                        }
                                        alt="mountains"
                                    />
                                </div>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph1
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph2
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph3
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph4
                                    }
                                </p>
                                <div className="story__photo">
                                    <img
                                        src={
                                            OurStoriesObject[parseInt(`${id}`)]
                                                .photo2
                                        }
                                        alt="mountains"
                                    />
                                </div>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph5
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph6
                                    }
                                </p>
                                <div className="story__photo">
                                    <img
                                        src={
                                            OurStoriesObject[parseInt(`${id}`)]
                                                .photo3
                                        }
                                        alt="mountains"
                                    />
                                </div>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph7
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph8
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph9
                                    }
                                </p>
                                <div className="story__photo">
                                    <img
                                        src={
                                            OurStoriesObject[parseInt(`${id}`)]
                                                .photo4
                                        }
                                        alt="mountains"
                                    />
                                </div>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph10
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph11
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph12
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph13
                                    }
                                </p>

                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph14
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph15
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph16
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph17
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph18
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph19
                                    }
                                </p>
                                <p className="story__text">
                                    {
                                        OurStoriesObject[parseInt(`${id}`)]
                                            .paragraph20
                                    }
                                </p>
                            </div>
                            <div className="story__likes">
                                <button
                                    disabled={!isLikes ? false : true}
                                    className="story__likes-count"
                                    onClick={() => {
                                        isLikes
                                            ? dispatch(removeLike(id))
                                            : dispatch(addLike(id))
                                    }}
                                >
                                    {isLikes ? (
                                        <ThumbUpAltIcon
                                            fontSize="large"
                                            color="warning"
                                        />
                                    ) : (
                                        <ThumbUpOffAltIcon
                                            fontSize="large"
                                            color="warning"
                                        />
                                    )}
                                    <span>{addCountLike}</span>
                                </button>
                                <button
                                    disabled={!disLikes ? false : true}
                                    className="story__likes-count"
                                    onClick={() => {
                                        disLikes
                                            ? dispatch(addLike(id))
                                            : dispatch(removeLike(id))
                                    }}
                                >
                                    <span>{addCountDisLike}</span>
                                    {disLikes ? (
                                        <ThumbDownAltIcon
                                            fontSize="large"
                                            color="warning"
                                        />
                                    ) : (
                                        <ThumbDownOffAltIcon
                                            fontSize="large"
                                            color="warning"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default OurStory
