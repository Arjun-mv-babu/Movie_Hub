import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to handle trailer clicks
  const handleTrailerClick = (movie) => {
    // Option 1: If you have trailer_url in your database
    if (movie.trailer_url) {
      window.open(movie.trailer_url, '_blank');
      return;
    }

    // Option 2: Search YouTube automatically based on movie name
    const searchQuery = `${movie.movie_name} ${movie.movie_release_date?.substring(0, 4)} trailer`;
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
    window.open(youtubeSearchUrl, '_blank');
  };

  // Helper function to process image path
  const getImageUrl = (imagePath) => {
    console.log('Original image path:', imagePath);
    
    if (!imagePath || imagePath === 'dhbhd') {
      return "https://images.unsplash.com/photo-1489599485712-8cfd89a3d711?w=400";
    }
    
    // Clean up the path by removing carriage returns and extra spaces
    let cleanPath = imagePath.replace(/\r?\n/g, '').trim();
    
    // Handle paths starting with "/assets/images/"
    if (cleanPath.startsWith('/assets/images/')) {
      const finalUrl = `http://localhost:3001${cleanPath}`;
      console.log('Final image URL:', finalUrl);
      return finalUrl;
    }
    
    // Handle paths starting with "assets/images/" (without leading slash)
    if (cleanPath.startsWith('assets/images/')) {
      const finalUrl = `http://localhost:3001/${cleanPath}`;
      console.log('Final image URL:', finalUrl);
      return finalUrl;
    }
    
    // Handle old format "../assets/images/" - remove the ".."
    if (cleanPath.includes('assets/images/')) {
      cleanPath = cleanPath.replace('..', '');
      const finalUrl = `http://localhost:3001${cleanPath.startsWith('/') ? '' : '/'}${cleanPath}`;
      console.log('Final image URL:', finalUrl);
      return finalUrl;
    }
    
    // If it's already a full URL
    if (cleanPath.startsWith('http')) {
      console.log('Using full URL:', cleanPath);
      return cleanPath;
    }
    
    // Fallback to placeholder
    console.log('Using fallback image');
    return "https://images.unsplash.com/photo-1489599485712-8cfd89a3d711?w=400";
  };

  useEffect(() => {
    fetch('http://localhost:3001/movie/list')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('API Response:', data); // Debug log to see what you're getting
        
        // Handle different response formats
        let moviesList = [];
        
        if (Array.isArray(data)) {
          // If data is directly an array
          moviesList = data;
        } else if (data && Array.isArray(data.movies)) {
          // If data has a movies property that's an array
          moviesList = data.movies;
        } else if (data && Array.isArray(data.data)) {
          // If data has a data property that's an array
          moviesList = data.data;
        } else if (data && typeof data === 'object') {
          // If it's an object, try to find an array property
          const possibleArrays = Object.values(data).filter(val => Array.isArray(val));
          if (possibleArrays.length > 0) {
            moviesList = possibleArrays[0];
          }
        }
        
        setMovies(moviesList);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        console.error('Error fetching movies:', err);
        setError(err.message);
        setLoading(false);
        setMovies([]); // Ensure movies is always an array
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <h3 className="text-white text-lg">Loading Movies...</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-white text-xl mb-2">Error Loading Movies</h3>
          <p className="text-slate-400">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 min-h-screen">
      {/* Hero Section */}
      <div className="relative px-8 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Marvel</span>
            <span className="text-white"> Collection</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Discover and explore an incredible selection of cinematic masterpieces
          </p>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-bounce"></div>
      </div>

      {/* Movies Grid */}
      <div className="px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {Array.isArray(movies) && movies.map((movie, index) => (
            <div 
              key={movie.movie_id || index} 
              className="group bg-gradient-to-br from-slate-800/50 to-purple-800/30 rounded-3xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Movie Poster */}
              <div className="relative overflow-hidden">
                <img
                  src={getImageUrl(movie.movie_image)}
                  alt={movie.movie_name || 'Movie'}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    console.log('Image failed to load:', e.target.src);
                    e.target.src = "https://images.unsplash.com/photo-1489599485712-8cfd89a3d711?w=400";
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                    onClick={() => handleTrailerClick(movie)}
                  >
                    <span className="mr-2">▶</span>
                    Watch Trailer
                  </button>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  <span className="mr-1">⭐</span>
                  {movie.rating || '8.5'}
                </div>
              </div>

              {/* Movie Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {movie.movie_name || 'Unknown Title'}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center text-slate-300">
                    <span className="text-lg mr-3">👨‍🎬</span>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Director</div>
                      <div className="text-sm font-medium">{movie.movie_director || 'Unknown'}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-slate-300">
                    <span className="text-lg mr-3">📝</span>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Screenplay</div>
                      <div className="text-sm font-medium">{movie.movie_screenplay || 'Unknown'}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-slate-300">
                    <span className="text-lg mr-3">📅</span>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Release Date</div>
                      <div className="text-sm font-medium">
                        {movie.movie_release_date ? new Date(movie.movie_release_date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        }) : 'Unknown'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center">
                  <div className="flex items-center text-slate-400 text-xs">
                    <span className="mr-2">🕒</span>
                    Added {movie.createdAt ? new Date(movie.createdAt).toLocaleDateString() : 'Recently'}
                  </div>
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
                    HD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {(!Array.isArray(movies) || movies.length === 0) && !loading && !error && (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🎬</div>
            <h3 className="text-white text-2xl mb-4">No Movies Found</h3>
            <p className="text-slate-400 text-lg">Your movie collection is waiting to be filled with amazing films!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;