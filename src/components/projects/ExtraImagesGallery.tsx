interface Props {
  images: string[];
  onSelectImage: (index: number) => void;
}

const ExtraImagesGallery = ({ images, onSelectImage }: Props) => {
  if (images.length <= 1) return null;
  
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="relative cursor-pointer rounded overflow-hidden"
          onClick={() => onSelectImage(idx)}
        >
          <img src={img} className="w-full object-cover aspect-square" />
        </div>
      ))}
    </div>
  );
};

export default ExtraImagesGallery;
