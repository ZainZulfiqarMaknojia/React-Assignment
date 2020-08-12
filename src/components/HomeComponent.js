import React, { useState } from "react";
import { CONTACT } from "../shared/contact";
import {
  Button,
  CardText,
  Card,
  CardHeader,
  CardBody,
  CardSubtitle,
} from "reactstrap";

function HomeComponent(props) {
  console.log(props, " Hello");
  const [contact, setstate] = useState(CONTACT);
  const [contactSelected, setNewContact] = useState(null);
  const selectedContact = (contact) => {
    setNewContact(contact);
  };
  const name = contact.map((contacts) => {
    return (
      <div onClick={() => selectedContact(contacts)} key={contacts.id}>
        {contacts.name}
      </div>
    );
  });
  return (
    <div className="row">
      <div className="col-12 col-sm-3">
        <div className="sidebar">
          <div id="Contact-Book">Phone Book</div>
          {name}
        </div>
      </div>
      <div className="col-12 col-sm-8">
        <RenderContact contact={contactSelected} />
      </div>
    </div>
  );
}
export default HomeComponent;

function RenderContact(props) {
  console.log(props.contact);
  if (props.contact != null) {
    return (
      <div>
        <Card id="row">
          <CardHeader className="Title">Contact Details</CardHeader>
          <CardBody>
            <div className="row">
              <div className="col-12 col-sm-3"></div>
              <div className="col-12 col-sm-7">
                <div className="row">
                  <div className="col-12 col-sm-2">
                    <i className="fa fa-user fa-lg"></i>
                  </div>
                  <div className="col-12 col-sm-8">
                    {" "}
                    <CardSubtitle>{props.contact.name}</CardSubtitle>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-2">
                    <i className="fa fa-phone fa-lg"></i>
                  </div>
                  <div className="col-12 col-sm-8">
                    {" "}
                    <CardSubtitle>{props.contact.phoneNumber}</CardSubtitle>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-2">
                    <i className="fa fa-map-marker fa-lg"></i>
                  </div>
                  <div className="col-12 col-sm-8">
                    {" "}
                    <CardSubtitle>{props.contact.address}</CardSubtitle>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-2">
                    <i className="fa fa-info-circle fa-lg"></i>
                  </div>
                  <div className="col-12 col-sm-8">
                    {" "}
                    <CardText>{props.contact.shortBio}</CardText>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Button className="btn offset-5">Add New Contact</Button>
      </div>
    );
  } else {
    return <div></div>;
  }
}
