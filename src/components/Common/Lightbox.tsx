import React, { useCallback } from 'react';
import { useKeydown } from '../../hooks/useKeydown';
import type { LightboxProps } from './Lightbox.types';

const Lightbox = ({ open, src, alt, onClose }: LightboxProps): React.ReactElement | null => {
  const stableClose = useCallback(onClose, [onClose]);
  useKeydown('Escape', stableClose, open);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-white/60 hover:text-white text-3xl leading-none"
        aria-label="Close preview"
      >
        <i className="bi bi-x-lg" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
};

export { Lightbox };
