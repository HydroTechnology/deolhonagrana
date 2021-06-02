import React, { Component, useState } from "react";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Admin from "layouts/Admin.js";
import Autocomplete from "../../components/Autocomplete"

function Register() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col>
              <Label>Tipo</Label>
              <Autocomplete></Autocomplete>
              </Col>
              <Col>
                <Label>Para</Label>
                <Input
                  type="text"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
              </Col>
              <Col>
                <Label>Ida</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
              </Col>
              <Col>
                <Label>Volta</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
              </Col>
              <Col>
                <Label>Classe e passageiros</Label>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <FormGroup></FormGroup>
            </Row>
            <Button>Submit</Button>
          </div>
        </Container>
      </div>
    </>
  );
}
Register.layout = Admin;
export default Register;
