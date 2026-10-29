import React from 'react';
import { BookOpen, Sparkles, ArrowRight, Clock } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journalArticles';

export const StyleJournalSection: React.FC = () => {
  return (
    <section id="style-journal" className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#d4af37] font-mono tracking-widest uppercase mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Haute Perspectives</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-impact tracking-normal uppercase text-white leading-none">
              STYLE <span className="font-editorial italic font-light text-gold-gradient tracking-tight">JOURNAL</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Curated essays, tailoring histories, and seasonal textile guides from the Atelier AI editorial desk.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-[#d4af37]/50 transition-all duration-700 flex flex-col justify-between cursor-pointer shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden bg-zinc-900 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-mono text-[#d4af37] uppercase border border-white/10">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 mb-2.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-2xl font-editorial text-white group-hover:text-[#d4af37] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light mt-2 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-zinc-400">By {article.author.split('—')[0]}</span>
                  <span className="text-[#d4af37] font-medium flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                    Read Essay <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
