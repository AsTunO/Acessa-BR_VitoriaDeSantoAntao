import React from 'react';
import './style.scss';
import Slider from '../Slider'

const Places = () => {
    return (
        <section className="places">
            <div className="places__header">
                <h2 className="places__title"> Praças <span>Acessíveis</span></h2>
                <div className="places__select">
                    <h5>Ordernar por: </h5>
                    <select>
                        <option>Distância</option>
                        <option>Alfabeto</option>
                    </select>
                </div>
            </div>
            <div className="places__content">
                <Slider />
            </div>
        </section>
    )
}

export default Places;