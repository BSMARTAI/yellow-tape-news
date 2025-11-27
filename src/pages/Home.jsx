import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breaking News Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-bold animate-pulse">
        🚨 BREAKING: Global justice platform now live
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-tape-500 rounded-2xl mb-8">
            <span className="text-black font-bold text-4xl">YT</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="text-yellow-tape-500">YELLOW TAPE</span>
            <br />
            <span className="text-white">NEWS</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            "GIVING A VOICE & PLATFORM TO THOSE AFFECTED BY INJUSTICES"
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The world's first community-powered justice platform. Document crime, war crimes, 
            corruption, and demand accountability—globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Join the Movement
            </button>
            <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-tape-500 mb-2">25K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="glass-effect rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-tape-500 mb-2">10K+</div>
              <div className="text-sm text-gray-400">Cases Documented</div>
            </div>
            <div className="glass-effect rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-tape-500 mb-2">$2M+</div>
              <div className="text-sm text-gray-400">Raised for Families</div>
            </div>
            <div className="glass-effect rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-tape-500 mb-2">500+</div>
              <div className="text-sm text-gray-400">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Tools for <span className="text-yellow-tape-500">Global Justice</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Document injustice anywhere in the world. From local crime to international war crimes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-effect rounded-xl p-6 hover:border-yellow-tape-500 border border-transparent transition-all">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-tape-500">Live Reporting</h3>
              <p className="text-gray-400 text-sm">
                Stream and upload real-time footage from anywhere on Earth
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 hover:border-yellow-tape-500 border border-transparent transition-all">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-tape-500">Global Coverage</h3>
              <p className="text-gray-400 text-sm">
                War crimes, corruption, and injustice documented worldwide
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 hover:border-yellow-tape-500 border border-transparent transition-all">
              <div className="text-4xl mb-4">🕊️</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-tape-500">Memorial Pages</h3>
              <p className="text-gray-400 text-sm">
                Honor victims worldwide with tribute spaces and support
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 hover:border-yellow-tape-500 border border-transparent transition-all">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-tape-500">Protected Sources</h3>
              <p className="text-gray-400 text-sm">
                Anonymous uploads, encryption, and whistleblower protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-yellow-tape-500">Underground Railroad</span> for Truth
          </h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p className="text-xl font-semibold text-yellow-tape-500">
              Truth Without Borders. Justice Without Censorship.
            </p>
            <p>
              Yellow Tape News is the world's first decentralized justice platform. 
              We document what mainstream media won't show—from US police brutality 
              to international war crimes, corporate corruption to government abuse.
            </p>
            <p className="text-2xl font-bold text-white mt-8">
              If you know, you know. 🚂
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-yellow-tape-500">Document Truth?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join the global movement for accountability and justice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Get Started Now
            </button>
            <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              View Platform
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2024 Yellow Tape News. Powered by BSMART AI. All rights reserved.</p>
          <p className="mt-2">Open Source. Decentralized. Unstoppable.</p>
        </div>
      </footer>
    </div>
  )
}
```

**Commit message:** "Add Home page"

---

## **✅ THAT'S THE CORE - YOU'RE READY TO DEPLOY!**

### **After you create these 10 files:**

1. Your repo will have the basic structure
2. Go to **Vercel.com**
3. Sign in with GitHub
4. Click "New Project"
5. Select "yellow-tape-news"
6. Click "Deploy"
7. **BOOM - YOUR SITE IS LIVE!** 🚀

---

## **📋 CHECKLIST:**

Copy this and check off as you go:
```
□ package.json
□ vite.config.js
□ tailwind.config.js
□ postcss.config.js
□ index.html
□ .gitignore
□ src/main.jsx
□ src/index.css
□ src/App.jsx
□ src/pages/Home.jsx
