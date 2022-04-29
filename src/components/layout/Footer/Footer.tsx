import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      If you have any questions please contact:{" "}
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = "mailto:patriktao@gmail.com";
          e.preventDefault();
        }}
      >
        {" "}
        patriktao@gmail.com
      </Link>
    </div>
  );
}
