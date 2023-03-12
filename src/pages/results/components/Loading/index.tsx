import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import LogoLoading from "../../../../assets/LogoLoading";
import LoadingIcon from "../../../../assets/Loading";

export function Loading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <>
      <div className={styles.loading__content}>
        <LogoLoading
          className={`animate__animated ${
            loading && "animate__wobble animate__infinite"
          }`}
          width={"100%"}
          height={"420"}
        />
        {!loading && <LoadingIcon className={styles.loading__icon} />}
      </div>
    </>
  );
}
