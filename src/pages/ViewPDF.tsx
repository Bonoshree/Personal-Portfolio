import { useSearchParams } from "react-router-dom";

export default function ViewPDF() {
  const [searchParams] = useSearchParams();
  const file = searchParams.get("file");

  if (!file) {
    return <p className="text-center mt-20">No file specified.</p>;
  }

  return (
    <div className="w-full h-screen bg-gray-100">
      <iframe
        src={file}
        title="PDF Viewer"
        className="w-full h-full border-0"
      />
    </div>
  );
}
