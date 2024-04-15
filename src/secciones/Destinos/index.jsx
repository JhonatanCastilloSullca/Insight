import './index.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Destinos() {
    return (
        <>
            <div className="ftco-section img ftco-select-destination py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="row">
                            <Swiper
                                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                                spaceBetween={50}
                                centeredSlides={true}
                                loop={true}
                                autoplay={{
                                    delay: 1800,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 5,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 10,
                                    },
                                }}
                                className="mySwiperDestiny"
                            >
                                <SwiperSlide>
                                    <div className="brand-item-content">
                                        <img
                                            decoding="async"
                                            src="https://www.cuzcotravels.com/wp-content/uploads/2023/05/frommperu-1.png"
                                            alt="Logo de Tripadvisor en Cuzco Travels"
                                            className="brand-img"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-item-content">
                                        <img
                                            decoding="async"
                                            src="https://www.cuzcotravels.com/wp-content/uploads/2023/05/micc-1.png"
                                            alt="Logo de Tripadvisor en Cuzco Travels"
                                            className="brand-img"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-item-content">
                                        <img
                                            decoding="async"
                                            src="https://www.cuzcotravels.com/wp-content/uploads/2023/05/tripadvirrso.png"
                                            alt="Logo de Tripadvisor en Cuzco Travels"
                                            className="brand-img"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-item-content">
                                        <img
                                            decoding="async"
                                            src="https://www.cuzcotravels.com/wp-content/uploads/2023/05/gerrce-1.png"
                                            alt="Logo de Tripadvisor en Cuzco Travels"
                                            className="brand-img"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-item-content">
                                        <img
                                            decoding="async"
                                            src="https://www.cuzcotravels.com/wp-content/uploads/2023/05/gobb-1.png"
                                            alt="Logo de Tripadvisor en Cuzco Travels"
                                            className="brand-img"
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destinos
