import React, {useState } from "react";
import Particles from "react-particles-js";

export default function Fondo() {
  const [anchodeScream, setAnchodeScream] = useState(100);

  let particula = "#fff";

  window.addEventListener("resize", function() {
    let ancho = window.innerWidth;
    console.log(ancho);
    if (ancho < 850) {
      setAnchodeScream(60);
      console.log("hola 640");
    }
  });

  return (
    <Particles
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage:
          // "url(https://res.cloudinary.com/perusap/image/upload/v1630193873/EXAM/banner-principal_fw1y61.png)",
          "url(https://res.cloudinary.com/perusap/image/upload/v1646101446/EXAM/fondo_fondo_uydhq8.jpg)",
        backgroundColor: "#fff",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      params={{
        particles: {
          number: {
            value: anchodeScream,
          },
          size: {
            value: 2.5,
          },
          color: {
            value: particula,
          },
          opacity: {
            value: 0.5,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: particula,
            opacity: 0.5,
            width: 2,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        color: {
          value: particula,
        },

        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
          // retina_detect: true,
        },
      }}
    />
  );
}
