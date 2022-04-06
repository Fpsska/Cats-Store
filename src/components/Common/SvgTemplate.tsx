import React from "react";

interface SvgTemplateProps {
  id: any;
}

const SvgTemplate: React.FC<SvgTemplateProps> = (props) => {
  switch (props.id) {
    case "heart":
      return (
        <svg
          className="icon__heart"
          width="46"
          height="42"
          viewBox="0 0 46 42"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.7812 0.695312C31.2851 0.695312 28.9966 1.4863 26.9794 3.04634C25.0456 4.54197 23.758 6.44693 23 7.83214C22.242 6.44684 20.9544 4.54197 19.0206 3.04634C17.0034 1.4863 14.7149 0.695312 12.2188 0.695312C5.25298 0.695312 0 6.39293 0 13.9485C0 22.1112 6.55347 27.696 16.4746 36.1505C18.1593 37.5863 20.0689 39.2138 22.0538 40.9494C22.3154 41.1785 22.6514 41.3047 23 41.3047C23.3486 41.3047 23.6846 41.1785 23.9462 40.9495C25.9312 39.2136 27.8408 37.5862 29.5265 36.1496C39.4465 27.696 46 22.1112 46 13.9485C46 6.39293 40.747 0.695312 33.7812 0.695312Z"
            fill="white"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg
          className="icon__arrow"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M8.29764 3.99939L0.287559 12.0096C0.102145 12.1949 -8.06437e-08 12.4422 -6.91167e-08 12.7059C-5.75898e-08 12.9696 0.102145 13.2169 0.287559 13.4022L0.87731 13.9921C1.2616 14.3759 1.88618 14.3759 2.26988 13.9921L8.99627 7.2657L15.7301 13.9996C15.9155 14.1848 16.1627 14.2871 16.4263 14.2871C16.6901 14.2871 16.9373 14.1848 17.1228 13.9995L17.7124 13.4097C17.8979 13.2242 18 12.9771 18 12.7134C18 12.4497 17.8979 12.2023 17.7124 12.0171L9.69504 3.99939C9.50904 3.81368 9.26071 3.71168 8.99671 3.71227C8.73169 3.71168 8.48349 3.81368 8.29764 3.99939Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(0 18) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "logo":
      return (
        <svg
          className="icon__logo"
          width="78"
          height="52"
          viewBox="0 0 78 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.0559 15.8815L54.2119 15.8947L27.8012 40.7922H10.0354V23.4593L34.2348 0.848633L17.993 0.899213L0 17.6625V51.1511H34.0283L63.0418 23.5687L63.0559 15.8815Z"
            fill="white"
          />
          <path
            d="M43.9721 0.848633L14.9586 28.4318L14.9453 36.1182L23.7884 36.1049L50.1991 11.2075H67.9649V28.5404L43.7656 51.1511L60.0074 51.1013L78.0004 34.338V0.848633H43.9721Z"
            fill="white"
          />
        </svg>
      );
    case "arrow-sort":
      return (
        <svg
          className="icon__arrow-sort"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_5:133)">
            <path
              d="M8.0853 11.6669L14.7604 4.99166C14.9149 4.83727 15 4.63118 15 4.41142C15 4.19167 14.9149 3.98557 14.7604 3.83118L14.2689 3.3396C13.9487 3.01973 13.4282 3.01973 13.1084 3.3396L7.50311 8.94492L1.89157 3.33338C1.73706 3.17899 1.53109 3.09375 1.31146 3.09375C1.09158 3.09375 0.885606 3.17899 0.730973 3.33338L0.239635 3.82496C0.0851249 3.97947 3.76698e-06 4.18545 3.75737e-06 4.4052C3.74777e-06 4.62496 0.0851249 4.83105 0.239635 4.98544L6.9208 11.6669C7.0758 11.8216 7.28275 11.9066 7.50275 11.9061C7.7236 11.9066 7.93042 11.8216 8.0853 11.6669Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_5:133">
              <rect
                width="15"
                height="15"
                fill="white"
                transform="translate(15) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "close":
      return (
        <svg
          className="icon__close"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00004 8.70711L11.6465 12.3536L12.3536 11.6465L8.70714 8.00001L12.3536 4.35356L11.6465 3.64645L8.00004 7.2929L4.35359 3.64645L3.64648 4.35356L7.29293 8.00001L3.64648 11.6465L4.35359 12.3536L8.00004 8.70711Z"
            fill=""
          />
        </svg>
      );
    case "notification":
      return (
        <svg
          className="icon__notification"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5682 1.03128C10.1593 1.19039 11.6434 1.90518 12.7598 3.04996C13.9762 4.28555 14.6953 5.92552 14.7801 7.65726C14.8649 9.38899 14.3096 11.0913 13.2199 12.4398C12.2176 13.6857 10.8111 14.5416 9.2441 14.8594C7.67708 15.1772 6.04826 14.9369 4.63985 14.18C3.22843 13.4066 2.12659 12.1706 1.51986 10.68C0.910415 9.18166 0.829286 7.52043 1.28985 5.96988C1.74942 4.42537 2.72779 3.0868 4.05984 2.17996C5.38083 1.27892 6.9771 0.87217 8.5682 1.03128ZM9.03988 13.8799C10.3827 13.6075 11.5886 12.8756 12.4499 11.81C13.3825 10.6509 13.857 9.18961 13.7832 7.70376C13.7095 6.21792 13.0926 4.81093 12.0498 3.74991C11.0947 2.77492 9.82729 2.16667 8.46914 2.0314C7.11099 1.89613 5.7485 2.24247 4.61983 3.00992C3.77027 3.59531 3.08425 4.38792 2.62673 5.31265C2.16921 6.23738 1.95535 7.26359 2.00542 8.2941C2.0555 9.3246 2.36784 10.3253 2.91286 11.2013C3.45789 12.0773 4.21752 12.7997 5.11983 13.3C6.31816 13.9467 7.70562 14.1519 9.03988 13.8799ZM7.37482 6L8.62482 6L8.62482 5L7.37482 5L7.37482 6ZM8.62482 7L8.62482 11L7.37482 11L7.37482 7L8.62482 7Z"
            fill=""
          />
        </svg>
      );
    default:
      return <svg className="empty"></svg>;
  }
};

export default SvgTemplate;