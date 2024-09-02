import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";
import { NavLink } from "react-router-dom";

const FavoriteCompanies = () => {
  const favoriteCompanies = useSelector(state => state.favorites.content);
  return (
    <Container>
      <Row className="mx-0 mt-3 p-3">
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favorite Companies</h1>
        </Col>
        {favoriteCompanies.length < 1 ? (
          <Col xs="10" className="mx-auto">
            <h2 className="lead">No favorites, add some!</h2>
          </Col>
        ) : (
          favoriteCompanies.map(company => (
            <Col key={company._id} xs="10" className="mx-auto">
              <Job data={company} />
            </Col>
          ))
        )}
        <Col xs="10" className="mx-auto">
          <NavLink to="/" className="btn btn-primary my-3">
            Go Back
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteCompanies;
