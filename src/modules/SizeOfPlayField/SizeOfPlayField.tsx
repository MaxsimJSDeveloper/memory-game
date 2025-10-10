import SizeOfPlayFieldBtn from "../../components/SizeOfPlayFieldBtn/SizeOfPlayFieldBtn";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import style from "./SizeOfPlayField.module.css";

interface SizeOfPlayFieldProps {
  createField: (size: number) => void;
  disabled: boolean;
}

const SizeOfPlayField = ({ createField, disabled }: SizeOfPlayFieldProps) => {
  const width = useWindowWidth();

  const configBtn = [
    { size: 4, label: "2 x 2" },
    { size: 16, label: "4 x 4" },
    { size: 36, label: "6 x 6" },
  ];

  return (
    <div className={style.playFieldWrap}>
      <p className={style.descrBtnText}>Choose the size of play field:</p>
      <div className={style.sizeButtonsWrap}>
        {configBtn.map(
          (btn) =>
            (btn.size !== 36 || width > 760) && (
              <SizeOfPlayFieldBtn
                createField={createField}
                size={btn.size}
                disabled={disabled}
                key={btn.size}
              >
                {btn.label}
              </SizeOfPlayFieldBtn>
            )
        )}
      </div>
    </div>
  );
};

export default SizeOfPlayField;
