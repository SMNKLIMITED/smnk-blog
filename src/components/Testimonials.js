import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Card = ({ star, title, text, name, link }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-yellow-300">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">
        {text}
      </p>
      <div className="flex items-center gap-4 mt-5">
        
        <div>
          <h3 className="font-semibold">{name}</h3>
          <Link
            href=""
            target="_blank"
            className="text-blue-600 font-[500]"
          >
           {link}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonial"
    >
      <div>
        <span className="service-name text-center ">TESTIMONIAL</span>
        <h2 className="title text-center ">Meet Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Modern look & trending design"
            imgSrc="/testimonials/1.png"
            text="Amazing Blog App"
            name="John"
            link=" @John"
          />
        </div>
        <div>
          <Card
            title="Layout and organized layers"
            name="Amaka"
            star={<StarHalfRoundedIcon/>}
            text="Greate Platform"
            link="@amaka"
            
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Design Quality & performance"
            imgSrc="/testimonials/3.png"
            text="Best Site Ever"
            link="@sanzy"
            name="sanzy"
          />
        </div>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Very Beautiful"
            imgSrc="/testimonials/4.png"
            text="Greate Platform"
            name="Peter"
            link="@Audu"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
