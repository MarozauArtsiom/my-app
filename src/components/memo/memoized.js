import { useState, useCallback, memo } from "react";
import { getRandomData } from "./getRandomData";
import ChildrenItem from "./childrenItem";

const ChildrenItemMem = memo(ChildrenItem);

const MemoExampleContainer = ({count}) => {
  const [data, setData] = useState(() => getRandomData(count));

  const handleFullUpdate = useCallback(() => {
    setData(getRandomData(count));
  }, [count]);

  const handleFakeUpdate = useCallback(() => {
    setData([...data]);
  }, [data]);

  return (
    <div className="memo__container">
      <div className="memo__actions">
        <button onClick={handleFakeUpdate}>Update items ref</button>
        <button onClick={handleFullUpdate}>Full Update</button>
      </div>
      <div className="memo__items">
        {data.map((item) => (
          <ChildrenItemMem key={item.key}>
            {item.value}
          </ChildrenItemMem>
        ))}
      </div>
    </div>
  );
};

export default MemoExampleContainer;