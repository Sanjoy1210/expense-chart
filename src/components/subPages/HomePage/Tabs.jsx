import { tabs } from "@utils/tabsData";
import { useState } from "react";

export default function Tabs() {
  const [activeIndex, setActiveIndex] = useState(tabs[0].id);

  const handleClick = (id) => {
    setActiveIndex(id);
  };

  return (
    <ul className="tabs">
      {tabs?.map(
        (tab) => (
          console.log(activeIndex, tab?.id),
          (
            <li
              key={tab?.id}
              className={`tab__label ${
                tab?.id === activeIndex ? " active__tab__label" : ""
              }`}
              onClick={() => handleClick(tab?.id)}
            >
              {tab?.label}
            </li>
          )
        )
      )}
    </ul>
  );
}
