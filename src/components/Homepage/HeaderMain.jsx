import React from "react";
import global from "./styles/globalStyles.module.scss";
import { AnimatedText } from "./components/AnimatedText";
import { ChangerCoins } from "./components/ChangerCoins";

const HeaderMain = () => {
  return (
    <section className={`${global.backgroundMain} flex flex-col lg:flex-row justify-center items-center grow min-h-[90vh] text-white `}>
      {/* TITULO DE LA PAGINA INICIAL */}
      <section className="w-[50%] flex justify-center items-center">
          <p className="flex flex-col">
            <span className={`${global.mainTitle} ${global.colorMainTitle1} text-center`}>
              <AnimatedText text="cambia tu moneda, " duration={1} />
            </span>
            <span className={`${global.mainTitle} ${global.colorMainTitle2} text-center lg:left-52`}>
              <AnimatedText text="cambia tu destino." delayChildren={2} />
            </span>
          </p>
      </section>

      {/* CONTENT MAIN HEADER */}
      <section className="w-[50%] flex flex-col justify-center items-center">

        {/* DESCRIPCION DE LA PAGINA */}
        <div>
          <p className="text-center">
            <b>Tipo de cambio</b> del dólar hoy en Perú
          </p>
          <p className="text-center">
            Compra: <b>S/ 3.762</b> Venta: <b>3.801</b>
          </p>
        </div>

        {/* CAMBIADOR DE MONEDAS */}
        <ChangerCoins/>
        
      </section>
    </section>
  );
};

export default HeaderMain;


