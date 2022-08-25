import React, { useState } from "react";
import {
  FormCheck
} from "react-bootstrap";
import CategorySelector from "./CategorySelector";

export default function AdminHead(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

 
  return (
    <>
      <CategorySelector {...props}/>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <label className="btn btn-primary">
        <i className="fa fa-image"></i> Add an Image
        <input 
        type="file" 
        style={{display: "none"}} 
        name="image"
        //onChange={(e) => console.log(e.target.files[0])}
        />
      </label>
     
    </>
  );
}
