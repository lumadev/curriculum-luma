import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  index: number | null;
  onClose: () => void;
  setIndex: (i: number) => void;
}

const ImageLightboxDialog = ({
  images,
  index,
  onClose,
  setIndex,
}: Props) => {
  const isOpen = index !== null;

  const prev = () => {
    if (index === null) return;
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    if (index === null) return;
    setIndex((index + 1) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] max-h-[95vh] bg-transparent border-none shadow-none p-0 [&>button]:hidden"
      >
        <div className="relative flex items-center justify-center">

          <DialogTitle className="sr-only">
            Image lightbox
          </DialogTitle>

          {/* CLOSE */}
          <button
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-muted/70 backdrop-blur transition hover:bg-accent/90 hover:scale-105 shadow-md"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {/* PREV */}
          {isOpen && (
            <button
              className="absolute left-2 md:left-6 z-20 p-3 rounded-full bg-muted/50 backdrop-blur transition hover:bg-primary/80 hover:scale-110 shadow-lg"
              onClick={prev}
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* IMAGE */}
          {isOpen && index !== null && (
            <img
              src={images[index]}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-xl"
            />
          )}

          {/* NEXT */}
          {isOpen && (
            <button
              className="absolute right-2 md:right-6 z-20 p-3 rounded-full bg-muted/50 backdrop-blur transition hover:bg-primary/80 hover:scale-110 shadow-lg"
              onClick={next}
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* COUNTER */}
          {isOpen && index !== null && (
            <div className="absolute bottom-4 text-sm bg-muted/70 px-4 py-1 rounded-full border border-muted/40 backdrop-blur shadow-sm">
              {index + 1} / {images.length}
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightboxDialog;
