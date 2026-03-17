import React, { useEffect, useState } from 'react'

const Posts = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getAllPosts() {

        // Runtime error prevent
        try {
            setLoading(true);
            let response = await fetch(apiUrl);
            response = await response.json();
            // console.log(response.slice(0, 5));
            setPosts(response.slice(0, 5));
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        console.log("PostComp initialized");
        getAllPosts();
    }, []);
    // displaying the state variables posts
    console.log(posts);
    return (
        <div className='container card p-3 m-3'>
            {loading && (<p align="center" className='text-danger'><img src='./images/sample.gif' height="111px" width="111px" /></p>)}
            {!loading && (
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Title:</th>
                            <th>Description:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={index}>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Posts;