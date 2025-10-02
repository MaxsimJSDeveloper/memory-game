interface StoreProps {
  score: number;
}

const Store = ({ score }: StoreProps) => {
  return (
    <div>
      <p>Store: {score}</p>
    </div>
  );
};

export default Store;
