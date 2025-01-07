import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Top Section */}
      <div className="contact-header">
        <h1>Let’s Get In Touch.</h1>
        <p>Or just reach out manually to <a href="mailto:hello@example.com" className="contact-link">islurpundalik@gmail.com</a>.</p>
      </div>

      {/* Form Section */}
      <div className="contact-form-section">
        <form className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name..." />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email address..." />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <div className="phone-input">
              <select className="country-code">
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
              <input type="tel" placeholder="(000) 000-0000" />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Enter your main text here..." maxLength={300}></textarea>
            <div className="char-count">300/300</div>
          </div>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">
              I hereby agree to our <a href="#" className="privacy-link">Privacy Policy</a> terms.
            </label>
          </div>
          <button type="submit" className="submit-btn">
            Submit Form →
          </button>
        </form>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.832614068007!2d72.8359760457161!3d19.383642997825905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec307957bc1%3A0x167f71125864f476!2sGala%20no%202%2C%20Shakti%20Commercial%20complex%2C%20Navghar%20Rd%2C%20near%20Sterling%20industrial%20estate%2C%20Samarth%20Krupa%20Nagar%2C%20Vasai%20East%2C%20Vasai-Virar%2C%20Maharashtra%20401210!5e0!3m2!1sen!2sin!4v1736270401799!5m2!1sen!2sin" width="600" height="600 " style={{border:0, borderRadius:10, marginLeft:30}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
