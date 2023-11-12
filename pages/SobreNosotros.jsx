import React from "react";

export default function SobreNosotros() {
    return (
        <div>
        <h2 className="tittleSobreNosotros">Sobre Nosotros</h2>
        <p className="textSobreNosotros">
            Esta aplicacion de lista de tareas fue desarrollada por Valentina Beltran, estudiante de Ada School-Protalento.
        </p>

        <p className="textSobreNosotros">
            La aplicación va a permitir gestionar tus tareas que tienes por realizar
            las podras agregar, actualizar, corregir, cambiar de estado pendiente a 
            completado, tendras totalmente el control de las tareas que tienes.
        </p>
        <p className="textSobreNosotros">
            Las tecnologias utilizadas para realizar este proyecto fueron:
        </p>
        <ul>
            <li className="boxTecnologias">
                <img className="logosTecnologias" src="../imagenes/Html.png"></img>
                HTML
            </li>
            <li className="boxTecnologias">
                <img className="logosTecnologias" src="../imagenes/CSS.png"></img>
                CSS
            </li>
            <li className="boxTecnologias">
                <img className="logosTecnologias" src="../imagenes/JS.png"></img>
                Java Script
            </li>
            <li className="boxTecnologias">
                <img className="logosTecnologias" src="../imagenes/React.png"></img>
                React JS
            </li>
        </ul>
        </div>
    );
}