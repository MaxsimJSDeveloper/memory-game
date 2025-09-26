import { CSSProperties } from "react";
import { CircleLoader } from "react-spinners";

interface LoaderProps {
  loading: boolean;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  position: "absolute",
};

const Loader = ({ loading }: LoaderProps) => {
  return (
    <CircleLoader
      color="#4f46e5"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
