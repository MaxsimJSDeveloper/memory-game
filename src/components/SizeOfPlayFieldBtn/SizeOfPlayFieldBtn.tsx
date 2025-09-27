import { ReactNode } from "react";
import Button from "../../ui/Button/Button";

interface SizeOfPlayFieldBtnProps {
  createField: (size: number) => void;
  size: number;
  children: ReactNode;
}

const SizeOfPlayFieldBtn = ({
  size,
  children,
  createField,
}: SizeOfPlayFieldBtnProps) => {
  return (
    <>
      <Button onClick={() => createField(size)}>{children}</Button>
    </>
  );
};

export default SizeOfPlayFieldBtn;
