import { FormCheck } from "react-bootstrap";
import { useState } from "react";

export default function CategorySelector(props) {
  const [show, setShow] = useState(new Array(Object.values(props.cats).length).fill(true));
  const cards = props.cards;
  const [selectedFile, setSelectedFile] = useState(null);

  const catChecks = [];
  const HandleClick = (e) => {
    show[e.target.id-1] = !show[e.target.id-1];
    setShow(show);
    props.onChange(show) 
  };

  
  for (let i = 0; i < props.cats.length; i++) {
    catChecks.push(
      <FormCheck
        id={i+1}
        key={props.cats[i]}
        label={props.cats[i]}
        onChange={HandleClick}
        defaultChecked={true}
        inline
        reverse
      />
    );
  }
  return <>{catChecks}</>;
}
