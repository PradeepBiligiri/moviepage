import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
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
      <div className="like-button">
        <IconButton
          aria-label="like-movie"
          className="bt-sz-lg"
          color="success"
          onClick={() => {
            setLike(like + 1);
            // console.log({ like });
          }}
        >
          <Badge badgeContent={like} color="success">
            👍
          </Badge>
          {/* <ThumbUpOffAltRoundedIcon color="success" fontSize="small" /> */}
        </IconButton>

        <IconButton
          aria-label="Dislike-movie"
          className="bt-sz-lg"
          onClick={() => {
            setDislike(dislike + 1);
            // console.log({ dislike });
          }}
          color="error"
        >
          <Badge badgeContent={dislike} color="error">
            👎
          </Badge>
          {/* <ThumbDownAltRoundedIcon color="error" fontSize="small" /> */}
        </IconButton>
      </div>
      <div>
        <IconButton aria-label="Delete-movie">
          <DeleteIcon color="error" />
        </IconButton>
        <IconButton aria-label="Edit-movie">
          <EditIcon color="primary" />
        </IconButton>
      </div>
    </div>
  );
}
