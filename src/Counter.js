import Button from "@mui/material/Button";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
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
      <Button
        variant="text"
        className="bt-sz-lg"
        onClick={() => {
          setLike(like + 1);
          console.log({ like });
        }}
      >
        <ThumbUpOffAltRoundedIcon color="success" fontSize="small" />
        {like}
      </Button>

      <Button
        variant="text"
        className="bt-sz-lg"
        onClick={() => {
          setDislike(dislike + 1);
          console.log({ dislike });
        }}
      >
        <ThumbDownAltRoundedIcon color="error" fontSize="small" /> {dislike}
      </Button>
    </div>
  );
}
