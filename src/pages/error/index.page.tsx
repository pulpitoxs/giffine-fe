import { useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/router";

import LogoRed from "../../assets/LogoRed";
import styles from "./style.module.scss";

import { Message } from "../../components/Message";

export default function HomePage() {
  const router = useRouter();
  const [titles] = useState({
    description: <>{router.query.message}</>,
    animate: "animate__fadeIn",
  });

  return (
    <>
      <div className={styles.error__content}>
        <div className={styles.error__container}>
          <Message title={titles.description} classAnimete={titles.animate} />
          <LogoRed
            className="animate__animated animate__shakeY"
            width={"100%"}
            height={"420"}
          />
          <div>
            <Button
              onClick={() => router.push("/")}
              className={`${styles.error__button} animate__animated animate__fadeIn`}
            >
              Volver a filtrar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
