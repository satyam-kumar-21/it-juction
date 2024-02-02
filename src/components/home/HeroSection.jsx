import React from 'react';

function HeroSection() {
  return (
    <>
    
    <div className="bg-green-400 text-blue-900 py-28">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="w-1/2 pr-8">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to IT JUCTION</h1>
          <p className="text-lg mb-6">
            Discover a world of possibilities and excitement. Our platform brings you the latest
            content, services, and community interactions.
          </p>
          <p className="text-lg mb-6">
            Whether you're looking for inspiration, information, or connections, we've got you covered.
          </p>
          <button className="bg-blue-900 text-white rounded-full py-2 px-6 hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Get Started
          </button>
        </div>
        <div className="w-1/2">
          <img src="https://imgs.search.brave.com/1wEFhVFJpfNJqCPooEueR9PFfC9kzbo9KCzftFXBhwY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/MzQ3MDk5Ni9waG90/by9icm93c2luZy1h/LXZpcnR1YWwtd29y/bGQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXN0R3VLUjFi/Wmw2UE5PTm5DQk5t/SVJibWs5UWNrRDU2/d1FiVHpHdU5HTlE9" alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
    </>
  );
}

export default HeroSection;
