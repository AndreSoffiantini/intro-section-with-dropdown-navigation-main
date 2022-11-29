import "./Dropdown.css";
import classnames from "classnames";
import { useState } from "react";
import todoIcon from "../../../images/icon-todo.svg";
import calendarIcon from "../../../images/icon-calendar.svg";
import remindersIcon from "../../../images/icon-reminders.svg";
import planningIcon from "../../../images/icon-planning.svg";
import arrowDown from "../../../images/icon-arrow-down.svg";
import arrowUp from "../../../images/icon-arrow-up.svg";
import Link from "./Link/Link";

const Dropdown = (props) => {
  const dropdownList = {
    features: [
      {
        id: 1,
        icon: todoIcon,
        text: "Todo List",
      },
      {
        id: 2,
        icon: calendarIcon,
        text: "Calendar",
      },
      {
        id: 3,
        icon: remindersIcon,
        text: "Reminders",
      },
      {
        id: 4,
        icon: planningIcon,
        text: "Planning",
      },
    ],
    company: [
      {
        id: 1,
        text: "History",
      },
      {
        id: 2,
        text: "Our Team",
      },
      {
        id: 3,
        text: "Blog",
      },
    ],
  };

  const list =
    props.text === "Features" ? dropdownList.features : dropdownList.company;

  const [open, setOpen] = useState();
  const handleDropdown = () => {
    setOpen(!open);
  };

  return (
    <nav className="dropdown_container">
      <button className="btn_dropdown" onClick={handleDropdown}>
        {props.text} <img src={open ? arrowUp : arrowDown} alt="+" />
      </button>

      <ul
        className={classnames(
          props.text === "Features"
            ? "features_container"
            : "company_container",
          { list_open: open }
        )}
      >
        {list.map((link) => (
          <Link link={link} />
        ))}
      </ul>
    </nav>
  );
};
export default Dropdown;
