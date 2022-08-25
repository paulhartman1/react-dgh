import Image from "next/future/image";
import {
  Form,
  FormGroup,
  FormCheck,
  FormLabel,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import CategorySelector from "./CategorySelector";

export default function ArtDataCard(props) {
  return (
    <Container  style={{padding:"5px", maxWidth:"90vw", maxHeight:"500px"}}>
      <Row className="align-items-center" style={{border:"1px solid  #eee", backgroundColor:"#eee"}}>
          <Col xs={3}>
            <Image src={props.url} width="300" height="300" style={{backgroundColor:"#fcfafa", border:"1px solid #eee", borderRadius:"4px", padding:"10px", height:"auto", margin:"5px"}}alt={props.title} />
          </Col>
          <Col xs={9}>
              <Form id={props.id}>
                <div>
                <FormGroup as={Row} className="mb-3">
                  <FormLabel column xs={1}>Title: </FormLabel>
                  <FormControl
                    type="text"
                    style={{ width: "40rem"}}
                    defaultValue={props.title}
                  />
                </FormGroup>
                </div>
                <FormGroup as={Row} className="mb-3">
                  <FormLabel column xs={2}>Description:</FormLabel>
                  <FormControl
                    type="text"
                    style={{ width: "40rem" }}
                    defaultValue={props.description}
                  />
                </FormGroup>
                <FormGroup >
                  <FormLabel>Categories:</FormLabel>
                  &nbsp;&nbsp;
                  <CategorySelector {...props} />
                </FormGroup>
                <FormGroup as={Row} className="mb-3">
                  <FormLabel column xs={1} style={{textAlign:'left'}}>Price: $</FormLabel>
                  <FormControl
                    type="number"
                    style={{ width: "7em" }}
                    defaultValue={props.price}
                    min={0}
                    max={10000}
                  />
                </FormGroup>
                <FormGroup as={Row} className="mb-3" style={{float:'left'}}>
                  <FormCheck label="Display" reverse inline defaultChecked></FormCheck>
                </FormGroup>
              </Form>
          </Col>
      </Row>
    </Container>
  );
}
