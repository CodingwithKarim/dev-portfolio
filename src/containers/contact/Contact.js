import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import emailAnim from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import { MapPin } from "lucide-react";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  const {
    title,
    subtitle,
    role,
    location,
    openForOpportunities,
    number,
    email_address,
  } = contactInfo;

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        id="contact"
        className={`contact-section ${isDark ? "dark" : "light"}`}
      >
        <div className="contact-container">
          {/* TEXT COLUMN */}
          <div className="contact-text">
            <h2 className="contact-title">{title}</h2>
            <p className="contact-subtitle">{subtitle}</p>

            {role && <p className="contact-role">{role}</p>}

            {location && (
              <p className="contact-info">
                <MapPin size={18} />
                <span>{location}</span>
              </p>
            )}

            <p className="contact-open">
              Open for opportunities:{" "}
              {openForOpportunities ? "Yes" : "No"}
            </p>


            {number && (
              <a
                className="contact-link"
                href={`tel:${number}`}
              >
                {number}
              </a>
            )}

            {email_address && (
              <a
                className="contact-link"
                href={`mailto:${email_address}`}
              >
                {email_address}
              </a>
            )}

            <SocialMedia className="contact-social" />
          </div>

          {/* ILLUSTRATION COLUMN */}
          <div className="contact-image">
            {illustration.animated ? (
              <DisplayLottie animationData={emailAnim} />
            ) : (
              <img
                src={require("../../assets/images/contactMailDark.svg")}
                alt="Contact illustration"
              />
            )}
          </div>
        </div>
      </section>
    </Fade>
  );
}
