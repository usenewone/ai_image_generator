import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ChevronDown, 
  Mic, 
  Copy, 
  Download, 
  Camera, 
  Palette, 
  User,
  Code,
  Star,
  Layers,
  Mail,
  Heart,
  Zap,
  Globe,
  Shield,
  Cpu
} from 'lucide-react';

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

const FloatingParticle: React.FC<{ delay: number }> = ({ delay }) => (
  <div 
    className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }}
  />
);

const App: React.FC = () => {
  const [prompt, setPrompt] = useState('cat image');
  const [selectedStyle, setSelectedStyle] = useState<StyleOption | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
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
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
    console.log('Generating image with prompt:', prompt, 'and style:', selectedStyle?.name || 'Default');
  };

  const techStack = [
    { name: 'React', color: 'bg-blue-500', icon: <Code className="w-4 h-4" /> },
    { name: 'TypeScript', color: 'bg-blue-600', icon: <Code className="w-4 h-4" /> },
    { name: 'Tailwind CSS', color: 'bg-cyan-500', icon: <Palette className="w-4 h-4" /> },
    { name: 'n8n Workflows', color: 'bg-purple-500', icon: <Zap className="w-4 h-4" /> },
    { name: 'Vite', color: 'bg-orange-500', icon: <Zap className="w-4 h-4" /> },
    { name: 'Lucide Icons', color: 'bg-gray-600', icon: <Star className="w-4 h-4" /> },
    { name: 'AI APIs', color: 'bg-green-500', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Modern Web', color: 'bg-pink-500', icon: <Globe className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-grid-pattern animate-slide"></div>
      </div>

      <div className="relative z-10 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-8 animate-fadeInDown">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-spin-slow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">AI Studio</span>
            </div>
            <button
              onClick={() => setShowAbout(!showAbout)}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-2 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <User className="w-5 h-5" />
              About
            </button>
          </nav>

          {!showAbout ? (
            <>
              {/* Header */}
              <div className="text-center mb-8 animate-fadeInUp">
                <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <div className="relative">
                    <Sparkles className="w-12 h-12 text-blue-400 animate-bounce" />
                    <div className="absolute inset-0 w-12 h-12 text-purple-400 animate-ping opacity-75">
                      <Sparkles className="w-12 h-12" />
                    </div>
                  </div>
                  AI Image Generator
                </h1>
                <p className="text-xl text-purple-200 animate-pulse">Create stunning images with AI-powered generation</p>
                <div className="mt-4 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-shimmer"></div>
                </div>
              </div>

              {/* Input Section */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-6 border border-white/20 shadow-2xl animate-slideInLeft hover:shadow-purple-500/20 transition-all duration-500">
                {/* Prompt Input */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 text-white font-medium mb-3 text-lg">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    Describe Your Vision
                  </label>
                  <div className="relative group">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe the image you want to create..."
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/60 resize-none h-28 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 group-hover:bg-white/15"
                    />
                    <button className="absolute right-4 top-4 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110">
                      <Mic className="w-6 h-6" />
                    </button>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Style Dropdown */}
                <div className="mb-8">
                  <label className="flex items-center gap-2 text-white font-medium mb-3 text-lg">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Palette className="w-4 h-4 text-white" />
                    </div>
                    Art Style (Optional)
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-left text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent flex items-center justify-between transition-all duration-300 hover:bg-white/15 hover:scale-[1.02]"
                    >
                      <span className={selectedStyle ? 'text-white' : 'text-white/60'}>
                        {selectedStyle ? selectedStyle.name : 'Select a style...'}
                      </span>
                      <ChevronDown 
                        className={`w-6 h-6 text-white/60 transition-all duration-300 ${
                          isDropdownOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                        }`} 
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 max-h-80 overflow-y-auto animate-slideInDown">
                        {Object.entries(groupedStyles).map(([category, styles]) => (
                          <div key={category} className="p-3">
                            <div className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-blue-400 border-b border-white/10">
                              {category === 'Artistic / Illustration' && <Palette className="w-4 h-4" />}
                              {category === 'Photography / Vintage' && <Camera className="w-4 h-4" />}
                              {category === 'Futuristic / Tech' && <Sparkles className="w-4 h-4" />}
                              {category}
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                              {styles.map((style) => (
                                <button
                                  key={style.id}
                                  onClick={() => handleStyleSelect(style)}
                                  className="flex items-center gap-2 px-4 py-3 text-sm text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-left hover:scale-105"
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
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6" />
                      Generate Image
                    </>
                  )}
                </button>
              </div>

              {/* Generated Images Section */}
              <div 
                className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl transition-all duration-500 ease-in-out animate-slideInRight ${
                  isDropdownOpen ? 'mt-80' : 'mt-0'
                }`}
              >
                <h2 className="flex items-center gap-3 text-white font-medium text-2xl mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  Generated Images
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {generatedImages.map((image, index) => (
                    <div 
                      key={image.id} 
                      className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fadeInUp"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="relative group">
                        <img
                          src={image.url}
                          alt={image.prompt}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-3 left-3">
                          <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
                            {image.style}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-white/80 text-sm mb-4 line-clamp-2">{image.prompt}</p>
                        <div className="flex gap-3">
                          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105">
                            <Copy className="w-4 h-4" />
                            Copy
                          </button>
                          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105">
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* About Section */
            <div className="animate-fadeIn">
              {/* About Header */}
              <div className="text-center mb-12 animate-fadeInDown">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">About AI Studio</h1>
                <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                  Crafted with passion for innovation and excellence in AI-powered creativity
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Developer Section */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl animate-slideInLeft hover:shadow-purple-500/20 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Developer</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">Vraj Sondagar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-white/80">vrajsondagar@gmail.com</span>
                    </div>
                  </div>

                  <p className="text-white/80 mt-6 leading-relaxed">
                    Passionate full-stack developer specializing in AI integration and modern web technologies. 
                    Dedicated to creating innovative solutions that bridge the gap between artificial intelligence 
                    and user experience.
                  </p>
                </div>

                {/* Project Features */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl animate-slideInRight hover:shadow-purple-500/20 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Project Features</h2>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: <Cpu className="w-5 h-5" />, title: 'AI-Powered Generation', desc: 'Advanced AI models for high-quality image creation' },
                      { icon: <Palette className="w-5 h-5" />, title: 'Multiple Art Styles', desc: 'Comprehensive collection of artistic styles and themes' },
                      { icon: <Layers className="w-5 h-5" />, title: 'Modern UI/UX', desc: 'Modern, responsive design with smooth animations' },
                      { icon: <Mic className="w-5 h-5" />, title: 'Voice Input', desc: 'Speak your prompts with accurate voice recognition' },
                      { icon: <Zap className="w-5 h-5" />, title: 'n8n Integration', desc: 'Seamless workflow automation and API integration' }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-medium">{feature.title}</h3>
                          <p className="text-white/70 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl mb-12 animate-slideInUp hover:shadow-purple-500/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Technology Stack</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {techStack.map((tech, index) => (
                    <div 
                      key={index}
                      className={`${tech.color} rounded-xl p-4 text-white font-medium text-center hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fadeInUp flex items-center justify-center gap-2`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech.icon}
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl text-center animate-slideInUp hover:shadow-purple-500/20 transition-all duration-500">
                <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Interested in collaborating or have questions about this project? Feel free to reach out!
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2 mx-auto">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;