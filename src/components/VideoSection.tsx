import React from 'react';
import { Music, Play, SkipBack, SkipForward, Youtube, Film } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      {/* Fondo decorativo similar al hero */}
      <div className="absolute inset-0 opacity-30 pointer-events-none -z-10">
        <img src="/Fondo.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-pink-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-300 rounded-full blur-xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Spotify-style Music Player */}
          <a
            href="https://open.spotify.com/playlist/4eVGL7f7xOTvKse5GtXzJQ?si=pDefIbbjRjic0nybBw9C_g&pi=E26tlIcoTmaC-"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/80 backdrop-blur-md rounded-3xl p-8 text-purple-900 shadow-xl border border-purple-100 transition-transform hover:scale-105 focus:scale-105 outline-none"
            style={{ textDecoration: 'none' }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center">
                <img src="/Colibrí.png" alt="Colibrí Logo" className="h-8 w-auto" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Banda Sonora Oficial</h3>
                <p className="text-pink-500">Festival de Cine Inclusivo</p>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm">Diversidad en Pantalla</span>
                <span className="text-sm text-pink-400">3:24</span>
              </div>
              <div className="w-full bg-pink-100 rounded-full h-2">
                <div className="bg-pink-400 rounded-full h-2 w-1/3"></div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <button className="hover:scale-110 transition-transform" tabIndex={-1} type="button">
                <SkipBack className="w-6 h-6 text-pink-400" />
              </button>
              <button className="bg-pink-400 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform shadow-lg" tabIndex={-1} type="button">
                <Play className="w-5 h-5 ml-1" />
              </button>
              <button className="hover:scale-110 transition-transform" tabIndex={-1} type="button">
                <SkipForward className="w-6 h-6 text-pink-400" />
              </button>
            </div>
            <p className="text-center text-sm text-pink-400 mt-4">
              Disponible en Spotify
            </p>
          </a>

          {/* Main Festival Video */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl overflow-hidden shadow-2xl border border-purple-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-purple-900 p-8">
                  <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Film className="w-8 h-8 text-pink-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Trailer Oficial 2025</h3>
                  <p className="text-lg mb-6">Festival de Cine Inclusivo</p>
                  <button className="bg-pink-400/80 hover:bg-pink-500/90 rounded-full w-16 h-16 flex items-center justify-center transition-colors shadow-lg">
                    <Play className="w-6 h-6 ml-1 text-white" />
                  </button>
                </div>
              </div>
              
              {/* YouTube-style overlay */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <Youtube className="w-5 h-5 text-pink-500" />
                <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                  Watch on YouTube
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;