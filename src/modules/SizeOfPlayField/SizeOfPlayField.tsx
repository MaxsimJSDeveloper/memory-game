import SizeOfPlayFieldBtn from "../../components/SizeOfPlayFieldBtn/SizeOfPlayFieldBtn";
import style from "./SizeOfPlayField.module.css";

interface SizeOfPlayFieldProps {
  createField: (size: number) => void;
  disabled: boolean;
}

const SizeOfPlayField = ({ createField, disabled }: SizeOfPlayFieldProps) => {
  return (
    <div className={style.playFieldWrap}>
      <div className={style.sizeButtonsWrap}>
        <SizeOfPlayFieldBtn
          createField={createField}
          size={4}
          disabled={disabled}
        >
          2 x 2
        </SizeOfPlayFieldBtn>
        <SizeOfPlayFieldBtn
          createField={createField}
          size={16}
          disabled={disabled}
        >
          4 x 4
        </SizeOfPlayFieldBtn>
        <SizeOfPlayFieldBtn
          createField={createField}
          size={36}
          disabled={disabled}
        >
          6 x 6
        </SizeOfPlayFieldBtn>
      </div>
      <p className={style.descrBtnText}>Choose the size of play field</p>
    </div>
  );
};

export default SizeOfPlayField;
