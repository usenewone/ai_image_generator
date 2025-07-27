import React, { useState } from 'react';
import { Sparkles, ChevronDown, Mic, Copy, Download, Camera, Palette } from 'lucide-react';

interface StyleOption {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

const styleOptions: StyleOption[] = [
  // Artistic / Illustration
  { id: 'cartoon', name: 'Cartoon', category: 'Artistic / Illustration', icon: <Palette className="w-4 h-4" /> },
  { id: 'anime', name: 'Anime', category: 'Artistic / Illustration', icon: <Sparkles className="w-4 h-4" /> },
  { id: '3d-render', name: '3D Render', category: 'Artistic / Illustration', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'digital-painting', name: 'Digital Painting', category: 'Artistic / Illustration', icon: <Palette className="w-4 h-4" /> },
  { id: 'sketch', name: 'Sketch / Line Art', category: 'Artistic / Illustration', icon: <Palette className="w-4 h-4" /> },
  { id: 'pixel-art', name: 'Pixel Art', category: 'Artistic / Illustration', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'watercolor', name: 'Watercolor', category: 'Artistic / Illustration', icon: <Palette className="w-4 h-4" /> },
  { id: 'oil-painting', name: 'Oil Painting', category: 'Artistic / Illustration', icon: <Palette className="w-4 h-4" /> },
  { id: 'low-poly', name: 'Low Poly', category: 'Artistic / Illustration', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'fantasy-art', name: 'Fantasy Art', category: 'Artistic / Illustration', icon: <Sparkles className="w-4 h-4" /> },
  
  // Photography / Vintage
  { id: 'vintage', name: 'Black & White / Vintage', category: 'Photography / Vintage', icon: <Camera className="w-4 h-4" /> },
  { id: 'polaroid', name: 'Polaroid', category: 'Photography / Vintage', icon: <Camera className="w-4 h-4" /> },
  { id: 'film-noir', name: 'Film Noir', category: 'Photography / Vintage', icon: <Camera className="w-4 h-4" /> },
  { id: 'sepia', name: 'Sepia', category: 'Photography / Vintage', icon: <Camera className="w-4 h-4" /> },
  
  // Futuristic / Tech
  { id: 'cyberpunk', name: 'Cyberpunk', category: 'Futuristic / Tech', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'synthwave', name: 'Synthwave / Retrowave', category: 'Futuristic / Tech', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'neon', name: 'Neon', category: 'Futuristic / Tech', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'glitch', name: 'Glitch Art', category: 'Futuristic / Tech', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'isometric', name: 'Isometric', category: 'Futuristic / Tech', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'steampunk', name: 'Steampunk', category: 'Futuristic / Tech', icon: <Sparkles className="w-4 h-4" /> },
];

const App: React.FC = () => {
  const [prompt, setPrompt] = useState('cat image');
  const [selectedStyle, setSelectedStyle] = useState<StyleOption | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [generatedImages] = useState([
    {
      id: 1,
      url: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400',
      prompt: 'cat image',
      style: 'Default'
    }
  ]);

  const groupedStyles = styleOptions.reduce((acc, style) => {
    if (!acc[style.category]) {
      acc[style.category] = [];
    }
    acc[style.category].push(style);
    return acc;
  }, {} as Record<string, StyleOption[]>);

  const handleStyleSelect = (style: StyleOption) => {
    setSelectedStyle(style);
    setIsDropdownOpen(false);
  };

  const handleGenerate = () => {
    console.log('Generating image with prompt:', prompt, 'and style:', selectedStyle?.name || 'Default');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-blue-400" />
            AI Image Generator
          </h1>
          <p className="text-purple-200">Create stunning images with AI-powered generation</p>
        </div>

        {/* Input Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
          {/* Prompt Input */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-white font-medium mb-3">
              <Sparkles className="w-5 h-5" />
              Describe Your Vision
            </label>
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to create..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button className="absolute right-3 top-3 text-blue-400 hover:text-blue-300 transition-colors">
                <Mic className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Style Dropdown */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-white font-medium mb-3">
              <Palette className="w-5 h-5" />
              Art Style (Optional)
            </label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-left text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent flex items-center justify-between"
              >
                <span className={selectedStyle ? 'text-white' : 'text-white/60'}>
                  {selectedStyle ? selectedStyle.name : 'Select a style...'}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-all duration-300 ${
                    isDropdownOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto">
                  {Object.entries(groupedStyles).map(([category, styles]) => (
                    <div key={category} className="p-2">
                      <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-400 border-b border-white/10">
                        {category === 'Artistic / Illustration' && <Palette className="w-4 h-4" />}
                        {category === 'Photography / Vintage' && <Camera className="w-4 h-4" />}
                        {category === 'Futuristic / Tech' && <Sparkles className="w-4 h-4" />}
                        {category}
                      </div>
                      <div className="grid grid-cols-2 gap-1 mt-2">
                        {styles.map((style) => (
                          <button
                            key={style.id}
                            onClick={() => handleStyleSelect(style)}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-white/10 rounded-lg transition-colors text-left"
                          >
                            {style.icon}
                            {style.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Generate Image
          </button>
        </div>

        {/* Generated Images Section */}
        <div 
          className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transition-all duration-500 ease-in-out ${
            isDropdownOpen ? 'mt-80' : 'mt-0'
          }`}
        >
          <h2 className="flex items-center gap-2 text-white font-medium text-xl mb-4">
            <Sparkles className="w-6 h-6 text-blue-400" />
            Generated Images
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {generatedImages.map((image) => (
              <div key={image.id} className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
                <div className="relative group">
                  <img
                    src={image.url}
                    alt={image.prompt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                      {image.style}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80 text-sm mb-3">{image.prompt}</p>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-2 rounded-lg transition-colors">
                      <Copy className="w-4 h-4" />
                      Copy
                    </button>
                    <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;