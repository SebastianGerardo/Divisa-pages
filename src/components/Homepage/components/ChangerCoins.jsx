import React, { useState } from "react";
import input from "../styles/inputStyles.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export const ChangerCoins = () => {
  const [buttonKey, setButtonKey] = useState(0);
  const [exchangeCoin, setExchangeCoin] = useState(false);
  const [change, setChange] = useState({
    input1: "1500",
    input2: "5664",
  });

  const coinType = exchangeCoin ? "Soles" : "Dólares";

  // Obtiene los valores de los inputs
  const handleInputValues = (e) => {
    const input1 = parseFloat(e.target.value);
    const input2 = exchangeCoin
      ? (input1 / 3.762).toFixed(2)
      : (input1 * 3.801).toFixed(2);
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
      setButtonKey((prevKey) => prevKey + 1); // actualiza el key del botón
      changeCoin(change.input1, newExchangeCoin);
      return newExchangeCoin;
    });
  };

  const changeCoin = (input1, isExchangeCoin) => {
    const input2 = isExchangeCoin
      ? (input1 / 3.762).toFixed(2)
      : (input1 * 3.801).toFixed(2);
    setChange({
      input1: isNaN(input1) ? "" : input1,
      input2: isNaN(input2) ? "" : input2,
    });
  };

  return (
    <form action="">
      <div>
        <div className={`flex items-center relative ${input.input1}`}>
          <input
            type="text"
            className={`${input.inputsChangeCoin}`}
            onChange={handleInputValues}
            name="input1"
            value={change.input1}
          />
          <div className={input.divsChangeSpan}>
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
          <button className={input.buttonChangeCoin} onClick={handleExchange}>
            <AnimatePresence>
              <motion.div
                key={buttonKey}
                animate={{ rotate: 180 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
        <div className={`flex items-center ${input.input2}`}>
          <input
            type="text"
            className={input.inputsChangeCoin}
            value={change.input2}
            name="input2"
            readOnly
          />
          <div className={input.divsChangeSpan}>
            <AnimatePresence>
              <motion.p
                key={coinType}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {coinType === "Soles" ? "Dólares" : "Soles"}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <motion.button
          className="font-montserrat bg-[#00e3c2] w-3/5 text-[#060f45] font-bold py-[15px] px-[40] rounded-full mt-4 text-base"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.7 }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={(e) => e.preventDefault()}
          >
            Regístrate ahora!
          </motion.button>
        </div>

        <div className="flex justify-center w-full font-montserrat text-[11px] mt-2 ">
          <p>¿Monto mayor a <b>$10.000</b> o <b>S/ 30.000</b>?</p>
        </div>
      </div>
    </form>
  );
};
