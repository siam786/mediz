import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer p-5">
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <div className="text-star">
              <p className="text-start">
              <img class="img-fluid" src="https://i.ibb.co/hC0VbQH/logo-1.png" alt="" />
              </p>
              <p className="text-start">
                Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea.
                Id placerat tacimates definitionem sea, prima quidam vim no. Duo
                nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus
                expetendis vis
              </p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <h4 className="text-start">Useful links</h4>
            <ul className="text-start usefull-link">
              <li>Home</li>
              <li>Course</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h4 className="text-start">Contact with Us</h4>
            <div className="newslater">
              <h6 className="text-start">Newsletter</h6>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Button
                    style={{ backgroundColor: "#392779", border: 0 }}
                    className="w-25"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
          <Row>
              <div className="d-flex justify-content-between align-items-center f-bottom">
                <div className="copy-info">
                  <h6>All Right Reserved Develope By <a href="https://github.com/siam786">SIAM</a></h6>
                </div>
                <div className="text-end py-5 hr">
              &copy; 2021 <strong>Mediz - Hospital</strong>
              </div>
              </div>
          </Row>
      </Container>
    </div>
  );
};

export default Footer;
