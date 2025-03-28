import React, { useState } from "react";
import axios from "axios";
import "../styles/register.css";

const API_URL = "https://trade-senal-mern-backend.onrender.com"; // Replace with env variable if needed

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    occupation: "",
    experience: "",
    contactTime: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    // Ensure all fields are filled before submitting
    if (Object.values(formData).some((value) => value === "")) {
      setMessage("⚠️ Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/register`,
        formData, // No need for JSON.stringify
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Important for handling authentication (if needed)
        }
      );

      if (response.data.success) {
        setMessage("✅ Registration successful!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          occupation: "",
          experience: "",
          contactTime: "",
        });
      } else {
        setMessage(`❌ Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Registration Error:", error);
      setMessage(error.response?.data?.message || "⚠️ Something went wrong! Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <div className="register">
      <section className="register-section">
        <div className="register-container">
          <div className="register-info">
            <h2>Register With Us</h2>
            <p>Join our trading community and take your skills to the next level.</p>
          </div>
          <div className="register-form">
            <form id="registrationForm" onSubmit={handleSubmit}>
              <div className="input-group">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-group">
                <label>Occupation *</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-group">
                <label>Do you have trading experience? *</label>
                <select name="experience" value={formData.experience} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="input-group">
                <label>Preferred Contact Time *</label>
                <input
                  type="text"
                  name="contactTime"
                  value={formData.contactTime}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>

              {/* Success/Error Message */}
              {message && <p className="message">{message}</p>}

              <button type="submit" className="submit-btn" disabled={submitting}>
                {submitting ? "Registering..." : "Register Now"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
