import { Button } from "antd";
import styles from "./style.module.scss";

import { ButtonPrimary } from "@components";

import CardSelect from "./components/CardSelect";

export function HomePage() {
  return (
    <>
      <h1 className={styles.title}>Home Page :D</h1>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>

      <ButtonPrimary title="Comenzar 🎁" />
      <div>
        <CardSelect title="¿Qué le gusta a esta persona?" />
      </div>
    </>
  );
}
