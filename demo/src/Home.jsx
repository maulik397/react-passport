import React from 'react';
import {posts} from './data';
import Card from './Card';

function Home() {
  return (
    <div>
      <div className="Home">

        {posts.map(post=>(
            <Card key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default Home
