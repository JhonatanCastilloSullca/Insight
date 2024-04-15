import { Col, Row, Container } from 'react-bootstrap';
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdDiscount, MdTour } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";

function ToursInfoSection({ titulo, duracion, precio, categoria }) {
    return (
        <Row className="info-row w-100 py-5 m-0">
            <Container fluid="md">
                <Row>
                    <Col md={5} className=" d-flex align-items-center justify-content-center">
                        <h2 className="subheading font-weight-bold text-gray">{titulo}</h2>
                    </Col>
                    <Col md={7} className='d-flex justify-content-end px-4'>
                        <Row className='gap-4'>
                            <Col>
                                <InfoItem icono={<IoTimerSharp />} titulo="Duración" contenido={duracion + " Dia(s)"} />
                            </Col>
                            <Col>
                                <InfoItem icono={<MdDiscount />} titulo="Precio" contenido={"S/. " + precio} />
                            </Col>
                            <Col>
                                <InfoItem icono={<MdTour />} titulo="Categoría" contenido={categoria} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Row>
    );
}

function InfoItem({ icono, titulo, contenido }) {
    return (
        <div className="icono-tour-cusco p-2">
            <div className="icono-diarios">
                <span className="text-primary h2 fa-3x ">{icono}</span>
            </div>
            <div className="icono-diarios-text">
                <h5 className="m-0 text-gray"><b>{titulo}</b></h5>
                <span>{contenido}</span>
            </div>
        </div>
    );
}

export default ToursInfoSection;
