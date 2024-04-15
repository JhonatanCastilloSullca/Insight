import './index.css'
import { GiDuration } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function CardTours({ tours }) {
    const hasTours = tours?.length > 0;
    return (
        <>
            {hasTours ? (
                tours.map(tour => (

                    <div key={tour.id} className="col-lg-4 col-md-6">
                        <NavLink
                            to={`/tours/${tour.id}`}
                        >
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img
                                        className="img-fluid"
                                        src={tour.imagenprincipal ? './src/assets/images2/room-1.jpg' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJbnQkQbM5APIunAO_B6Upp9b8zqnscVro8WPe2Ic9Q&s'}
                                        alt=""
                                    />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Persona</small>
                                </div>

                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">{tour.nombre}</h5>
                                    </div>
                                    <div className="d-flex mb-3 gap-2">
                                        <span><AiOutlineTeam /></span> {tour.tamaño_grupo}
                                        <span><GiDuration /></span> {tour.duracion} {tour.unidad.toLowerCase()}
                                    </div>
                                    <div className="text-body mb-3 text-description-tour" dangerouslySetInnerHTML={{ __html: tour.descripcion }}></div>

                                    <div className="d-flex justify-content-between">
                                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href="#">Ver Mas</a>
                                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href="#">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                ))
            ) : (
                <p>*No se encontraron resultados</p>
            )}
        </>
    );
}

export default CardTours;
