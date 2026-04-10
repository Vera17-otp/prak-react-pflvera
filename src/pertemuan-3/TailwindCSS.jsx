export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <FlexboxGrid />
      
      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-blue-950 mb-4 tracking-tight">
            Belajar Tailwind CSS 4
          </h1>
          <p className="text-gray-600 mb-6">Membangun antarmuka modern dengan utilitas kelas yang efisien.</p>
          <button className="bg-blue-950 text-orange-300 px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-orange-200/50 hover:-translate-y-1 transition-all duration-300">
            Mulai Belajar
          </button>
        </header>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Typography />
            <div className="flex gap-2">
               <BorderRadius />
            </div>
          </div>
          
          <div className="space-y-8">
            <Spacing />
            <BackgroundColors />
            <ShadowEffects />
          </div>
        </div>
      </main>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="sticky top-0 z-50 bg-blue-950/95 backdrop-blur-sm p-4 text-orange-300 shadow-xl">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter">TAILWIND<span className="text-white">LAB</span></h1>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-white transition-colors cursor-pointer">Home</li>
          <li className="hover:text-white transition-colors cursor-pointer">About</li>
          <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
        </ul>
        <button className="bg-orange-300 text-blue-950 px-5 py-1.5 rounded-full font-bold text-sm hover:bg-white transition-colors">
          Logout
        </button>
      </div>
    </nav>
  );
}

function Spacing() {
  return (
    <div className="group bg-blue-950 p-8 rounded-2xl shadow-2xl border-b-4 border-orange-300 transform transition-all hover:scale-[1.02]">
      <h2 className="text-white text-2xl font-bold mb-3">Spacing & Box</h2>
      <p className="text-orange-200/80 leading-relaxed">
        Mengatur ritme visual menggunakan <span className="font-mono bg-blue-900 px-1 rounded">p-6</span> dan <span className="font-mono bg-blue-900 px-1 rounded">m-4</span> untuk harmoni desain.
      </p>
    </div>
  );
}

function Typography() {
  return (
    <div className="p-2">
      <h2 className="text-xs uppercase tracking-[0.3em] text-orange-400 font-bold mb-2">Typography Guide</h2>
      <h1 className="text-4xl font-extrabold text-blue-950 leading-tight">
        Seni Mengelola <br/> <span className="text-orange-400 underline decoration-blue-950">Teks Modern</span>
      </h1>
      <p className="text-gray-600 mt-4 leading-relaxed italic">
        "Desain adalah komunikasi, dan tipografi adalah suaranya."
      </p>
    </div>
  );
}

function BorderRadius() {
  return (
    <div className="flex w-full overflow-hidden rounded-2xl shadow-lg">
      <button className="flex-1 bg-blue-950 text-orange-300 py-4 font-bold hover:bg-orange-300 hover:text-blue-950 transition-all border-r border-blue-900">
        ⬅ Left Side
      </button>
      <button className="flex-1 bg-blue-950 text-orange-300 py-4 font-bold hover:bg-orange-300 hover:text-blue-950 transition-all">
        Right Side ➡
      </button>
    </div>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-orange-300 p-8 rounded-2xl shadow-xl relative overflow-hidden group">
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/20 rounded-full transition-transform group-hover:scale-150 duration-700"></div>
      <h3 className="text-blue-950 text-2xl font-black mb-2">Vibrant Colors</h3>
      <p className="text-blue-900 font-medium">Penggunaan warna kontras tinggi untuk menarik perhatian user.</p>
    </div>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-rotate-1 transition-all duration-500 cursor-pointer group">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center text-orange-300 font-bold group-hover:bg-orange-300 group-hover:text-blue-950 transition-colors">
          !
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-950">Hover Interaction</h3>
          <p className="text-gray-500">Sentuh untuk melihat keajaiban.</p>
        </div>
      </div>
    </div>
  );
}