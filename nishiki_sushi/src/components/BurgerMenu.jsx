import { NavLink } from "react-router-dom";
import { BiXCircle } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";
import React, { useState } from "react";
import useWindowDimensions from "./screenResize_hook";
import { motion } from "framer-motion";
import AnimatedPage2 from "./AnimatedPage2";

export default function BurgerMenu(props) {
  const screenSize = useWindowDimensions();
  /*  console.log(props.page); */
  const [visible, setVisible] = useState(false);

  return (
    <AnimatedPage2>
      <>
        {!visible && (
          <CgMenu
            onClick={() => setVisible(!visible)}
            className={
              screenSize > 1224 ? "exit_icon hw40_icon" : "exit_icon hw30_icon"
            }
          ></CgMenu>
        )}

        {visible && (
          <motion.nav
            className="burgerNav"
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
          >
            <BiXCircle
              onClick={() => setVisible(!visible)}
              className={
                screenSize > 1224
                  ? "exit_icon hw40_icon"
                  : "exit_icon hw30_icon"
              }
            />
            <ul>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.8,
                }}
              >
                <NavLink
                  className={
                    props.page === "home"
                      ? "selected column_flex"
                      : "non-selected column_flex"
                  }
                  to="/"
                >
                  <img
                    src={
                      props.page === "home"
                        ? "../icons/homeColored.svg"
                        : "../icons/homeUncolored.svg"
                    }
                    alt="Home icon."
                    className={screenSize > 1224 ? "hw40_icon" : "hw30_icon"}
                  ></img>
                  Forside
                </NavLink>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.8,
                }}
              >
                <NavLink
                  className={
                    props.page === "restaurant"
                      ? "selected column_flex"
                      : "non-selected column_flex"
                  }
                  to="/restaurant"
                >
                  <img
                    src={
                      props.page === "restaurant"
                        ? "../icons/restaurantColored.svg"
                        : "../icons/restaurantUncolored.svg"
                    }
                    alt="Restaurant icon."
                    className={screenSize > 1224 ? "hw40_icon" : "hw30_icon"}
                  ></img>
                  Restaurant
                </NavLink>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.8,
                }}
              >
                <NavLink
                  className={
                    props.page === "takeaway"
                      ? "selected column_flex"
                      : "non-selected column_flex"
                  }
                  to="/takeaway"
                >
                  <img
                    src={
                      props.page === "takeaway"
                        ? "../icons/takeawayColored.svg"
                        : "../icons/takeawayUncolored.svg"
                    }
                    alt="Takeaway icon."
                    className={screenSize > 1224 ? "hw40_icon" : "hw30_icon"}
                  ></img>
                  TakeAway
                </NavLink>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.8,
                }}
              >
                <NavLink
                  className={
                    props.page === "kurv"
                      ? "selected column_flex"
                      : "non-selected column_flex"
                  }
                  to="/kurv"
                >
                  <img
                    src={
                      props.page === "kurv"
                        ? "../icons/basketColored.svg"
                        : "../icons/basketUncolored.svg"
                    }
                    alt="Basket icon."
                    className={screenSize > 1224 ? "hw40_icon" : "hw30_icon"}
                  ></img>
                  Kurv
                </NavLink>
              </motion.li>
            </ul>
            <div className="phone_number">
              <img
                src="../icons/monochromaticLogo.svg"
                className={screenSize > 1224 ? "hw30_icon" : "hw20_icon"}
              ></img>
              <a href="tel:45 42 31 47 99">+45 42 31 47 99</a>
            </div>
          </motion.nav>
        )}
      </>
    </AnimatedPage2>
  );
}
