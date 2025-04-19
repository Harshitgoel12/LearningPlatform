import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function ThumbnailUploader({setImage}) {
  const [preview, setPreview] = useState(null);


  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setImage(acceptedFiles[0]);
    console.log(acceptedFiles[0])
    // Optional: send file to Cloudinary/backend here
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    },
    maxFiles: 1
  });

  return (
    <div className="text-white space-y-2 flex flex-col items-center">
      <label className="font-semibold">Course Thumbnail <span className="text-red-500">*</span></label>
      
      <div
        {...getRootProps()}
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-md w-11/12  bg-[#1e293b] hover:border-yellow-400 cursor-pointer transition duration-200"
        style={{ height: 450 }}
      >
        <input {...getInputProps()}  />
        
        {preview ? (
          <img src={preview} alt="preview" className="w-fit h-fit object-cover rounded-md" />
        ) : (
          <>
            <div className="text-yellow-400 text-4xl mb-2">⬆️</div>
            <p>Drag and drop an image, or <span className="text-yellow-400 font-semibold">click to Browse</span> a file</p>
            <div className="text-gray-400 text-sm mt-2 flex gap-4">
              <span>• Aspect ratio 16:9</span>
              <span>• Recommended size 1024x576</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
