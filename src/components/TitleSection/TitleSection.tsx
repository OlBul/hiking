import { TitleForm } from 'components/FormSections/Forms'
import './TitleSection.scss'

type Props = {}

const TitleSection = (props: Props) => {
    return (
        <section className="title">
            <div className="container ">
                <div className="title__contant">
                    <h3 className="title__title">Title Here</h3>
                    <div className="title__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus lacinia odio vitae vestibulum vestibulum.
                    </div>
                </div>
                <TitleForm />
            </div>
        </section>
    )
}

export default TitleSection
