import ArtDataCard from "../components/ArtDataCard";
import testData from "../testdata/imgdata.json";
import testCats from "../testdata/category.json";
import { Container, Stack } from "react-bootstrap";
import AdminHead from "../components/AdminHead";


export default function Basic() {
  const artCards = [];
  const categories = testCats.categories;
  const adminProps = {cats: categories};
  testData.images.forEach((image) => {
     const props = { cats: categories, ...image };
    artCards.push(<ArtDataCard key={image.id} {...props} />);
  });
  return (
    <>
    <Container style={{margin:"20px 100px"}}>
      <AdminHead {...adminProps} />
      </Container>
      <Stack>{artCards}</Stack>
      
      </>
   
  );
}
