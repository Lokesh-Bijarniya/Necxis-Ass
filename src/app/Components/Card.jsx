import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Card({profile, title, description, imageUrl }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked); // Toggle liked state
    setLikes(liked ? likes - 1 : likes + 1); // Increment or decrement likes count
  };

  const handleComment = () => {
    setComments(comments + 1); // Increment comments count
  };

  return (
    <div className="ml-28 w-7/12 border border-black bg-gray-300">
      <div className="flex mt-2">
        <img
          src={profile}
          alt=""
          className="h-12 w-12 ml-1 rounded-full"
        />
        <h1 className="mt-1 ml-2 text-3xl font-light cursor-pointer">{title}</h1>
       <MoreHorizIcon className=" mt-2 ml-56 cursor-pointer"/>
      </div>

      <p className="ml-12 text-lg">{description}</p>

      <img
        src={imageUrl}
        alt=""
        className="h-96 ml-12 mt-4 w-10/12 rounded-lg"
      />
      {/* <h1 className="text-2xl font-light ml-12">{title}</h1> */}

      <div className="flex ml-12 gap-8 mt-4 mb-4 cursor-pointer">
        <span onClick={handleLike}>
          {liked ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorderIcon />}
          {likes}
        </span>
        <span onClick={handleComment}>
          <CommentIcon /> {comments}
        </span>
        <ShareIcon />
      </div>
      <hr className="border border-white-300" />
    </div>
  );
}
