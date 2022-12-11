import './ArticalesList.scss'

export type PropsItem = {
    id: number
    img: string
    title: string
    text: string
}

const ArticalesItem = ({ id, img, title, text }: PropsItem) => {
    return (
        <>
            <div className="articales__item_img">
                <img src={img} alt="woman" />
            </div>
            <div className="articales__item_content">
                <div className="articales__item_title"> {title}</div>
                <div className="articales__item_text">{text}</div>
            </div>
        </>
    )
}

export default ArticalesItem
