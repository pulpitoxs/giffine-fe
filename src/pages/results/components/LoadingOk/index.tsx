import { useEffect, useRef, useCallback } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import styles from "./style.module.scss";

import BoxOnePart from "../../../../assets/BoxOnePart";
import BoxTwoPart from "../../../../assets/BoxTwoPart";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

export function LoadingOk() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = (particleRatio: any, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  };

  useEffect(() => {
    setTimeout(function () {
      fire();
    }, 500);
    setTimeout(function () {
      fire();
    }, 1000);
    setTimeout(function () {
      fire();
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fire = () => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    makeShot(0.2, {
      spread: 60,
    });
    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <>
      <div className={styles.loading__content}>
        <div className={styles.loading__container}>
          <BoxOnePart
            className={`${styles.loading__icon} animate__animated animate__bounceInDown`}
          />
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
          <BoxTwoPart
            className="animate__animated 
            animate__bounceIn"
          />
        </div>
      </div>
    </>
  );
}
