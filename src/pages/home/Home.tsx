import { Button } from "antd";
import styles from "./Home.module.scss";
import Logo from "../../assets/Logo";

export function HomePage() {
  return (
    <>
      <div className={styles.home__content}>
        <div className={styles.home__container}>
          <div className={styles.home__mensagge}>
            <h1 className={styles.home__title}>
              ¡Bienvenido(a)!, gracias por visitarme,
              <br /> Mi nombre es Giffine.
            </h1>
          </div>
          <Logo width={"476"} height={"420"} />
          <h1 className={styles.home__title}>Home Page :D</h1>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
        </div>
      </div>
    </>
  );
}

/**      <h1 className={styles.home__title}>
            ¡Excelente! Ahora cuéntame un poco acerca de la persona a la que
            quieres hacerle el regalo
          </h1> */
