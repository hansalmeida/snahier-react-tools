import { CarouselSlide } from "../../components/CarouselSlide"
import { Slide } from "../../components/CarouselSlide/Slide"
import { Header } from "../../components/Header"
import { StyledPageCarouselSlide } from "./styles"

interface PageCarouselSlideProps {}

export const PageCarouselSlide: React.FC<PageCarouselSlideProps> = () => {
  return (
    <StyledPageCarouselSlide>
      <Header />

      <h2>Carousel Slide Component</h2>

      <CarouselSlide
        buttons={{
          active: <button>active</button>,
          inactive: <button>inactive</button>,
        }}
        style={{
          maxHeight: "300px",
        }}
      >
        <Slide>
          <img src="https://picsum.photos/800/?random=1" alt="" />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/480/?random=2" alt="" />
        </Slide>
        <Slide>
          <span>Only text</span>
        </Slide>
      </CarouselSlide>

      <CarouselSlide
        style={{
          maxHeight: "300px",
        }}
      >
        <Slide>
          <img src="https://picsum.photos/800/?random=1" alt="" />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/480/?random=2" alt="" />
        </Slide>
        <Slide>
          <span>Only text</span>
        </Slide>
      </CarouselSlide>
    </StyledPageCarouselSlide>
  )
}
