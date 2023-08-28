import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapruting = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapruting);

      return () =>
        document.removeEventListener("click", handleClick, listenCapruting);
    },
    [handler, listenCapruting]
  );

  return ref;
}
