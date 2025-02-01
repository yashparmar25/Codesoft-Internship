import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  z-index: 1;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  z-index: 1;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")}; /* Conditional cursor */
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)}; /* Adjust opacity when disabled */
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")}; /* Disable pointer events for disabled state */

  &:hover {
    background: ${({ disabled }) =>
      disabled ? "hsla(271, 100%, 50%, 1)" : "hsla(271, 100%, 60%, 1)"};
  }
`;

const FeedbackMessage = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ success, theme }) => (success ? theme.primary : "red")};
  margin-top: 10px;
`;

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading indicator

    emailjs
      .sendForm(
        "service_tox7kqs",
        "template_nv7k7mj",
        form.current,
        "SybVGsYS52j2TfLbi"
      )
      .then(
        (result) => {
          toast.success("I will contact you soon!"); // Show success toast
          form.current.reset();
          setIsLoading(false); // Stop loading
        },
        (error) => {
          toast.error("Failed to send the message. Please try again!"); // Show error toast
          setIsLoading(false); // Stop loading
        }
      );
  };

  return (
    <Container id="Education">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            type="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <ContactInput
            type="text"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <ContactInput
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
            required
          />
          <ContactButton
            type="submit"
            value={isLoading ? "Sending..." : "Send"}
            disabled={isLoading}
          />
        </ContactForm>

        {/* Toast container to render toasts */}
        <ToastContainer
          position="top-center"
          autoClose={5000} // Auto close after 5 seconds
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
