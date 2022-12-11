export type reviewsProps = {
    id?: number
    name: string
    text: string
}

const ReviewsItem = ({ id, name, text }: reviewsProps) => {
    return (
        <>
            <div className="item-reviews__title">{name}</div>
            <div className="item-reviews__text">{text}</div>
        </>
    )
}

export default ReviewsItem
