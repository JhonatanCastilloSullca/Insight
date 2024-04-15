import { useContext } from 'react';
import { useFetch } from '../../Hook/useFetch';
import CardActividades from '../../componentes/CardActividades'
import './index.css'
import { GeneralContext } from '../../context/general';
import { SiYourtraveldottv } from 'react-icons/si';
import { FaUserCog } from 'react-icons/fa';
import { FaMedal, FaUsers } from 'react-icons/fa6';


function Servicios() {
    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros[0];

    return (
        <>
            <div className="container-xxl py-10">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h6 className="section-title text-start text-primary text-uppercase">Sobre Nosotros</h6>
                            <h1 className="mb-4">Bienvenido <span className="text-primary text-uppercase">Cusco Insight</span></h1>
                            <p className="mb-4">{GeneralData.subtitulo}</p>
                            <div className="row g-3 pb-4">
                                <div className="col-sm-4">
                                    <div className="border rounded p-1">
                                        <div className="border rounded text-center p-4">
                                            <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                                            <SiYourtraveldottv className='fa-2x text-primary mb-2' />
                                            <h2 className="mb-1" data-toggle="counter-up">{GeneralData.num_viajes}</h2>
                                            <p className="mb-0">Viajes realizados</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="border rounded p-1">
                                        <div className="border rounded text-center p-4">
                                            <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                            <FaUserCog className='fa-2x text-primary mb-2' />
                                            <h2 className="mb-1" data-toggle="counter-up">{GeneralData.num_clientes}</h2>
                                            <p className="mb-0">Pasajeros</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="border rounded p-1">
                                        <div className="border rounded text-center p-4">
                                            <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                            <FaMedal className='fa-2x text-primary mb-2' />
                                            <h2 className="mb-1" data-toggle="counter-up">{GeneralData.num_reconocimientos}</h2>
                                            <p className="mb-0">Reconocimientos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75"
                                        src="./src/assets/images2/about-1.jpg" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100"
                                        src="./src/assets/images2/about-2.jpg" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50"
                                        src="./src/assets/images2/about-3.jpg" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75"
                                        src="./src/assets/images2/about-4.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Servicios
