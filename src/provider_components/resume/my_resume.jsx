import Layout from '../components/dashboardLayout';
import ProviderNavbar from '../components/navbar';
import styles from '../../index.module.css'
import {useState} from "react";
import {Icon} from "@iconify/react";
import {Button} from "@mui/material";
import {toast} from "react-toastify";
export default function Resume(){
    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreview, setFilePreview] = useState('');
    const submit = async (e)=>{
        const userId = localStorage.getItem('userId');
        await fetch(`https://localhost:8080/nodium/upload/${userId}/${selectedFile}`,{
            method:'POST',
            headers: {
                contentType:'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFilePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
        return (
        <div className>
            <ProviderNavbar/>
            <div className={`${styles.background} flex`}>
                <Layout props={2}/>
                <div className={`bg-white flex m-[7%] rounded-md w-[70%] justify-center items-center`}>
                    <div className={`flex justify-center items-center
                     flex-col ${selectedFile? 'hidden': 'flex'}`}>
                            <Icon icon="icons8:upload-2"
                                  onClick={()=>
                                      document.getElementById('fileInput').click()}
                                  className={"cursor-pointer text-white px-4 py-2 rounded-md w-[100px] h-[100%]"}
                                  style={{color: 'black'}}/>
                            <p className={'font-thin md:text-lg'}>Click to add your cv</p>
                            <input type="file" id="fileInput" className="hidden"
                                   accept="image/*" onChange={handleFileChange}/>
                        {
                            filePreview && (
                            <div>
                                <h3>File Preview:</h3>

                                {selectedFile?.type.startsWith('image/') && (
                                    <img
                                        src={filePreview}
                                        alt="Preview"
                                        className={`w-[70%]`}
                                    />
                                )}
                                {selectedFile?.type.startsWith('audio/') && (
                                    <audio controls>
                                        <source src={filePreview} type={selectedFile.type}/>
                                        Audio files not supported.
                                    </audio>
                                )}
                                {selectedFile?.type.startsWith('video/') && (
                                    <video controls width="400">
                                        <source src={filePreview} type={selectedFile.type}/>
                                        Video files not supported.
                                    </video>
                                )
                                }
                            </div>
                        )}
                    </div>
                    <Button variant="contained" color="primary" component="span"
                            onClick={selectedFile ? ()=>submit : ()=>{
                                toast('Upload resume first',)
                            }}>
                        {selectedFile? 'Save': 'Update Resume'}
                    </Button>
                </div>
            </div>
        </div>
        )
}