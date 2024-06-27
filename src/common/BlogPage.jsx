import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/HomePage/BlogCard";
import { db } from "../config/firebase";

const BlogPage = () => {
  const [Blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogDataArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));

        console.log("All Doctors/patient data:", blogDataArray);

        setBlogs(blogDataArray);
      } catch (error) {
        console.error("Error fetching account type:", error.message);
      }
    })();
  }, []);
  return (
    <div>
      {Blogs.map((blog, index) => {
        return <BlogCard key={index} data={blog} number={index}></BlogCard>;
      })}
    </div>
  );
};

export default BlogPage;
