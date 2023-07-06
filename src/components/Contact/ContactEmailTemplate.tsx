import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const ContactEmailTemplate = ({
  name,
  email,
  message,
}: ContactEmailTemplateProps) => (
  <div>
    <h1>New message from seankooner.com</h1>
    <br />
    <b>Name:</b>&nbsp;{name}
    <br />
    <b>Email:</b>&nbsp;{email}
    <br />
    <b>Message:</b>&nbsp; {message}
    <br />
  </div>
);

export default ContactEmailTemplate;
