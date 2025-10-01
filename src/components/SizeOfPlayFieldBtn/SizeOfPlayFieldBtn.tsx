import { ReactNode } from "react";
import Button from "../../ui/Button/Button";

interface SizeOfPlayFieldBtnProps {
  createField: (size: number) => void;
  size: number;
  children: ReactNode;
  disabled: boolean;
}

const SizeOfPlayFieldBtn = ({
  size,
  children,
  disabled,
  createField,
}: SizeOfPlayFieldBtnProps) => {
  return (
    <>
      <Button disabled={disabled} onClick={() => createField(size)}>
        {children}
      </Button>
    </>
  );
};

export default SizeOfPlayFieldBtn;
