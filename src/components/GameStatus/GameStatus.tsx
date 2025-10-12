import Loader from "../../ui/Loader/Loader";
import styles from "./GameStatus.module.css";

interface Props {
  loading: boolean;
  error: string;
}

export default function GameStatus({ loading, error }: Props) {
  return (
    <div role="status" className={styles.statusContainer}>
      {loading && <Loader loading />}
      {error && <p>{error}</p>}
    </div>
  );
}
