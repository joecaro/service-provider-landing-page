import React from "react";
import { useRouter } from "next/router";
import smoothScroll from "../utils/smoothScroll";

export default function LinkSmoothScroll({ href, children }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router
      .push(href)
      .then(() => {
        return smoothScroll(href);
      })
      .catch((err) => console.error(err));
  };
  return <a onClick={handleClick}>{children}</a>;
}
