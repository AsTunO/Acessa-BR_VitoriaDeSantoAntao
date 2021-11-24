import React from 'react';
import './style.scss';

const CuratorItem = () => {
    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src="https://github.com/AsTunO.png" alt="Foto Desenvolvedor, Júlio Cesar"/>
            </div>
            <div className="curator__details">
                <div>    
                    <h3>Júlio Cesar</h3>
                    <h6>Desenvolvedor</h6>
                </div>
                <p>Estudante de Sistema de Informação e Técnico em Desenvolvimento de Sistemas</p>
            </div>
        </div>
    )
}

export default CuratorItem;