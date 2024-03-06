import React, { useRef, useState} from 'react'
import Header from './Header'
import SideBar from './SideBar'
import PageTitle from './PageTitle'
import '../components/fileUpload.css';
import axios from 'axios';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function FileUpload() {

    const inputRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [uploadStatus, setUploadStatus] = useState("select");
    const [startDate, setStartDate] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState();
  



    function onChangeDateHandler(value){
        setStartDate(value);

        const originalDate = new Date(value);

        // Format the date as "DD/MM/YYYY" for en-GB locale
        const formattedDate = originalDate.toLocaleDateString('en-GB', {
        day: '2-digit',   // Two-digit day (14)
        month: '2-digit', // Two-digit month (03)
        year: 'numeric'   // Four-digit year (2024) 
      });

      setFormattedDate(formattedDate);
      console.log(formattedDate); // Output: 14/03/2024

    }

  
    const handleFileChange = (event) => {
      if (event.target.files && event.target.files.length > 0) {
        setSelectedFile(event.target.files[0]);
      }
    };
  
    const onChooseFile = () => {
      inputRef.current.click();
    };
  
    const clearFileInput = () => {
      inputRef.current.value = "";
      setSelectedFile(null);
      setProgress(0);
      setUploadStatus("select");
    };
  
    const handleUpload = async () => {
      if (uploadStatus === "done") {
        clearFileInput();
        return;
      }
  
      try {
        setUploadStatus("uploading");

        const formData = new FormData();
        if (selectedFile && selectedFile.name.toLowerCase().endsWith(".json")) {

          formData.append("jsonFile", selectedFile);
          formData.append("selectedDate", startDate);
          formData.append('formattedDate',formattedDate);
        
          await axios.post(
            "http://localhost:3003/api/v1/upload/file",
            formData,
            {
              onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
                );
                setProgress(percentCompleted);
              },
            }
          ).then((response) =>{
            toast.success("Json is classified successfully", {
              position: "top-right",
              autoClose: 3000, // Close the toaster after 3 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });

          });
          setUploadStatus("done");
        } else {
          toast.success("Allowed only JSON File!", {
            position: "top-right",
            autoClose: 3000, // Close the toaster after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
          setUploadStatus("select");
        }
      } catch (error) {
        setUploadStatus("select");
      }
    };


  return (
<section className='dashboard section'>

<ToastContainer /> {/* Move it outside the table */}
    <Header/>
    <SideBar/>
    
 
 <main id='main' className='main'>
 <PageTitle page= "FileUpload" icon="bi bi-gear"/>


        <div style={{marginBottom: '10px'}}>   
            <label style={{paddingRight: '10px'}}>Select Json Date:</label>
            <Datepicker className='form-control' selected={startDate} onChange={onChangeDateHandler}  dateFormat="MM-dd-yyyy"/>

        </div>

 <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {/* Button to trigger the file input dialog */}
      {!selectedFile && (
        <button className="file-btn" onClick={onChooseFile}>
          <span className="bi bi-upload"></span> Upload Json File
        </button>
      )}

      {selectedFile && (
        <>
          <div className="file-card">
    

            <div className="file-info">
              <div style={{ flex: 1 }}>
                <h6>{selectedFile?.name}</h6>

                <div className="progress-bg">
                  <div className="progress" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {uploadStatus === "select" ? (
                <button onClick={clearFileInput}>
                  <span className="bi bi-x">

                  </span>
                </button>
              ) : (
                <div className="check-circle">
                  {uploadStatus === "uploading" ? (
                    `${progress}%`
                  ) : uploadStatus === "done" ? (
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "20px" }}
                    >
                      check
                    </span>
                  ) : null}
                </div>
              )}
            </div>
          </div>
          <button className="upload-btn" onClick={handleUpload}>
            {uploadStatus === "select" || uploadStatus === 'uploading' ? "Upload" : "Done"}
          </button>
        </>
      )}

         



  
</main>



</section> 
  

  )
}

export default FileUpload