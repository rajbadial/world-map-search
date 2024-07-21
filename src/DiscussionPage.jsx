// src/DiscussionPage.js
import React, { useState } from 'react';
import { generateUsername } from './utils/generateUsername';
import './DiscussionPage.css';

const DiscussionPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username] = useState(generateUsername());

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, username }]);
      setNewComment('');
    }
  };

  return (
    <div className="discussion-page">
      <h2>Discussion</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={newComment}
          onChange={handleInputChange}
          placeholder="Write your comment here"
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>
      <div className="comments-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <strong>{comment.username}:</strong> {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionPage;
