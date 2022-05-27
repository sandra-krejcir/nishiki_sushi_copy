import { useState, useEffect } from "react";

export default function cartSetup() {
  const CART = {
    KEY: "kurv",
    contents: [],
    init() {
      /*  let _contents = localStorage.getItem(CART.KEY);
      if (_contents) {
        CART.contents = JSON.parse(_contents);
      } */
      const [_contents, setContents] = useState(localStorage.getItem(CART.KEY));
      useEffect(() => {
        if (_contents) {
          CART.contents = JSON.parse(_contents);
          if (!_contents.current) {
            setContents(localStorage.getItem(CART.KEY));
          }
          CART.sync();
        }
      }, [_contents]);
    },
    sync() {
      let _cart = JSON.stringify(CART.contents);
      localStorage.setItem(CART.KEY, _cart);
    },

    /* const minusBtn = cartCopy.querySelector(".minus");
        minusBtn.addEventListener("click", () => {
          CART.minusOne(id);
        });

        const plusBtn = cartCopy.querySelector(".plus");
        plusBtn.addEventListener("click", () => {
          CART.plusOne(id);
        });

        const removeBtn = cartCopy.querySelector(".remove-product");
        removeBtn.addEventListener("click", () => {
          CART.remove(id);
        }); */

    add(obj) {
      const index = CART.contents.findIndex(
        (element) => element.name === obj.name
      );
      if (index === -1) {
        console.log(obj);
        obj.qty = 1;
        console.log(CART.contents);
        CART.contents.push(obj);
      } else {
        CART.contents[index].qty += 1;
      }

      console.log(CART.contents.name);
      this.sync();
    },

    minusOne(obj) {
      const productQty = CART.contents.find(
        (element) => element.name === obj.name
      ).qty;
      console.log(productQty);

      if (productQty > 1) {
        const indexObj = CART.contents.findIndex(
          (element) => element.name === obj.name
        );
        CART.contents[indexObj].qty--;
        console.log(indexObj);
      } else if (productQty === 1) {
        const indexObj = CART.contents.findIndex(
          (element) => element.name === obj.name
        );
        CART.contents[indexObj].qty = 0;
        CART.contents.splice(indexObj, 1);
      }
      console.log(CART.contents);
      this.sync();
    },
  };

  CART.init();
  return CART;
}
