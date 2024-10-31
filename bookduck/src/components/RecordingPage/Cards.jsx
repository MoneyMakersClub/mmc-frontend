const Cards = ({ stroke }) => (
  <svg
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.1163 23.855C19.1733 23.855 18.269 23.4804 17.6022 22.8136C16.9354 22.1468 16.5608 21.2424 16.5608 20.2994V9.63276C16.5608 9.16126 16.7481 8.70908 17.0815 8.37568C17.4149 8.04228 17.867 7.85498 18.3385 7.85498H21.8941C22.3656 7.85498 22.8178 8.04228 23.1512 8.37568C23.4846 8.70908 23.6719 9.16126 23.6719 9.63276V20.2994C23.6719 21.2424 23.2973 22.1468 22.6305 22.8136C21.9637 23.4804 21.0593 23.855 20.1163 23.855ZM20.1163 23.855H9.44965C8.97816 23.855 8.52597 23.6677 8.19257 23.3343C7.85918 23.0009 7.67188 22.5487 7.67188 22.0772V18.5216C7.67188 18.0501 7.85918 17.598 8.19257 17.2646C8.52597 16.9312 8.97816 16.7439 9.44965 16.7439H11.4941M16.5608 11.7216L14.783 9.94387C14.4496 9.61059 13.9975 9.42336 13.5261 9.42336C13.0547 9.42336 12.6026 9.61059 12.2692 9.94387L9.75543 12.4576C9.42215 12.791 9.23492 13.2431 9.23492 13.7145C9.23492 14.1859 9.42215 14.638 9.75543 14.9714L17.7554 22.9714M20.1163 20.2994V20.3083"
      stroke={stroke} // 여기에서 stroke를 prop으로 받음
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Cards;
