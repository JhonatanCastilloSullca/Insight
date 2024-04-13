
import './index.css'

function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-light footer  " data--delay="0.1s">
                <div className="container pb-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4">
                            <div className="bg-primary rounded p-4">
                                <a href="index.html">
                                    <h1 className="text-white text-uppercase mb-3">Hotelier</h1>
                                </a>
                                <p className="text-white mb-0">
                                    Descargue <a className="text-dark fw-medium"
                                        href="https://htmlcodex.com/hotel-html-template-pro">Hotelier – Versión Premium</a>,
                                    construya un sitio web profesional para su negocio hotelero y capte la atención de nuevos
                                    visitantes desde el lanzamiento de su sitio.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h6 className="section-title text-start text-primary text-uppercase mb-4">Contacto</h6>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="row gy-5 g-4">
                                <div className="col-md-6">
                                    <h6 className="section-title text-start text-primary text-uppercase mb-4">Compañía</h6>
                                    <a className="btn btn-link" href="#">Sobre Nosotros</a>
                                    <a className="btn btn-link" href="#">Contacto</a>
                                    <a className="btn btn-link" href="#">Política de Privacidad</a>
                                    <a className="btn btn-link" href="#">Términos y Condiciones</a>
                                    <a className="btn btn-link" href="#">Soporte</a>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="section-title text-start text-primary text-uppercase mb-4">Servicios</h6>
                                    <a className="btn btn-link" href="#">Comida & Restaurante</a>
                                    <a className="btn btn-link" href="#">Spa & Fitness</a>
                                    <a className="btn btn-link" href="#">Deportes & Juegos</a>
                                    <a className="btn btn-link" href="#">Eventos & Fiestas</a>
                                    <a className="btn btn-link" href="#">GYM & Yoga</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Nombre de tu Sitio</a>, Todos los Derechos Reservados.
                                Diseñado por <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href="#">Inicio</a>
                                    <a href="#">Cookies</a>
                                    <a href="#">Ayuda</a>
                                    <a href="#">FAQs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer


