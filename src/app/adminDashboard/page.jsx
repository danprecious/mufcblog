import Greet from "./components/greet";
import CreatePostInput from "./components/createPostInput";
import Analytics from "./components/analytics";
import axios from "axios";
import { getAllPosts } from "../api/_queries/getPosts";

const AdminDashboard = async () => {
  const response = await axios.get("http://localhost:3000/api/fetchPosts");
  
  // const postData = JSON.parse(response.data); 
  // console.log(postData);
  
  const communityMembers = [
    {
      id: "1",
      name: "Dan",
    },
    {
      id: "2",
      name: "Jane",
    },
  ];

  return (
    <div className="md:px-10 py-2 px-3">
      <div className="mb-8">
        <Greet />
      </div>

      <div className="mb-16">
        <CreatePostInput />
      </div>

      <div className="mt-[2rem]">
        <Analytics posts={response.data} community={communityMembers} />
      </div>
    </div>
  );
};

export default AdminDashboard;
