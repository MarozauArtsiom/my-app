import "./memoExampleContainer.css";
import NotMemoized from "./notMemoized";
import Memoized from "./memoized";

const MemoExampleContainer = () => {
  const count = 1e5;

  return (
    <div>
      <h1>Memo examples</h1>
      <h2>No memo</h2>
      <NotMemoized count={count} />
      <h2>All memo</h2>
      <Memoized count={count} />
    </div>
  );
};

export default MemoExampleContainer;
