import React, {useContext} from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo, isHireable } from "../../portfolio";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import { MapPin, Mail, Smartphone } from "lucide-react";
import StyleContext from "../../contexts/StyleContext";


export default function GithubProfileCard({ prof }) {
  const hireableText = isHireable ? "Yes" : "No";
  const { subtitle, email_address: email, number } = contactInfo;
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px" once>
      <section id="contact" className="github-profile-card"  data-theme={isDark ? "dark" : "light"}>
        <div className="card__wrapper">
          {/* Avatar column */}
          <div className="card__avatar">
            <img 
              src={prof.avatarUrl} 
              alt={prof.name} 
              className="avatar" 
            />
          </div>

          {/* Info column */}
          <div className="card__info">
            <h2 className="card__title">Reach Out to Me!</h2>
            <p className="card__subtitle">{subtitle}</p>

            <ul className="contact-list">
              {number && (
                <li>
                  <Smartphone size={18} />{" "}
                  <a href={`tel:${number}`}>{number}</a>
                </li>
              )}
              {email && (
                <li>
                  <Mail size={18} />{" "}
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              )}
              {prof.location && (
                <li>
                  <MapPin size={18} /> {prof.location}
                </li>
              )}
              <li>
                <strong>Open for opportunities:</strong> {hireableText}
              </li>
            </ul>

            <div className="card__social">
              <SocialMedia className="social-media-inline" />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}