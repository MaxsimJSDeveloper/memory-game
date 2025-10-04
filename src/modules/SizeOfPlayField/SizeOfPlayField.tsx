import SizeOfPlayFieldBtn from "../../components/SizeOfPlayFieldBtn/SizeOfPlayFieldBtn";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import style from "./SizeOfPlayField.module.css";

interface SizeOfPlayFieldProps {
  createField: (size: number) => void;
  disabled: boolean;
}

const SizeOfPlayField = ({ createField, disabled }: SizeOfPlayFieldProps) => {
  const width = useWindowWidth();

  return (
    <div className={style.playFieldWrap}>
      <p className={style.descrBtnText}>Choose the size of play field:</p>
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
        {width > 760 && (
          <SizeOfPlayFieldBtn
            createField={createField}
            size={36}
            disabled={disabled}
          >
            6 x 6
          </SizeOfPlayFieldBtn>
        )}
      </div>
    </div>
  );
};

export default SizeOfPlayField;
