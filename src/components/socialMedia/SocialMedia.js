import React from "react";
import { useContext } from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SocialMedia() {
  const { isDark } = useContext(StyleContext);

  if (!socialMediaLinks.display) return null;

  return (
    <div className="social-media-div" data-theme={isDark ? "dark" : "light"}>
      {/* 1) Email */}
      {socialMediaLinks.gmail && (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
        >
          <i className="fas fa-envelope"></i>
        </a>
      )}
      {/* 2) GitHub */}
      {socialMediaLinks.github && (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      )}

      {/* 3) GitLab */}
      {socialMediaLinks.gitlab && (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab"></i>
        </a>
      )}

      {/* 4) StackOverflow */}
      {socialMediaLinks.stackoverflow && (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
        </a>
      )}

      {/* 5) Kaggle */}
      {socialMediaLinks.kaggle && (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-kaggle"></i>
        </a>
      )}

      {/* 6) LinkedIn */}
      {socialMediaLinks.linkedin && (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      )}

      {/* 7) Medium */}
      {socialMediaLinks.medium && (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium"></i>
        </a>
      )}

      {/* 8) Twitter */}
      {socialMediaLinks.twitter && (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      )}

      {/* 9) YouTube */}
      {socialMediaLinks.youtube && (
        <a
          href={socialMediaLinks.youtube}
          className="icon-button youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube" style={{ backgroundColor: "#FF0000" }}></i>
        </a>
      )}
      {/* 10) Instagram */}
      {socialMediaLinks.instagram && (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      )}

      {/* 11) Facebook */}
      {socialMediaLinks.facebook && (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      )}
    </div>
  );
}
