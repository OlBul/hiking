import { OurStoryProps } from './ourStoryArray'
import '../../components/ArticalesSection/ArticalesList.scss'
import './OurStories.scss'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'

const OurStoriesItem = ({ id, title, photo1, paragraph }: OurStoryProps) => {
    const isLikes = useAppSelector((state) => state.likeState.isLike[id])
    const disLikes = useAppSelector((state) => state.likeState.disLike[id])

    return (
        <>
            <div className="story__column">
                <div className="story__item_img">
                    <img src={photo1} alt="woman" />
                </div>
                <div className="story__item_content">
                    <div className="story__articale">
                        <h5 className="story__item_title">{title}</h5>
                        <p className="story__item_text">{paragraph}</p>
                    </div>
                </div>
            </div>
            <div className="story__buttons">
                <div className="story__likes">
                    <button className="story__likes-count">
                        {isLikes ? (
                            <ThumbUpAltIcon fontSize="large" color="warning" />
                        ) : (
                            <ThumbUpOffAltIcon
                                fontSize="large"
                                color="warning"
                            />
                        )}
                    </button>
                    <button>
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
                <Link to={`/ourStories/${id}`} className="story__btn">
                    Show more &rsaquo;&rsaquo;&rsaquo;
                </Link>
            </div>
        </>
    )
}

export default OurStoriesItem
