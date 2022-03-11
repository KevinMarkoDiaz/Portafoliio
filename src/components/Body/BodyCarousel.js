import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../static/img (1).jpg';
import img2 from '../../static/img (2).jpg';
import img3 from '../../static/img (3).jpg';

export const BodyCarousel = () => {
	return (
		<>
			<Carousel fade indicators="false" interval="2000">
				<Carousel.Item >
					<img
						className="d-block w-100"
						src={img1}
						alt="First slide"
					/>					
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={img2}
						alt="Second slide"
					/>					
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={img3}
						alt="Second slide"
					/>					
				</Carousel.Item>					
			</Carousel>
		</>
	)
};
