import React, { useState } from "react";
import { Form, Control, Errors } from "react-redux-form";
import {
  Button,
  Label,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Media,
} from "reactstrap";
import profilePic from "../shared/image.png";
const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => !val || val.length < len;
const isCharacter = (val) => /^[A-Za-z ]+$/i.test(val);
const isCorrectNumber = (val) => /^[(\][0-9]{3}[)\][0-9]{9}$/i.test(val);
const maxSize = (val) => val && val.length;
function ContactComponent(props) {
  console.log(props);
  const [image, setImage] = useState(profilePic);

  const imageHandler = (e) => {
    if (e.target.files[0].size <= 200000) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      console.log(e.target.files[0]);
    } else {
      alert("Image Size Must Be Less Than Or Equals To 200kb");
    }
  };
  const handleSubmit = (value) => {
    props.postContact(
      value.name,
      value.phoneNumber,
      value.address,
      value.gender,
      value.shortBio,
      ""
    );
    console.log(JSON.stringify(value));
    alert(JSON.stringify(value));
    props.resetContactForm();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="co;-12 col-sm-12 col-md-1"></div>
        <div className="col-12 col-sm-12 coll-md-9">
          <Card id="row">
            <CardHeader className="Title">Add New Contact</CardHeader>
            <CardBody>
              <Form model="contact" onSubmit={(value) => handleSubmit(value)}>
                <div className="row">
                  <div className="col-sm-12 col-md-8">
                    <Row className="form-group">
                      <Label htmlFor="name" md={2}>
                        <i className="fa fa-user fa-lg"></i>
                      </Label>
                      <Col md={10}>
                        <Control.text
                          model=".name"
                          id="name"
                          name="name"
                          placeholder="Contact Name"
                          className="form-control"
                          validators={{
                            required,
                            isCharacter,
                            minLength: minLength(4),
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".name"
                          show="touched"
                          messages={{
                            required: "Required",
                            minLength: "Must be greater than 3 characters",
                            isCharacter: "Must not be a special character",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="phoneNumber" md={2}>
                        <i className="fa fa-phone fa-lg"></i>
                      </Label>
                      <Col md={10}>
                        <Control.text
                          model=".phoneNumber"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="Contacts Number"
                          className="form-control"
                          validators={{
                            required,
                            isCorrectNumber,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".phoneNumber"
                          show="touched"
                          messages={{
                            required: "Required",
                            isCorrectNumber: "Must Follow Format (301)0000000",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="address" md={2}>
                        <i className="fa fa-map-marker fa-lg"></i>
                      </Label>
                      <Col md={10}>
                        <Control.text
                          model=".address"
                          id="address"
                          name="address"
                          placeholder="Address"
                          className="form-control"
                          validators={{
                            required,
                            minLength: minLength(4),
                            maxLength: maxLength(200),
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".address"
                          show="touched"
                          messages={{
                            required: "Required",
                            minLength: "Must be greater than 3 character",
                            maxLength: "Must be less than 200 character",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="gender" md={2}>
                        <i className="fa fa-male fa-lg"></i>
                        <i className="fa fa-female fa-lg"></i>
                      </Label>
                      <Col md={10}>
                        <Control.select
                          model=".gender"
                          id="gender"
                          name="gender"
                          className="form-control"
                          validators={{}}
                        >
                          <option>Male</option>
                          <option>Female</option>
                        </Control.select>
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="shortBio" md={2}>
                        <i
                          class="fa fa-info-circle fa-lg"
                          aria-hidden="true"
                        ></i>
                      </Label>
                      <Col md={10}>
                        <Control.textarea
                          model=".shortBio"
                          id="shortBio"
                          name="shortBio"
                          rows="6"
                          className="form-control"
                          validators={{
                            required,
                            minLength: minLength(11),
                            maxLength: maxLength(100),
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".shortBio"
                          show="touched"
                          messages={{
                            required: "Required",
                            minLength: "Must be greater than 10 character",
                            maxLength: "Must be less than 100 character",
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="col-sm-12 col-md-3 offset-1">
                    <Row className="form-group">
                      <Media
                        htmlFor="image"
                        className="profilePic"
                        src={image}
                        rounded
                      />
                      <Col md={10}>
                        <Control.file
                          model=".image"
                          id="image"
                          name="image"
                          placeholder="Add Image"
                          onChange={imageHandler}
                          validators={{ maxSize }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Col md={{ size: 10 }}>
                        <Button type="submit" color="primary">
                          Add Contact
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
