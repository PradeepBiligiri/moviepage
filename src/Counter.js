import { useState } from "react";

export function Counter() {
  // let like = 0;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  // function likhandler(){
  //   return(setLike = like+1)
  // }
  return (
    <div className="counter-container">
      <button
        className="bt-sz-lg"
        onClick={() => {
          setLike(like + 1);
          console.log({ like });
        }}
      >
        <span>👍</span> {like}
      </button>

      <button
        className="bt-sz-lg"
        onClick={() => {
          setDislike(dislike + 1);
          console.log({ dislike });
        }}
      >
        <span>👎</span> {dislike}
      </button>
    </div>
  );
}
