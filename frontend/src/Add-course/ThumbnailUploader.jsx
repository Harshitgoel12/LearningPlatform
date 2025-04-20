import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { TbPlayerPlayFilled } from "react-icons/tb";

export default function ThumbnailUploader({setImage,type}) {
  const [preview, setPreview] = useState(null);
    const [isvideo,setIsvideo]=useState(false);
    const [playVideo,setPlayVideo]=useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
  console.log(file)
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    if(type=="video")
      setIsvideo(true);
    setImage(acceptedFiles[0]);
    console.log(acceptedFiles[0])
    // Optional: send file to Cloudinary/backend here
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
        [` ${type}/*`]: []
    },
    maxFiles: 1
  });


  const handlerController=()=>{
    setPlayVideo(true);
  }

  return (
    <div className="text-white space-y-2 flex flex-col items-center">
      <label className="font-semibold text-start w-11/12 mt-2">Course Thumbnail <span className="text-red-500">*</span></label>
      
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-md w-11/12  ${isvideo?"bg-black":"bg-[#1e293b]"} hover:border-yellow-400 cursor-pointer transition duration-200`}
        style={{ height: 450 }}
      >
        {isvideo&&<div className={`px-8 bg-[#3A4350] ${playVideo?"hidden":"block"} absolute top-32 left-16  border-white border-2 s py-2 rounded-lg`}>
          <TbPlayerPlayFilled onClick={handlerController}  className={`text-4xl cursor-pointer `}/>
          </div>}
        <input {...getInputProps()}  />
        
        {type=="image"&&preview ? (
          <img src={preview} alt="preview" className="w-fit h-fit object-cover rounded-md" />
        ) : type == "video"&&preview ?<video src={preview} controls={playVideo} > </video>:(
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
