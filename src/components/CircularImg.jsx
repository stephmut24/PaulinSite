export default function CircularImg({src, alt}) {
  return (
    <img
      className="h-96 w-96 bg-white border-4 rounded-full object-cover object-center"
      src={src}
      alt={alt}
    />
  );
}