import React, {useState} from 'react'
import '../css/content.css'
import ReactMarkdown from 'react-markdown'

export default function Content() {

    const [markdown,setMarkdown] = useState("");

    const downloadMarkdown = () => {
      if(document.getElementById('markdown-data').value.length == 0 ) {
        alert("Markdown field cannot be empty")
      }

      else{
        const element = document.createElement("a");
        let file = new Blob([document.getElementById('markdown-data').value], {type: 'text/plain'});
          element.href = URL.createObjectURL(file);
          element.download = "markUp.md";
          document.body.appendChild(element);
          element.click();
      }


    }
    

  return (
    <>
    <div className="container">
        <textarea id='markdown-data' value={markdown}  onChange={(e) => setMarkdown(e.target.value)} placeholder='Write Markdown Here' className='markdown-area'></textarea>
        <div className="preview-area">
            <p><ReactMarkdown>{markdown}</ReactMarkdown></p>
        </div>
    </div>

    <div className="btn-container">
        <button onClick={downloadMarkdown} className="download-btn">Download</button>
    </div>
    </>
  )
}
