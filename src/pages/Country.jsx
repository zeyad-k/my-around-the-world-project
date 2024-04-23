import { useParams } from "react-router-dom";

const Country = () => {
  const { country } = useParams();

  return <h1>{country}</h1>;
};

export default Country;
