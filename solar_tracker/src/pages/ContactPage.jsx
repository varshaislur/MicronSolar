
import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyAccepted: false,
  });

  const [charCount, setCharCount] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacyAccepted) {
      setStatusMessage("Please accept the privacy policy.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMessage(data.success);
        setFormData({ name: "", email: "", phone: "", message: "", privacyAccepted: false });
        setCharCount(0);
      } else {
        setStatusMessage(data.error);
      }
    } catch (error) {
      setStatusMessage("Error submitting the form. Please try again.");
    }
  };
  return (
    <div className="contact-page">
      {/* Top Section */}
      <div className="contact-header">
        <h1>Let’s Get In Touch.</h1>
        <p>Or just reach out manually to <a href="mailto:islurpundalik@gmail.com" className="contact-link">islurpundalik@gmail.com</a>.</p>
      </div>

      {/* Form Section */}
      <div className="contact-form-section">
      <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name..." required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email..." required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number..."  />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message..." maxLength={300} required></textarea>
            <div className="char-count">{charCount}/300</div>
          </div>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="privacy" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} required />
            <label htmlFor="privacy">
              I hereby agree to the <a href="#" className="privacy-link">Privacy Policy</a>.
            </label>
          </div>
          <button type="submit" className="submit-btn">Submit Form →</button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.832614068007!2d72.8359760457161!3d19.383642997825905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec307957bc1%3A0x167f71125864f476!2sGala%20no%202%2C%20Shakti%20Commercial%20complex%2C%20Navghar%20Rd%2C%20near%20Sterling%20industrial%20estate%2C%20Samarth%20Krupa%20Nagar%2C%20Vasai%20East%2C%20Vasai-Virar%2C%20Maharashtra%20401210!5e0!3m2!1sen!2sin!4v1736270401799!5m2!1sen!2sin" width="600" height="600 " style={{border:0, borderRadius:10, marginLeft:30}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
