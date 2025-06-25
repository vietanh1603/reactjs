import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const accessToken = localStorage.getItem('access');
            const response = await axios.get('https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/post/', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setPosts(response.data);
        } catch (error) {
            setError('Failed to fetch posts');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts().then();
    }, []);

    if (loading) return <div>Loading posts...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Post</h1>
            {posts.length > 0 ? (
                <div>
                    <h2>Posts ({posts.length})</h2>
                    <pre>{JSON.stringify(posts, null, 2)}</pre>
                </div>
            ) : (
                <p>Không có bài viết nào !</p>
            )}
        </div>
    );
};

export default Post;
