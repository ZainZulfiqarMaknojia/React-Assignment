//**************************All Imports***********************************//

import React, { useState } from "react";
import { Form, Control, Errors } from "react-redux-form";
import { Button, Label, Card, CardHeader, CardBody, Media } from "reactstrap";
import profilePic from "../shared/image.png";

//**********************Imports Ends****************************************//

//**********************Validators Constants********************************//

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => !val || val.length < len;
const isCharacter = (val) => /^[A-Za-z ]+$/i.test(val);
const maxSize = (val) => val && val.length;
const isNumber = (val) => /^[0-9]+$/i.test(val);

//**********************Validators Constants Ends***************************//

//**********************Contact Component Starts****************************//

function ContactComponent(props) {
  //*******Image Handler Function Responsible For Uploading Image***********//

  const imageHandler = (e) => {
    if (e.target.files[0].size <= 200000) {
      console.log(e.target.files[0].name);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      finalImageFile(e.target.files[0].name);
      check(1);
    } else {
      alert("Image Size Must Be Less Than Or Equals To 200kb");
    }
  };
  //******************Image Handler Function Ends*************************//

  //*Handle Submit Function Responsible For Posting New Contact To Server*//

  const handleSubmit = (value) => {
    if (isImageUploaded == 1) {
      props.postContact(
        value.name,
        value.phoneNumber,
        value.address,
        value.gender,
        value.shortBio,
        imageFileName
      );

      alert("Your Contact Has Been Added");
      props.resetContactForm();
    } else {
      alert("Must Enter Valid Image");
    }
  };

  //******************Handle Submit Function Ends**************************//

  const [image, setImage] = useState(profilePic); // Setting State Images As Default Image i.e Imported In Start
  const [isImageUploaded, check] = useState(0); // To check valid Image is Uploaded
  const [imageFileName, finalImageFile] = useState(null); // Hold Image File Name
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-1"></div>
        <div className="col-12 col-sm-12 col-md-9">
          <Card id="row">
            <CardHeader className="Title">Add New Contact</CardHeader>
            <CardBody>
              <Form model="contact" onSubmit={(value) => handleSubmit(value)}>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-8">
                    <div className="row form-group">
                      <Label htmlFor="name" md={2}>
                        <i className="fa fa-user fa-lg"></i>
                      </Label>
                      <div className="col-12 col-sm-12 col-md-10">
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
                            required: "Required ",
                            minLength: "Must be greater than 3 characters ",
                            isCharacter: "Must not be a special character ",
                          }}
                        />
                      </div>
                    </div>
                    <div className=" row form-group">
                      <Label htmlFor="phoneNumber" md={2}>
                        <i className="fa fa-phone fa-lg"></i>
                      </Label>
                      <div className="col-12 col-sm-12 col-md-10">
                        <Control.text
                          model=".phoneNumber"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="Contacts Number"
                          className="form-control"
                          validators={{
                            required,
                            minLength: minLength(11),
                            maxLength: maxLength(12),
                            isNumber,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".phoneNumber"
                          show="touched"
                          messages={{
                            required: "Required ",
                            minLength: "Must be equal to 11 ",
                            maxLength: "Must be equal to 11 ",
                            isNumber: "Must be a Number ",
                          }}
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <Label htmlFor="address" md={2}>
                        <i className="fa fa-map-marker fa-lg"></i>
                      </Label>
                      <div className="col-12 col-sm-12 col-md-10">
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
                            required: "Required ",
                            minLength: "Must be greater than 3 character ",
                            maxLength: "Must be less than 200 character ",
                          }}
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <Label htmlFor="gender" md={2}>
                        <i className="fa fa-male fa-lg"></i>
                        <i className="fa fa-female fa-lg"></i>
                      </Label>
                      <div className="col-12 col-sm-12 col-md-10">
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
                      </div>
                    </div>
                    <div className=" row form-group">
                      <Label htmlFor="shortBio" md={2}>
                        <i
                          className="fa fa-info-circle fa-lg"
                          aria-hidden="true"
                        ></i>
                      </Label>
                      <div className="col-12 col-sm-12 col-md-10">
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
                            required: "Required ",
                            minLength: "Must be greater than 10 character ",
                            maxLength: "Must be less than 100 character ",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 offset-1">
                    <div className="row form-group">
                      <Media
                        htmlFor="image"
                        className="profilePic"
                        src={image}
                        rounded="true"
                      />
                      <div className="col-12 col-sm-12 col-md-10">
                        <Control.file
                          model=".image"
                          id="image"
                          name="image"
                          placeholder="Add Image"
                          accept="image/jpg, image/png"
                          onChange={imageHandler}
                          validators={{ maxSize }}
                        />
                        <Errors
                          className="text-danger"
                          model=".name"
                          show="touched"
                          messages={{
                            required: "Required ",
                          }}
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <div className="col-12 col-sm-12 col-md-10">
                        <Button type="submit" color="primary">
                          Add Contact
                        </Button>
                      </div>
                    </div>
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
