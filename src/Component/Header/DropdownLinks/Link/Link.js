import "./Link.css";

const Link = ({ link }) => {
  return (
    <li className="link">
      <a href="./#">
        {link.icon ? <img src={link.icon} alt="link-icon" /> : null}
        {link.text}
      </a>
    </li>
  );
};

export default Link;
