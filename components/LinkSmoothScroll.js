import React from "react";
import { smoothScrollAnim } from "../lib/smoothScroll";

export default function LinkSmoothScroll({ loc, children }) {
  const scroll = (e) => {
    e.preventDefault;
    let el = document.getElementById(loc);
    if (el) {
      smoothScrollAnim(el, 600);
      return;
    }
  };
  return <a onClick={scroll}>{children}</a>;
}
