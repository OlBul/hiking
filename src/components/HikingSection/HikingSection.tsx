import './HikingSection.scss'

type Props = {}

const HikingSection = (props: Props) => {
    return (
        <section className="hiking">
            <div className="container hiking__container">
                <h3 className="hiking__title">Hiking in the mountains</h3>
                <div className="hiking__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam quis
                </div>
            </div>
        </section>
    )
}

export default HikingSection
