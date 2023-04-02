import React from "react";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BadgeList(props) {
  return (
    <div className="badge-list">
      {props.badges.map((badge, index) => (
        <div key={index} className="badge">
          <h2>
            {badge.firstName} {badge.lastName}
          </h2>
          <div className="contact">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p className="badge-label">
              Phone: <span className="badge-span">{badge.phoneNumber}</span>
            </p>
          </div>
          <div className="contact">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p className="badge-label">
              Email: <span className="badge-span">{badge.email}</span>
            </p>
          </div>
          <div className="contact">
            <div className="icon">
              <FontAwesomeIcon icon={faGlobe} />
            </div>

            <p class="badge-label">
              Location: <span className="badge-span">{badge.location}</span>
            </p>
          </div>

          <div className="contact">
            <div className="icon">
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
            <p className="badge-label">
              About: <span className="badge-span">{badge.about}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
