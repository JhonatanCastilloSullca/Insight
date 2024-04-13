import './index.css'
import Servicios from "../../secciones/Servicios"
import Destinos from "../../secciones/Destinos"
import Tours from "../../secciones/Tours"
import Parallax from "../../secciones/Parallax"
import About from "../../secciones/About"
import Testimonios from "../../secciones/Testimonios"
import Blog from "../../secciones/Blog"
import { useTranslation } from "react-i18next"
import Search from '../../secciones/Search'
import HeroSection from '../../secciones/HeroSection'
import Certificados from '../../secciones/Certificados'
import { FaTripadvisor, FaUserCog } from 'react-icons/fa'
import { FaCircleDot, FaUsers } from 'react-icons/fa6'
import { SiYourtraveldottv } from 'react-icons/si'
function Home() {
    const { t } = useTranslation();

    return (
        <>

            <HeroSection />
            <Search />

            <div className="container-xxl py-10 pt-0">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">Nuestros Tours</h6>
                        <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Tours</span></h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="./src/assets/images2/room-1.jpg" alt="" />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Persona</small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">Machupicchu 2D</h5>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                    </div>
                                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <div className="d-flex justify-content-between">
                                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href="#">Ver Mas</a>
                                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href="#">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="./src/assets/images2/room-1.jpg" alt="" />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Persona</small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">Machupicchu 2D</h5>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                    </div>
                                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <div className="d-flex justify-content-between">
                                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href="#">Ver Mas</a>
                                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href="#">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="./src/assets/images2/room-1.jpg" alt="" />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Persona</small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">Machupicchu 2D</h5>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                    </div>
                                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <div className="d-flex justify-content-between">
                                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href="#">Ver Mas</a>
                                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href="#">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-xxl py-10">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
                            <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Hotelier</span></h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                dolore erat amet</p>
                            <div className="row g-3 pb-4">
                                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="border rounded p-1">
                                        <div className="border rounded text-center p-4">
                                            <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                                            <SiYourtraveldottv className='fa-2x text-primary mb-2' />
                                            <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                            <p className="mb-0">Viajeros Felices</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="border rounded p-1">
                                        <div className="border rounded text-center p-4">
                                            <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                            <FaUserCog className='fa-2x text-primary mb-2' />
                                            <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                            <p className="mb-0">Profesionales</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="border rounded p-1">
                                        <div className="border rounded text-center p-4">
                                            <FaUsers className='fa-2x text-primary mb-2' />
                                            <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                            <p className="mb-0">Tours Disponibles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5 mt-2" href="">Explore More</a>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s"
                                        src="./src/assets/images2/about-1.jpg" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s"
                                        src="./src/assets/images2/about-2.jpg" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s"
                                        src="./src/assets/images2/about-3.jpg" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s"
                                        src="./src/assets/images2/about-4.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-10">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12 text-end">
                                    <img className="img-fluid rounded w-100" src="./src/assets/images2/about-1.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
                            <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Hotelier</span></h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                dolore erat amet</p>
                            <div className="row pb-4">
                                <div className="col-sm-12 ">
                                    <div className="border rounded p-1">
                                        <div className="border rounded text-center p-4">
                                            <div className="d-flex align-items-center">
                                                <SiYourtraveldottv className='fa-3x text-primary mb-2' />
                                                <div className="content-description-services">
                                                    <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                                    <p className="mb-0">Viajeros Felices</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border rounded p-1">
                                        <div className="border rounded text-center p-4">
                                            <div className="d-flex align-items-center">
                                                <SiYourtraveldottv className='fa-3x text-primary mb-2' />
                                                <div className="content-description-services">
                                                    <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                                    <p className="mb-0">Viajeros Felices</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border rounded p-1">
                                        <div className="border rounded text-center p-4">
                                            <div className="d-flex align-items-center">
                                                <SiYourtraveldottv className='fa-3x text-primary mb-2' />
                                                <div className="content-description-services">
                                                    <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                                    <p className="mb-0">Viajeros Felices</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">Testimonios</h6>
                        <h1 className="mb-5">Opiniones de nuestros clientes</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card mb-3">
                                <div className="card-header d-flex justify-content-between align-items-center border-0">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://via.placeholder.com/50"
                                            alt="User"
                                            className="rounded-circle me-3"
                                        />
                                        <div>
                                            <h6 className="mb-0">John Doe</h6>
                                            <span className="text-muted">New York, USA</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center border-none ti-stars">
                                        <FaTripadvisor />
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <span className="ti-stars p-0">
                                        <FaCircleDot />
                                        <FaCircleDot />
                                        <FaCircleDot />
                                        <FaCircleDot />
                                        <FaCircleDot />
                                    </span>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper dolor, nec vehicula arcu.
                                        Vestibulum in lectus non odio sollicitudin auctor at sit amet nunc. In sed erat sed nunc sodales aliquet.
                                        Nulla facilisi. Sed aliquam tortor ut mauris lacinia, quis feugiat libero malesuada.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card mb-3">
                                <div className="card-header d-flex justify-content-between align-items-center border-0">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://via.placeholder.com/50"
                                            alt="User"
                                            className="rounded-circle me-3"
                                        />
                                        <div>
                                            <h6 className="mb-0">John Doe</h6>
                                            <span className="text-muted">New York, USA</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center border-none ti-stars">
                                        <FaTripadvisor />
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <span className="ti-stars p-0">
                                        <FaCircleDot />
                                        <FaCircleDot />
                                        <FaCircleDot />
                                        <FaCircleDot />
                                        <FaCircleDot />
                                    </span>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper dolor, nec vehicula arcu.
                                        Vestibulum in lectus non odio sollicitudin auctor at sit amet nunc. In sed erat sed nunc sodales aliquet.
                                        Nulla facilisi. Sed aliquam tortor ut mauris lacinia, quis feugiat libero malesuada.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card mb-3">
                                <div className="card-header d-flex justify-content-between align-items-center border-0">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://via.placeholder.com/50"
                                            alt="User"
                                            className="rounded-circle me-3"
                                        />
                                        <div>
                                            <h6 className="mb-0">John Doe</h6>
                                            <span className="text-muted">New York, USA</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center border-none ti-stars">
                                        <FaTripadvisor />
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <span className="ti-stars p-0">
                                        <FaCircleDot />
                                        <FaCircleDot />
                                        <FaCircleDot />
                                        <FaCircleDot />
                                        <FaCircleDot />
                                    </span>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper dolor, nec vehicula arcu.
                                        Vestibulum in lectus non odio sollicitudin auctor at sit amet nunc. In sed erat sed nunc sodales aliquet.
                                        Nulla facilisi. Sed aliquam tortor ut mauris lacinia, quis feugiat libero malesuada.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Servicios /> */}
            <Destinos />
            {/* <Tours /> */}
            {/* <Parallax /> */}
            {/* <About /> */}
            {/* <Testimonios /> */}
            {/* <Blog /> */}
            {/* <Certificados /> */}
        </>
    )
}

export default Home
