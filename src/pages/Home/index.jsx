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
import { MdDiscount, MdOutlineSecurity } from 'react-icons/md'
import { BiSolidUserVoice } from 'react-icons/bi'
import { GiFlyingFlag } from 'react-icons/gi'
function Home() {
    const { t } = useTranslation();

    return (
        <>

            <HeroSection />
            <Search />
            <Tours />
            <Servicios />

            <div className="container-xxl py-5">
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
                            <h1 className="mb-4">Por que elegir <span className="text-primary text-uppercase">Cusco Insight? </span></h1>
                            <div className="row pb-4">
                                <div className="col-sm-12 ">
                                    <div className="border-0">
                                        <div className="border-0 py-2 d-flex align-items-center">
                                            <div className="icon-container">
                                                <MdOutlineSecurity className='text-primary' />
                                            </div>
                                            <div className="content-description-services">
                                                <h4 className="mb-1">Seguridad</h4>
                                                <p className="mb-0">Nos preocupamos por la seguridad de nuestros clientes, por lo que contamos con vehículos y equipos en excelentes condiciones, y cumplimos con todas las medidas de seguridad necesarias.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-0">
                                        <div className="border-0 py-2 d-flex align-items-center">
                                            <div className="icon-container">
                                                <BiSolidUserVoice className='text-primary' />
                                            </div>
                                            <div className="content-description-services">
                                                <h4 className="mb-1">Atención al cliente</h4>
                                                <p className="mb-0">Nos preocupamos por la seguridad de nuestros clientes, por lo que contamos con vehículos y equipos en excelentes condiciones, y cumplimos con todas las medidas de seguridad necesarias.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-0">
                                        <div className="border-0 py-2 d-flex align-items-center">
                                            <div className="icon-container">
                                                <GiFlyingFlag className='text-primary' />
                                            </div>
                                            <div className="content-description-services">
                                                <h4 className="mb-1">Guías expertos</h4>
                                                <p className="mb-0">Nos preocupamos por la s y equipos en excelentes condiciones, y cumplimos con todas las medidas de seguridad necesarias.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-0">
                                        <div className="border-0 py-2 d-flex align-items-center">
                                            <div className="icon-container">
                                                <MdDiscount className='text-primary' />
                                            </div>
                                            <div className="content-description-services">
                                                <h4 className="mb-1">Calidad-precio</h4>
                                                <p className="mb-0">Nos preocupamos por la seguridad de nuestros clientes, por lo que contamos con vehículos y equipos en excelentes condiciones, y cumplimos con todas las medidas de seguridad necesarias.</p>
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
            {/* <Parallax /> */}
            {/* <About /> */}
            {/* <Testimonios /> */}
            {/* <Blog /> */}
            {/* <Certificados /> */}
        </>
    )
}

export default Home
