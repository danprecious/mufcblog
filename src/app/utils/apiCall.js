import axios from "axios";

export async function GetPosts() {
  try {
    const response = await axios("http://localhost:3000/posts");
    const data = await response.data;
    // console.log(response)
    return data;
  } catch (error) {
    return error;
  }
}

export async function GetOnePost(article) {
  try {
    const response = await axios(`http://localhost:3000/posts/${article}`)
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("Error getting this post");
    return;
  }
}

