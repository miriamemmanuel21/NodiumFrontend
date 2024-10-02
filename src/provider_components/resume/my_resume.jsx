// import {useState} from "react";
// const getImageUrl= (image)=>{
//
// }
//
// export default function Uploader(){
//     const [isOpen, setOpen] = useState(false);
//     const [image, setSelectedImage] = useState(null);
//     const handleImageChange = (e) => {
//             const file = e.target.files[0];
//             if (file) {
//                 const reader = new FileReader();
//                 reader.onload = (e) => {
//                     setSelectedImage(e.target.result);
//                 };
//                 reader.readAsDataURL(file);
//
//             }
//         }
//
//         const submit =async ()=>{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/",{
//             method: "POST",
//             contentType: "application/json",
//             body: JSON.stringify({
//                 image:getImageUrl(image)
//             })
//         });
//         }
//     return (
//             <section className={`flex flex-col justify-center items-center pt-[20px]`}>
//                 <p className={`py-[5px] px-[30px] text-xl font-bold bg-gray-300 rounded-md`}>My Resume</p>
//                 <div className="flex flex-col items-center w-full my-[20px]">
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                         className="hidden"
//                         id="imageUpload"
//                     />
//                     <label
//                         htmlFor="imageUpload"
//                         className={`rounded-md flex justify-center items-center  w-[80%]
//                 h-[200px] border-2 border-dashed border-gray-400 cursor-pointer
//                 ${!image ? 'bg-gray-100' : ''}`}
//                     >
//                         {image ? (
//                             <img
//                                 src={image}
//                                 alt="Selected"
//                                 className="w-full h-full object-cover rounded-md"
//                             />
//                         ) : (
//                             <p className="text-center text-gray-500">Click to add image</p>
//                         )}
//                     </label>
//                 </div>
//                 <button className={`text-white bg-gray-400 hover:bg-gray-500
//                                     px-[10px] py-[5px] mb-[20px] rounded-md`}
//                 onClick={() => {
//                     if (image) {
//                         submit();
//                     }
//                     }}>Upload</button>
//             </section>
//         )
// }
//
//
//
import { useState } from "react";

export default function Uploader() {
    const [image, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
                setImageUrl(null);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImageToCloudinary = async (imageData) => {
        const data = new FormData();
        data.append("file", imageData);
        data.append("upload_preset", "your-upload-preset");
        try {
            const response = await fetch(
                "https://api.cloudinary.com/v1_1/your-cloud-name/image/upload",
                {
                    method: "POST",
                    body: data,
                }
            );
            const result = await response.json();
            return result.secure_url; // Return the image URL from Cloudinary
        } catch (err) {
            console.error("Error uploading the image", err);
            return null;
        }
    };

    const submit = async () => {
        if (!image) return;

        setIsUploading(true);

        const imageUrl = await uploadImageToCloudinary(image);

        if (imageUrl) {
            setImageUrl(imageUrl);
            setSelectedImage(null);
        }

        setIsUploading(false);
    };

    return (
        <section className="flex flex-col justify-center items-center pt-[20px]">
            <div className="flex flex-col items-center w-full my-[20px]">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="imageUpload"
                />

                <label
                    htmlFor="imageUpload"
                    className={`rounded-md flex justify-center items-center w-[80%] h-[200px] border-2 
                    border-dashed border-gray-400 cursor-pointer ${!image ? 'bg-gray-100' : ''}`}
                >
                    {image ? (
                        <img
                            src={image}
                            alt="Selected"
                            className="w-full h-full object-cover rounded-md"
                        />
                    ) : (
                        imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="Uploaded"
                                className="w-full h-full object-cover rounded-md"
                            />
                        ) : (
                            <p className="text-center text-gray-500">Click to add image</p>
                        )
                    )}
                </label>
            </div>

            <button
                className={`text-white bg-green-600 hover:bg-green-700 
                px-[10px] py-[5px] mb-[20px] rounded-md`}
                onClick={submit}
                disabled={isUploading || !image}
            >
                {isUploading ? "Uploading..." : "Upload"}
            </button>
        </section>
    );
}
