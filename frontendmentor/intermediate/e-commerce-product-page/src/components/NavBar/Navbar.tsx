import * as React from "react";
import * as Styled from "./Navbar.styled";
import { motion, AnimatePresence } from "framer-motion";
import CartModal from "../Modal/CartModal";

import { useContext, useState } from "react";
import useShowModal from "../../hooks/useShowModal";
import shoppingCart from "../../assets/icons/icon-cart.svg";
import avatarLogo from "../../assets/images/image-avatar.png";
import { AddToCartContext } from "../../context/AddToCartContext";

export default function Navbar() {
  const { modalShow, toggleModal } = useShowModal();
  const { AddToCart, setAddToCart } = useContext(AddToCartContext);

  return (
    <div>
      <Styled.navBar>
        <div className="vertical-navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="vertical-navbar-grey"></div>
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="menu-items">
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </div>
          </div>
        </div>

        <Styled.navBarUL>
          <Styled.navBarLI>Sneakers</Styled.navBarLI>
          <Styled.navBarLI>Collections</Styled.navBarLI>
          <Styled.navBarLI>Men</Styled.navBarLI>
          <Styled.navBarLI>Women</Styled.navBarLI>
          <Styled.navBarLI>About</Styled.navBarLI>
          <Styled.navBarLI>Contact</Styled.navBarLI>
        </Styled.navBarUL>
        <div className="logos">
          <div className="logos-cart-img-div">
            <img
              onClick={toggleModal}
              className="svg-cart"
              src={shoppingCart}
            />
            {(AddToCart.qnty != undefined && AddToCart.qnty > 0) ? <div className="logos-cart-qnty">{AddToCart.qnty}</div> : <></>}
          </div>
          <Styled.navBarUserLogo>
            <img src={avatarLogo} />
          </Styled.navBarUserLogo>
        </div>
      </Styled.navBar>
      <AnimatePresence initial={false}>
        {modalShow && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CartModal />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}