import { ChevronDown, ChevronUp, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import { useState } from "react";

interface Props {
  images: string[];
  onSelectImage: (img: string) => void;
}

const ExtraImagesGallery = ({ images, onSelectImage }: Props) => {
  const [showAllImages, setShowAllImages] = useState(false);

  const [verticalImages, setVerticalImages] = useState<Record<string, boolean>>(
    {}
  );

  const handleImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement>,
    src: string
  ) => {
    const img = e.currentTarget;

    const isVertical = img.naturalHeight > img.naturalWidth;

    setVerticalImages((prev) => ({
      ...prev,
      [src]: isVertical,
    }));
  };

  if (images.length <= 1) return null;

  return (
    <>
      {showAllImages && (
        <div className="columns-2 gap-3 space-y-3 animate-in fade-in-0 slide-in-from-top-4 duration-300">
          {images.slice(1).map((img, i) => {
            const isVertical = verticalImages[img];

            return (
              <div
                key={i}
                onClick={() => onSelectImage(img)}
                className={`
                  relative
                  group/img
                  cursor-pointer
                  overflow-hidden
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  ${
                    isVertical
                      ? "bg-white border p-2"
                      : ""
                  }
                `}
              >
                <img
                  src={img}
                  onLoad={(e) => handleImageLoad(e, img)}
                  className="
                    w-full
                    max-h-[300px]
                    object-contain
                    transition-transform
                    duration-300
                    group-hover/img:scale-105
                  "
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-background/50">
                  <ZoomIn size={22} className="text-foreground" />
                </div>
              </div>
            );
          })}
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
