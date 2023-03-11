import { Button } from "antd";

interface ButtonProps {
  title: string;
}

export function ButtonPrimary({ title }: ButtonProps) {
  return (
    <>
      <Button>{title}</Button>
    </>
  );
}
