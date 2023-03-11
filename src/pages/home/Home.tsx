import { useEffect, useState } from "react";
import { Button } from "antd";

import Logo from "../../assets/Logo";
import styles from "./Home.module.scss";
import { Message } from "./components/Message";

export function HomePage() {
  const [titles, setTitles] = useState({
    description: (
      <>
        ¡Bienvenido(a)!, gracias por visitarme,
        <br /> Mi nombre es Giffine.
      </>
    ),
    animate: "animate__fadeIn",
  });

  useEffect(() => {
    setTimeout(function () {
      setTitles({
        description: (
          <>
            Si necesitas ayuda para buscar un regalo
            <br />
            sólo haz click en el botón para comenzar.
          </>
        ),
        animate: "animate__bounce",
      });
    }, 3000);
  }, []);

  const hanbldeBegin = () => {
    setTitles({
      description: (
        <>
          ¡Excelente! Ahora cuéntame un poco acerca
          <br />
          de la persona a la que quieres hacerle el regalo
        </>
      ),
      animate: "animate__fadeInDown",
    });
  };

  return (
    <>
      <div className={styles.home__content}>
        <div className={styles.home__container}>
          <Message title={titles.description} classAnimete={titles.animate} />
          <Logo
            className="animate__animated animate__shakeY"
            width={"100%"}
            height={"420"}
          />
          <div>
            <Button
              onClick={hanbldeBegin}
              className={`${styles.home__button} animate__animated animate__fadeIn`}
            >
              Comenzar 🎁
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
