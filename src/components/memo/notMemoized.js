import { useState } from "react";
import { getRandomData } from "./getRandomData";
import ChildrenItem from "./childrenItem";

const MemoExampleContainer = ({ count }) => {
  const [data, setData] = useState(() => getRandomData(count));

  const handleFullUpdate = () => {
    setData(getRandomData(count));
  };

  const handleFakeUpdate = () => {
    setData([...data]);
  };

  return (
    <div className="memo__container">
      <div className="memo__actions">
        <button onClick={handleFakeUpdate}>Update items ref</button>
        <button onClick={handleFullUpdate}>Full Update</button>
      </div>
      <div className="memo__items">
        {data.map((item) => (
          <ChildrenItem key={item.key} onClick={handleFullUpdate}>
            {item.value}
          </ChildrenItem>
        ))}
      </div>
    </div>
  );
};

export default MemoExampleContainer;
