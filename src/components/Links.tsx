import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Links() {
  return (
    <div className="default-flex text-[13px] my-5  gap-4">
      <div className="default-flex gap-2">
        <FontAwesomeIcon icon={faGithub} />
        <h3>GITHUB</h3>
      </div>
      <div className="default-flex gap-2">
        <FontAwesomeIcon icon={faYoutube} />
        <h3>YOUTUBE</h3>
      </div>
      <div className="default-flex gap-2">
        <FontAwesomeIcon icon={faFacebook} />
        <h3>FACEBOOK</h3>
      </div>
      <div className="default-flex gap-2">
        <FontAwesomeIcon icon={faLinkedin} />
        <h3>LINKEDIN</h3>
      </div>
    </div>
  );
}
export default Links;
