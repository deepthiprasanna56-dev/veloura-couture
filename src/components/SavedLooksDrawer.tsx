import React from 'react';
import { X, Bookmark, Trash2, Eye, ArrowRight } from 'lucide-react';
import { Outfit } from '../types/fashion';

interface SavedLooksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedOutfits: Outfit[];
  onRemove: (outfit: Outfit) => void;
  onViewOutfit: (outfit: Outfit) => void;
}

export const SavedLooksDrawer: React.FC<SavedLooksDrawerProps> = ({
  isOpen,
  onClose,
  savedOutfits,
  onRemove,
  onViewOutfit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md glass-panel-gold bg-[#0a0a0d]/95 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Bookmark className="w-4 h-4 text-[#d4af37]" />
                <h3 className="text-xl font-serif text-white">Your Saved Closet</h3>
                <span className="text-xs font-mono text-zinc-400">
                  ({savedOutfits.length})
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="mt-6 space-y-4 max-h-[70vh] overflow-y-auto pr-1">
              {savedOutfits.length === 0 ? (
                <div className="py-20 text-center space-y-3">
                  <Bookmark className="w-10 h-10 text-zinc-600 mx-auto" />
                  <p className="text-sm font-serif text-zinc-400">No saved looks yet</p>
                  <p className="text-xs text-zinc-500 font-light max-w-xs mx-auto">
                    Click the bookmark icon on any outfit card or 3D scene to save it to your personal wardrobe edit.
                  </p>
                </div>
              ) : (
                savedOutfits.map((outfit) => (
                  <div
                    key={outfit.id}
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all flex items-center justify-between gap-3 group"
                  >
                    <img
                      src={outfit.image}
                      alt={outfit.name}
                      className="w-16 h-20 object-cover rounded-xl shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono text-[#d4af37] uppercase block">
                        {outfit.category}
                      </span>
                      <h4 className="text-sm font-serif text-white truncate">{outfit.name}</h4>
                      <p className="text-[11px] text-zinc-400 font-light truncate mt-0.5">
                        {outfit.garments.length} pieces · {outfit.silhouette}
                      </p>

                      <button
                        onClick={() => {
                          onViewOutfit(outfit);
                          onClose();
                        }}
                        className="text-xs text-[#d4af37] font-medium flex items-center gap-1 mt-2 hover:underline"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Inspect in 3D</span>
                      </button>
                    </div>

                    <button
                      onClick={() => onRemove(outfit)}
                      className="p-2 rounded-xl text-zinc-500 hover:text-rose-400 transition-colors"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#d4af37] transition-all"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
