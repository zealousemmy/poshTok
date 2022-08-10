import React from "react";
import { StyledTextListCollector } from "./style";
const TextListCollector = ({ content }) => {
  return (
    <StyledTextListCollector>
      {content.map((items, key) => (
        <div key={key}>
          {items.title ? (
            <h1>{items.title}</h1>
          ) : items.subTitle ? (
            <h3>{items.subTitle}</h3>
          ) : (
            <></>
          )}
          {items.list ? (
            <div className="listSect">
              {items.list.map((item) => (
                <li key={key}>{item}</li>
              ))}
            </div>
          ) : items.orderedList ? (
            <ol className="orderedList">
              {items.orderedList.map((item, key) => (
                <div key={key} className="listOrder">
                  <li>{item.listTitle}</li>
                  <div className="content">
                    {item.content?.map((content, key) => (
                      <p key={key}>{content}</p>
                    ))}
                  </div>
                  {item.childList ? (
                    <ul className="childList">
                      {item.childList.map((item, key) => (
                        <li key={key}>{item}</li>
                      ))}
                    </ul>
                  ) : item.orderedChildList ? (
                    <ol className="childList alphaOrder">
                      {item.orderedChildList.map((item, key) => (
                        <li key={key}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <></>
                  )}
                  <div className="addText">
                    {item.addText?.map((text, key) => (
                      <p key={key}>{text}</p>
                    ))}
                  </div>
                </div>
              ))}
            </ol>
          ) : (
            <></>
          )}
          {items.text ? (
            <>
              {items.text.map((item, key) => (
                <p key={key}>{item}</p>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      ))}
    </StyledTextListCollector>
  );
};

export default TextListCollector;
