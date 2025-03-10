const ListIcon = ({ handleClick, isClicked }) => {
  return (
    <svg
      onClick={() => handleClick("list")}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="4"
        height="4.8"
        rx="1"
        fill={isClicked === "list" ? "#636363" : "#E2E2E2"}
      />
      <rect
        x="4"
        y="15.2"
        width="4"
        height="4.8"
        rx="1"
        fill={isClicked === "list" ? "#636363" : "#E2E2E2"}
      />
      <rect
        x="4"
        y="9.59961"
        width="4"
        height="4.8"
        rx="1"
        fill={isClicked === "list" ? "#636363" : "#E2E2E2"}
      />
      <rect
        x="8.7998"
        y="4"
        width="11.2"
        height="4.8"
        rx="1"
        fill={isClicked === "list" ? "#636363" : "#E2E2E2"}
      />
      <rect
        x="8.7998"
        y="15.2"
        width="11.2"
        height="4.8"
        rx="1"
        fill={isClicked === "list" ? "#636363" : "#E2E2E2"}
      />
      <rect
        x="8.7998"
        y="9.59961"
        width="11.2"
        height="4.8"
        rx="1"
        fill={isClicked === "list" ? "#636363" : "#E2E2E2"}
      />
    </svg>
  );
};

export default ListIcon;
