import React, { useContext, useEffect, useState } from 'react';
import './styles.scss';
import imagemDestaque from '../../images/imagem-destaque.png';
import Pills from '../../components/Pills';
import { useParams } from 'react-router';
import { LocationContext } from '../../contexts/LocationContext';


const PLACES = [
    'Praça',
    'Igreja',
    'Hotel',
    'Restaurante',
    'Farmácia',
    'Loja'
]

const Home = () => {
    const { city, state} = useParams();
    const [selectedPill, setSelectedPill] = useState('');
    const {setCity, setState} = useContext(LocationContext);

    useEffect(() => {
        setCity(city);
        setState(state);
    }, [city, state]);
    return (
        <main id="main-content" className="home__container">
            <div className="home__col">
                <h1 className="home__title"> {city} para todos </h1>
                <div className="home__image home__image--destack hide-desktop">
                    <img src={imagemDestaque} alt="Imagem de Destaque Cadeirante" />
                </div>
                <p className="home__text">
                    Nossa missão é facilitar o encontro entre lugares
                    inclusivos e pessoas que buscam alternativas culturais para
                    sair de casa, com a mobilidade que todo cidadão precisa.
                </p>
                <p className="home__text">
                    Checamos 10 itens essenciais de acessibilidade para pessoas
                    com deficiência em diversos pontos da cidade.
                </p>
                <div className="home__pills">
                    {
                        PLACES.map((item) => (

                            <Pills
                                local={item}
                                selected={selectedPill === item}
                                onClick={() => setSelectedPill(item)}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="home__col">
                <div className="home__image home__image--destack hide-mobile">
                    <img src={imagemDestaque} alt="Imagem de Destaque Cadeirante" />
                </div>
            </div>

        </main>
    )
}

export default Home;