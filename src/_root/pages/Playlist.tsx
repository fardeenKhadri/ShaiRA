export default function Playlist() {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">Our Playlist</h1>
        <p className="mb-8 text-center text-lg text-gray-600">
          Nezuko Chaan 🎍 Anatano Tameni 🍙
        </p>
        <div className="mx-auto max-w-2xl">
          <iframe className="rounded-xl" src="https://open.spotify.com/embed/playlist/3mfdxNBhVPyr5ISaqGGKiD" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    )
  }
  
  