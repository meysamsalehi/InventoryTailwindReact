import { Link, useParams } from "react-router-dom";

const AboutUs = () => {
  const params = useParams();
  const id = params.id || 1;
  return (
    <>
      id is:{id}
      <p>this is a about us page</p>
      <Link to={`/BlogsPage/${parseInt(id) + 1}`}>blogpages</Link>
    </>
  );
};

export default AboutUs;
