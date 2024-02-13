import React, { useEffect, useRef, useState } from "react";
import "./Content.css";
import { FaDollarSign } from "react-icons/fa6";
import { FaFileContract } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiCoinsFill } from "react-icons/ri";
import RepeatedCard from "../Shared Components/RepeatedCards";

const Content = () => {
  const [content, setContent] = useState(null);
  const [arrowUp, setArrowUp] = useState(false);
  const [option, setOption] = useState(" Insert text here");
  const LowRisk = useRef();
  const MedRisk = useRef();
  const HighRisk = useRef();
  const OptionRisk = useRef();

  useEffect(() => {
    openDiv();
    // Add event listener to close dropdown when clicking outside of it
    document.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const optionFun = (p) => {
    setOption(p);
    closeDiv();
  };

  const closeDiv = () => {
    setContent(null);
    setArrowUp(false);
  };

  const openDiv = () => {
    setArrowUp(!arrowUp);
    setContent(
      <div className="select-filters">
        <div
          className="svg-input"
          onClick={() => {
            optionFun(LowRisk.current.value);
            closeDiv();
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
              stroke="#A3A3A3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input value="Low-risk" ref={LowRisk} disabled />
        </div>
        <div
          className="svg-input"
          onClick={() => {
            optionFun(MedRisk.current.value);
            closeDiv();
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
              stroke="#A3A3A3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input value="Meduim-risk" ref={MedRisk} disabled />
        </div>
        <div
          className="svg-input"
          onClick={() => {
            optionFun(HighRisk?.current?.value);
            closeDiv();
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
              stroke="#887EFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            value="High-risk"
            style={{ color: "#887EFF" }}
            ref={HighRisk}
            disabled
          />
        </div>
        <div
          className="svg-input"
          onClick={() => {
            optionFun(OptionRisk?.current?.value);
            closeDiv();
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
              stroke="#A3A3A3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input value="Option-risk" ref={OptionRisk} disabled />
        </div>
      </div>
    );
  };
  const handleOutsideClick = (event) => {
    if (!event.target.closest(".parent-dropdown-list")) {
      closeDiv();
    }
  };
  return (
    <main className="content-parent">
      <aside className="filters">
        <div className="container-filters">
          <h1 className="title-filters">Filters</h1>
          <form className="form">
            <div className="parent-dropdown-list">
              <label htmlFor="ddlProducts">Industry</label>
              <div className="drop-down-list">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.35714 8.125L1.875 10L5.35714 11.875M5.35714 8.125L10 10.625L14.6429 8.125M5.35714 8.125L1.875 6.25L10 1.875L18.125 6.25L14.6429 8.125M14.6429 8.125L18.125 10L14.6429 11.875M14.6429 11.875L18.125 13.75L10 18.125L1.875 13.75L5.35714 11.875M14.6429 11.875L10 14.375L5.35714 11.875"
                    stroke="#6B6B6B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <select id="ddlProducts" disabled className="select-filters">
                  <option>
                    <FaDollarSign /> Health care
                  </option>
                  <option>Food care</option>
                  <option>Clean care</option>
                </select>
              </div>
              <p className="paragraph-filters">Choose something.</p>
            </div>

            <div className="parent-dropdown-list">
              <label htmlFor="Market">Market Cap</label>
              <div className="drop-down-list">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.35714 8.125L1.875 10L5.35714 11.875M5.35714 8.125L10 10.625L14.6429 8.125M5.35714 8.125L1.875 6.25L10 1.875L18.125 6.25L14.6429 8.125M14.6429 8.125L18.125 10L14.6429 11.875M14.6429 11.875L18.125 13.75L10 18.125L1.875 13.75L5.35714 11.875M14.6429 11.875L10 14.375L5.35714 11.875"
                    stroke="#6B6B6B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <select id="Market" disabled className="select-filters">
                  <option>Large-cap</option>
                  <option>Meduim-cap</option>
                  <option>Small-cap</option>
                </select>
              </div>
              <p className="paragraph-filters">Press Apply to see changes.</p>
            </div>

            <div className="parent-dropdown-list">
              <label htmlFor="Risk">Risk</label>
              <div onClick={openDiv} className="drop-down-list">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.35714 8.125L1.875 10L5.35714 11.875M5.35714 8.125L10 10.625L14.6429 8.125M5.35714 8.125L1.875 6.25L10 1.875L18.125 6.25L14.6429 8.125M14.6429 8.125L18.125 10L14.6429 11.875M14.6429 11.875L18.125 13.75L10 18.125L1.875 13.75L5.35714 11.875M14.6429 11.875L10 14.375L5.35714 11.875"
                    stroke="#6B6B6B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="select-and-arrow">
                  <div id="Risk" className="select-filters">
                    <p> {option}</p>
                  </div>

                  {!arrowUp ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 8L10 12L6 8"
                        stroke="#6B6B6B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12L10 8L14 12"
                        stroke="#6B6B6B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div
                className="data-appear-from-select"
                style={{ display: content === null ? "none" : "" }}
              >
                {content}
              </div>
            </div>

            <div className="btn-container-apply-filters">
              <button className="btn-apply-filters">Apply Filters</button>
            </div>
          </form>
        </div>
      </aside>
      <section className="data">
        <div className="top-card-data">
          <div className="titles-icons-top-data">
            <div className="icon-name-data">
              <FaDollarSign className="svg-size"/>
              <p className="">
                <FaDollarSign className="special-svg-size"/> 
                <span>TSLA</span>
              </p>
            </div>
            <div className="icon-name-data">
              <FaFileContract className="svg-size"/>
              <p> 200 Contracts </p>
            </div>
            <div className="icon-name-data">
              <BsGraphUpArrow className="svg-size"/>
              <p> 12.2% </p>
            </div>
            <div className="icon-name-data">
              <RiCoinsFill className="svg-size"/>
              <p>High risk</p>
            </div>
          </div>
          <p className="p020 paragraph-second-card">
            Someone Just bought xxxx contracts of $XYZ, this is notable because
            the relative volume on this options trade is X.X%.
          </p>
        </div>
        <div className="card-div-contain-paragraph">
          <p className="paragraph-in-cards">
            X company released a short report on $XYZ, High IV option sales opps
          </p>
        </div>
        <div className="repeated-cards">
          <RepeatedCard />
          <RepeatedCard />
           <RepeatedCard /> 
           <RepeatedCard /> 
           <RepeatedCard />
        </div>
      </section>
    </main>
  );
};

export default Content;
