import { ChevronDown, ChevronUp, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import { useState } from "react";

interface Props {
  images: string[];
  onSelectImage: (img: string) => void;
}

const ExtraImagesGallery = ({ images, onSelectImage }: Props) => {
  const [showAllImages, setShowAllImages] = useState(false);

  if (images.length <= 1) return null;

  return (
    <>
      {showAllImages && (
        <div className="grid grid-cols-2 gap-3">
          {images.slice(1).map((img, i) => (
            <div
              key={i}
              className="relative group/img cursor-pointer overflow-hidden rounded-lg"
              onClick={() => onSelectImage(img)}
            >
              <img
                src={img}
                className="w-full object-contain aspect-video transition-transform duration-300 group-hover/img:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-background/50">
                <ZoomIn size={22} className="text-foreground" />
              </div>
            </div>
          ))}
        </div>
      )}

      <Button
        variant="outline"
        onClick={() => setShowAllImages(!showAllImages)}
      >
        {showAllImages ? (
          <>
            <ChevronUp size={16} />
            View less
          </>
        ) : (
          <>
            <ChevronDown size={16} />
            View more
          </>
        )}
      </Button>
    </>
  );
};

export default ExtraImagesGallery;