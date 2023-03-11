import styles from "./style.module.scss";

import Logo from "../../assets/Logo";

import { ButtonPrimary } from "@components";

import CardSelect from "./components/CardSelect";

export function HomePage() {
  return (
    <div className={styles.home__content}>
      <div className={styles.home__container}>
        <div>
          <div className={styles.home__mensagge}>
            <h1 className={styles.home__title}>
              ¡Bienvenido(a)!, gracias por visitarme,
              <br /> Mi nombre es Giffine.
            </h1>
          </div>
          <Logo width={"476"} height={"420"} />
        </div>

        <ButtonPrimary title="Comenzar 🎁" />
        <div>
          <CardSelect
            title="¿Qué le gusta a esta persona?"
            subtitle="¿Es mayor de edad esa persona?"
          />
        </div>
      </div>
    </div>
  );
}
