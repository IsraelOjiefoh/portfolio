import { Container } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xknlvlwr");

  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }

  return (
    <Container className="contact p-5">
      <h1 className="p-3">Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group p-3">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message"
            name="message"
            className="form-control"
            rows="4"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button 
          type="submit"
          className="btn btn-primary m-3"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Contact;
