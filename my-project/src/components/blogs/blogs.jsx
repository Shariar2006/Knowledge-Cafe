import { useEffect, useState } from "react";
import Blog from "../blog/blog";

const Blogs = () => {

    const [blogs, setblogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blogd => <Blog key={blogd.ID} blog={blogd}></Blog>)
            }
        </div>
    );
};

export default Blogs;