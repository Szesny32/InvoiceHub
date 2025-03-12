import { useRef } from 'react';
import './CSS/ImportInvoiceButton.css'

interface ButtonProps {
    onFileUpload: (file: File) => void; 
}

 
export default function ImportInvoiceButton({ onFileUpload } : ButtonProps) {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = () => {
    if(fileInputRef.current?.files){
      const file = fileInputRef.current.files[0];
      if(file) onFileUpload(file);
    }
  };

  
  return (
    <div className="button-container">
      <button className="upload-button" onClick={() => fileInputRef.current?.click()}>
        <img src={'csv.png'} alt="Upload Icon" className="button-icon" />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={ handleFileChange }
        accept=".csv"
        style={{ display: 'none' }}
      />
    </div>
  )
}
  