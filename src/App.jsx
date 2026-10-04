import "./App.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim()) {
      setShowCard(true);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-indigo-950 to-purple-950 text-white flex items-center justify-center px-4 relative">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -bottom-20 -right-20"></div>

      {!showCard ? (
        /* ================= FIRST SCREEN ================= */
        <div className="relative z-10 w-full max-w-md">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-center">

            <div className="text-6xl mb-5 animate-bounce">
              🌸
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Assalam-o-Alaikum Sir! 👋
            </h1>

            <p className="text-gray-300 mb-8">
              A small surprise is waiting for you...
            </p>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Please enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition"
              />

              <button
                type="submit"
                className="w-full mt-5 py-4 rounded-2xl font-bold text-lg bg-linear-to-r from-purple-500 to-pink-500 hover:scale-[1.03] active:scale-95 transition duration-300 shadow-lg shadow-purple-500/20"
              >
                Open Your Surprise 🎁
              </button>

            </form>

            <p className="text-xs text-gray-500 mt-6">
              Made with respect & gratitude ❤️
            </p>

          </div>
        </div>
      ) : (
        /* ================= TEACHER CARD ================= */
        <div className="relative z-10 w-full max-w-3xl py-10">

          {/* Floating Decorations */}
          <div className="absolute -top-4 left-5 text-3xl animate-bounce">
            ✨
          </div>

          <div className="absolute top-10 right-5 text-3xl animate-pulse">
            🎈
          </div>

          <div className="absolute bottom-10 left-0 text-3xl animate-pulse">
            ⭐
          </div>

          <div className="absolute bottom-5 right-0 text-3xl animate-bounce">
            🎉
          </div>

          {/* Main Glass Card */}
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-4xl p-7 md:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.45)] text-center">

            {/* Top Badge */}
            <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-purple-200 mb-6">
              ✨ A Special Message For You ✨
            </div>

            <h1 className="text-4xl md:text-6xl font-black bg-linear-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Happy Teacher's Day
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mt-4">
              Dear {name} Sir ❤️
            </h2>

            <p className="text-gray-300 mt-3">
              Thank you for being more than just a teacher.
            </p>

            {/* Cake */}
            <div className="relative flex justify-center my-10">

              <div className="text-[110px] md:text-[150px] drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] animate-[bounce_2s_infinite]">
                🎂
              </div>

            </div>

            {/* Dua */}
            <div className="max-w-2xl mx-auto bg-black/20 border border-white/10 rounded-3xl p-6 md:p-8">

              <p className="text-lg md:text-xl leading-8 text-gray-200">
                May Allah always bless you with good health, happiness,
                success and endless respect. May Allah reward you for
                every lesson you teach, every student you guide and every
                effort you make to build our future. 🤲
              </p>

              <p className="mt-5 text-purple-300 font-semibold">
                Ameen 🤲✨
              </p>

            </div>

            {/* From */}
            <div className="mt-8">

              <p className="text-gray-400 text-sm">
                With Respect & Best Wishes
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-2">
                ROMAN ALI
              </h3>

            </div>

            {/* Back Button */}
            <button
              onClick={() => setShowCard(false)}
              className="mt-8 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition"
            >
              ← Back
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

