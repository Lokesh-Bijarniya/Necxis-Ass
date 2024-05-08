"use client"
import React, { useState, useEffect, useRef } from "react";
import Card from "./Components/Card";
import axios from 'axios';

import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import RoomIcon from "@mui/icons-material/Room";


export default function Home() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      if (Array.isArray(response.data.products)) {
        setPosts(response.data.products.slice(0));
      } else {
        console.error("Data is not an array:", response.data.products);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };



  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleText = (e) => {
    setText(e.target.value);
  }

  const handlePost = ()=>{
    alert("Upload Successfully")
     setText("");
  }

  return (
    <div className="ml-10 w-3/4 bg-gray-500">
       <span className="flex gap-4">
        <img
          src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="h-16 w-16 rounded-full mt-6 ml-4"
        />
        <textarea
          placeholder=" What is happening!"
          value={text}
          onChange={handleText}
          className="border-2 rounded-lg h-24 w-2/3 mt-6"
        />
      </span>
      <div className="w-full ml-28 pt-3 flex gap-4 cursor-pointer">
        <span onClick={handleImageClick}>
          <ImageIcon/>
        </span>
        <GifBoxIcon />
        <InsertEmoticonIcon />
        <RoomIcon />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
        />

        <button
          className="relative w-16 bg-sky-500 text-white rounded-full p-2 left-80"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
      <hr className="mt-3 w-full border" />


      {posts.map((post) => (
        <Card
          key={post.id}
          profile={post.images[2]}
          title={post.title}
          description={post.description}
          imageUrl={post.thumbnail}
        
        />
      ))}
    </div>
  );
}
