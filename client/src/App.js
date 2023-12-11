import './App.css';
import { useRef,useState,useEffect } from 'react';

function App() {

  const[file ,setFile]=useState('')

  const fileInputRef=useRef()

 const  onUploadClick = () =>{
    fileInputRef.current.click()
  }


  useEffect(()=>{


    const getImage =()=>{
      if(file){
        const data = new FormData();
        data.append("name",file.name)
        data.append("file",file)
      }

    }

    getImage()
  },[file])

 
  return (
   <div> 

   
    
    <div className="container">
      <div className="file-uploder">
        <h1 className='text-center'> Simple File Sharing ..!📂</h1>
       
        <p className='text-center file-uplode-desc'>Upload and Share the Download link</p>

        <button className="upload-btn" onClick={()=>{
           onUploadClick() 
        }}>Upload</button>

        <input type="file" ref={fileInputRef}  style={{display:"none"}} 

        onChange={(e)=>{
          setFile(e.target.files[0])
        }}
        
        />

     
      </div>
    </div>
   </div>
  );
}

export default App;
