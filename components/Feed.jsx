'use client';

import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  console.log(data);
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {};
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
          placeholder="Search for a tag or username"
        />
      </form>

      <PromptCardList data={posts} handelTagClick={() => {}} />
    </section>
  );
};

export default Feed;
