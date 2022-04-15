import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer({ t }) {
  const socialIconsStyle = {
    marginRight: "15px",
  };

  return (
    <footer className="footer ">
      <div className="container cards-container footer-container">
        <ul>
          <h2 className="ul-heder">{t("description.contactUs")}</h2>
          <li>
            <span>{t("description.address")}:</span> 123 Main Street
          </li>
          <li>
            <span>{t("description.callTo")}:</span> (012) 800 456 789-987
          </li>
          <li>
            <span>{t("description.email")}:</span> yourmail@example.com
          </li>
          <li className="icons">
            <FacebookIcon style={socialIconsStyle} />
            <TwitterIcon style={socialIconsStyle} />
            <InstagramIcon style={socialIconsStyle} />
            <YouTubeIcon style={socialIconsStyle} />
          </li>
        </ul>
        <ul>
          <h2 className="ul-heder">{t("description.information")}</h2>
          <li>{t("description.aboutUs")}</li>
          <li>{t("description.delivery")}</li>
          <li>{t("description.returnPolicy")}</li>
        </ul>
        <ul>
          <h2 className="ul-heder">{t("description.myAccount")}</h2>
          <li>123 Main Street, Anytown</li>
          <li>
            <span>{t("description.callTo")}:</span> (012) 800 456 789-987
          </li>
          <li>
            <span>{t("description.email")}:</span> yourmail@example.com
          </li>
        </ul>
        <ul>
          <h2 className="ul-heder">{t("description.newsLetter")}</h2>
          <li>123 Main Street, Anytown, CA 12345 - USA.</li>
          <li>
            <span>{t("description.callTo")}:</span> (012) 800 456 789-987
          </li>
          <li>
            <span>{t("description.email")}:</span> yourmail@example.com
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
