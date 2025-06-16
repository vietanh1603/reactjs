import React from 'react';
import PostItem from '../PostItem/PostItem';

const PostList = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <PostItem
                    key={post.id}
                    title={post.title}
                    content={post.content}
                />
            ))}
        </>
    )
}
export default PostList