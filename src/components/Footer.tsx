import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigateCollection: (index: number) => void;
}

const collectionLinks = [
  { label: 'The Floating Jacket', scene: 0 },
  { label: 'Savile Row Tailoring', scene: 3 },
  { label: 'Neo-Streetwear', scene: 2 },
  { label: 'After-Hours Velvet', scene: 4 },
  { label: 'Varanasi Raw Silk', scene: 5 },
];

export const Footer: React.FC<FooterProps> = ({ onNavigateCollection }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="w-full bg-[#050507] text-[#f7f5f0] border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
              <span className="font-display text-2xl font-bold tracking-widest text-white">
                ATELIER<span className="text-[#d4af37]">.</span>AI
              </span>
            </a>
            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Fashion in Motion. The intersection of generative artificial intelligence, Savile Row precision, and interactive 3D haute couture.
            </p>
            <div className="text-[11px] font-mono text-zinc-500">
              PARIS · LONDON · MILAN · TOKYO · NEW YORK
            </div>
          </div>

          {/* Links Cols (4 Cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8 text-xs font-mono">
            <div>
              <span className="text-[#d4af37] uppercase tracking-wider block mb-4">
                Collections
              </span>
              <ul className="space-y-2.5 text-zinc-400">
                {collectionLinks.map(({ label, scene }) => (
                  <li key={label}>
                    <a
                      href="#garment-sequence"
                      onClick={(event) => {
                        event.preventDefault();
                        onNavigateCollection(scene);
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[#d4af37] uppercase tracking-wider block mb-4">
                Atelier AI
              </span>
              <ul className="space-y-2.5 text-zinc-400">
                <li><a href="#ai-stylist" className="hover:text-white transition-colors">Neural Styling Studio</a></li>
                <li><a href="#complete-look" className="hover:text-white transition-colors">Anatomy of Style</a></li>
                <li><a href="#color-stories" className="hover:text-white transition-colors">Color Stories</a></li>
                <li><a href="#style-journal" className="hover:text-white transition-colors">Editorial Essays</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block">
              The Atelier Gazette
            </span>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Receive private invitations to seasonal drops, fabric archives, and neural styling upgrades.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#d4af37] text-black rounded-xl text-xs font-mono uppercase font-semibold hover:bg-white transition-colors flex items-center justify-center shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {error && <p className="text-xs text-rose-400 font-mono">{error}</p>}
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Welcome to the Atelier collective.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <div>
            © 2026 ATELIER AI · VELOURA COUTURE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-zinc-300 transition-colors">Privacy Charter</a>
            <a href="#hero" className="hover:text-zinc-300 transition-colors">Terms of Haute Couture</a>
            <a href="#hero" className="hover:text-zinc-300 transition-colors">Neural Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
