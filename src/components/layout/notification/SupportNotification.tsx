import { Link } from "react-router-dom";
import InfoCard from "../information/InfoCard/InfoCard";
import Notification from "./Notification";

type Props = {};

const SupportNotification = (props: Props) => {
  const NotificationText = (
    <div>
      If you have any questions please contact:
      <span> </span>
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = "mailto:patriktao@gmail.com";
          e.preventDefault();
        }}
      >
        patriktao@gmail.com
      </Link>
    </div>
  );

  return <Notification text={NotificationText} header={"Support"} />;
};

export default SupportNotification;
