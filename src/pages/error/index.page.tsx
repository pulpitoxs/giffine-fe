import { useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";

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
          <Image
            src="https://i.ibb.co/Wy6Tr3m/cara2-1.gif"
            alt="Landscape picture"
            width={476}
            height={420}
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
