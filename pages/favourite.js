import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { favourites } from '../data/favourites'

export async function getStaticProps() {
  return {
    props: {
      favourites,
    },
  }
}

export default function Favourite({ favourites }) {
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
        {favourites.map((favourite) => (
          <div key={favourite.id}>
            <img src={favourite.img} alt={favourite.label} />
            <p className="legend">{favourite.label}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
