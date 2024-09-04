import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <Carousel className="my-14">
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/04/12/01/19/euro-718415_960_720.jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2013/12/16/02/59/directory-229117_960_720.jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2014/12/10/20/48/laboratory-563423_1280.jpg" />
      </div>
    </Carousel>
  );
}

export default Banner;
