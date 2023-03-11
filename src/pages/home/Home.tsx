import { Button } from "antd";
import styles from "./Home.module.scss";

export function HomePage() {
  return (
    <>
      <h1 className={styles.title}>Home Page :D</h1>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
    </>
  );
}
