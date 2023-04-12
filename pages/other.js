import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { others } from '../data/others'

export async function getStaticProps() {
    return {
        props: {
            others,
        },
    }
}

export default function Other({ others }) {
    return (
        <div
            style={{
                width: '1200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Carousel autoPlay={true} autoFocus={true} infiniteLoop={true}>
                {others.map((other) => (
                    <div key={other.id}>
                        <img src={other.img} alt={other.label} />
                        <p className="legend">{other.label}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
