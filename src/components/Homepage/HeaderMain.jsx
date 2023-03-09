import React, { useState } from "react";
import styles from "../../styles/inputStyles.module.scss";
import background from "../../styles/globalStyles.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const HeaderMain = () => {
  const [change, setChange] = useState({
    input1: "",
    input2: "",
  });
  const [exchangeCoin, setExchangeCoin] = useState(false);
  const [buttonKey, setButtonKey] = useState(0);

  // Obtiene los valores de los inputs
  const handleInputValues = (e) => {
    const input1 = parseFloat(e.target.value);
    const input2 = exchangeCoin ? (input1 * 3.801).toFixed(2) : (input1 / 3.762).toFixed(2);
  
    setChange({
      input1: isNaN(input1) ? "" : input1,
      input2: isNaN(input2) ? "" : input2,
    });
  };

  // Cambia el tipo de moneda
  const handleExchange = (e) => {
    e.preventDefault();
    setExchangeCoin((prev) => {
      const newExchangeCoin = !prev;
      changeCoin(change.input1, newExchangeCoin);
      setButtonKey((prevKey) => prevKey + 1); // actualiza el key del botón
      return newExchangeCoin;
    });
  };
  
  const changeCoin = (input1, isExchangeCoin) => {
    const input2 = isExchangeCoin ? (input1 * 3.801).toFixed(2) : (input1 / 3.762).toFixed(2);
    setChange({
      input1: isNaN(input1) ? "" : input1,
      input2: isNaN(input2) ? "" : input2,
    });
  };

  const coinType = exchangeCoin ? "Dólares" : "Soles";

  return (
    <section
      className={`${background.Main} bg-[#192131] flex grow min-h-[90vh] text-white `}
    >
      <section className="w-[50%] flex justify-center items-center">
        <div>
          <p className="flex flex-col">
            <span className={styles.headerTitle}>
              <AnimatedText text="cambia tu moneda, " duration={1} />
            </span>
          <span className={`${styles.headerTitle2} relative left-52`}>
            <AnimatedText text="cambia tu destino." delayChildren={2} />
          </span>
          </p>
        </div>
      </section>
      <section className="w-[50%] flex flex-col justify-center items-center">
        <div>
          <p className="text-center">
            <b>Tipo de cambio</b> del dólar hoy en Perú
          </p>
          <p className="text-center">
            Compra: <b>S/ 3.762</b> Venta: <b>3.801</b>
          </p>
        </div>
        <form action="">
          <div>
            <div className="flex items-center relative">
              <input
                type="text"
                className={`${styles.inputChange}`}
                onChange={handleInputValues}
                name="input1"
              />
              <div className={styles.divChange}>
                <AnimatePresence>
                  <motion.p
                    key={coinType}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {coinType}
                  </motion.p>
                </AnimatePresence>
              </div>
              <button
              className={styles.buttonChange}
              onClick={handleExchange}
              >
              <AnimatePresence>
                <motion.div
                  key={buttonKey}
                  animate={{ rotate: 180}}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </motion.div>
              </AnimatePresence>
              </button>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className={styles.inputChange}
                value={change.input2}
                name="input2"
                readOnly
              />
              <div className={styles.divChange}>
                <AnimatePresence>
                  <motion.p
                    key={coinType}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {coinType === "Dólares" ? "Soles" : "Dólares"}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default HeaderMain;

const AnimatedText = ({ text, duration, delayChildren }) => {
  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: duration || 1,
        ease: "easeOut",
        staggerChildren: .1,
        delayChildren: delayChildren || 0,
      },
    },
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const arrayText = text.split("");

  return (
    <motion.span variants={textVariants} initial="initial" animate="animate">
      {arrayText.map((letter, index) => {
        return (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
