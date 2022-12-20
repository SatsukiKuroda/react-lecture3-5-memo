import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memo:propsに変化がない限り再レンダリングされない
export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildAreaがレンダリングされました");

  // 意図的にレンダリングコストの高くする
  const data = [...Array(2000).keys()];
  // console.log(data);
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
