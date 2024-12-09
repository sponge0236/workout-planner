// src/pages/Community.js
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { saveData, loadData } from '../utils/storage';

function Community() {
    const [posts, setPosts] = useState(loadData('posts') || []);
    const [content, setContent] = useState('');

    const addPost = () => {
        const newPost = { content, date: new Date().toLocaleString() };
        const updatedPosts = [newPost, ...posts];
        setPosts(updatedPosts);
        saveData('posts', updatedPosts);
        setContent('');
    };

    return (
        <div style={{ padding: 16 }}>
            <h2>Memo</h2>
            <TextField
                value={content}
                onChange={(e) => setContent(e.target.value)}
                label="Share something..."
                fullWidth
                multiline
                rows={4}
            />
            <Button
                onClick={addPost}
                variant="contained"
                color="primary"
                style={{ marginTop: 8 }}
            >
                Post
            </Button>
            <List>
                {posts.map((post, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={post.content} secondary={post.date} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Community;
