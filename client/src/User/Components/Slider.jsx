import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Slider() {
  return (
    <Carousel style={{height:"90vh"}}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img style={{objectFit:"cover", height:"90vh"}} src="https://t4.ftcdn.net/jpg/03/22/00/77/360_F_322007706_idyu1ibVVdEttVl5SphnZcigacP0j5mI.jpg" className="d-block w-100" alt="..."/>
        
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img style={{objectFit:"cover", height:"90vh"}} src="https://img.freepik.com/premium-photo/glamour-cosmetics-scattered-dark-dusty-background_23-2148181474.jpg" className="d-block w-100" alt="..."/>
        
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slider;