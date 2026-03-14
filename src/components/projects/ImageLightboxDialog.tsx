import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { X } from "lucide-react";

interface Props {
  image: string | null;
  onClose: () => void;
}

const ImageLightboxDialog = ({
  image,
  onClose,
}: Props) => {
  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] max-h-[95vh] bg-transparent border-none shadow-none p-0 [&>button]:hidden"
      >
        <div className="relative flex items-center justify-center">

          <button
            className="absolute top-2 right-2 md:top-4 md:right-4 z-20 p-2 rounded-full bg-muted/80 backdrop-blur hover:bg-accent transition"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {image && (
            <img
              src={image}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightboxDialog;
