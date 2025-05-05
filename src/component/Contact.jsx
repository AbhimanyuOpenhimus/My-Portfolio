import React, { useState, useRef } from 'react';
import './Contact.css';

function Contact() {
  // State to hold the success/error message
  const [submitStatus, setSubmitStatus] = useState('');
  // State to track submission in progress
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Ref to access the form element for resetting
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Indicate submission started
    setSubmitStatus(''); // Clear previous status messages

    const formData = new FormData(event.target);
    formData.append("access_key", "7482f9aa-9b47-4495-82f4-d98891473390");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setSubmitStatus("Message sent successfully!"); // Set success message
        formRef.current.reset(); // Reset the form using the ref
        // Optionally clear the success message after a few seconds
        setTimeout(() => {
            setSubmitStatus('');
        }, 5000); // Clears after 5 seconds
      } else {
        console.error("Submission failed", res);
        setSubmitStatus(`Error: ${res.message || 'Submission failed. Please try again.'}`); // Set error message
      }
    } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus('Error: Could not send message. Check connection or try again later.'); // Set network/fetch error message
    } finally {
        setIsSubmitting(false); // Indicate submission finished (success or fail)
    }
  };

  return (
    <section className="contact-section text-white py-5" id='contact'>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="contact-heading">Contact <span className='text-primary'>Me</span></h2>
          <div className="contact-heading-underline mx-auto"></div>
        </div>

        <div className="row gy-5">
          <div className="col-lg-5">
            <h3 className="contact-subheading mb-3">Let's Talk</h3>
            <p className="contact-description mb-4">
              Feel free to reach out to me for any questions, project inquiries, or just to say hello. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-info-item d-flex align-items-center mb-4">
              <div className="contact-icon-wrapper me-3">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div>
                <div className="contact-info-label">Email</div>
                <a href="mailto:abhimanyuku20@gmail.com" className="contact-info-value">
                  abhimanyuku20@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item d-flex align-items-center mb-4">
              <div className="contact-icon-wrapper me-3">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <div className="contact-info-label">Phone</div>
                <a href="tel:+917762034687" className="contact-info-value">
                  +91 7762034687
                </a>
              </div>
            </div>

            <div className="contact-info-item d-flex align-items-center">
              <div className="contact-icon-wrapper me-3">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <div className="contact-info-label">Location</div>
                <div className="contact-info-value">India</div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            {/* Add the ref to the form element */}
            <form className="contact-form" onSubmit={onSubmit} ref={formRef}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="formName" className="form-label contact-form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control contact-form-input"
                    id="formName"
                    name='name'
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="formEmail" className="form-label contact-form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control contact-form-input"
                    id="formEmail"
                    name='email'
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="formSubject" className="form-label contact-form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control contact-form-input"
                  id="formSubject"
                  name='subject'
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="formMessage" className="form-label contact-form-label">
                  Message
                </label>
                <textarea
                  className="form-control contact-form-input"
                  id="formMessage"
                  rows="6"
                  name='message'
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* Display the status message */}
              {submitStatus && (
                <div
                  className={`alert ${submitStatus.startsWith('Error') ? 'alert-danger' : 'alert-success'} mt-3`}
                  role="alert"
                >
                  {submitStatus}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary w-100 contact-submit-btn mt-3"
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="bi bi-send-fill me-2"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;