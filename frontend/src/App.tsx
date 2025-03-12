import './App.css'
import ImportInvoiceButton  from './Invoice/ImportInvoiceButton'
export default function App() {

  const API = 'localhost/api/';
  const IMPORT_URL = API + 'import-invoice-csv'

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch(IMPORT_URL, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Plik został przesłany pomyślnie!');
      } else {
        console.error('Błąd podczas przesyłania pliku');
      }
    } catch (error) {
      console.error('Wystąpił błąd', error);
    }
  };

  return (
    <>
      <ImportInvoiceButton onFileUpload={handleFileUpload}/>
    </>
  );

}
