import React from "react";
import "../main.css";
import { ReactSVG } from "react-svg";
import { ToolbarState } from "../mocks";

interface HeaderProps {
  toolbarState: ToolbarState;
  setToolbarState: (toolbarState: ToolbarState) => void;
  onRefreshStocks: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  toolbarState,
  setToolbarState,
  onRefreshStocks: onRefreshClick
}) => {
  return (
    <header className="header">
      <h1 className="logo">
        <a className="logoLink" href="">
          STOKR
        </a>
      </h1>
      <ul className="toolbarList">
        <li className="toolbarListItem">
          <button
            aria-label="search"
            className={
              "action-button" + (toolbarState === "search" ? " active" : "")
            }
            onClick={() => setToolbarState("search")}
          >
            <ReactSVG src="/pictures/search.svg" />
          </button>
        </li>
        <li className="toolbarListItem">
          <button
            aria-label="refresh"
            className="action-button"
            onClick={onRefreshClick}
          >
            <ReactSVG src="/pictures/refresh.svg" />
          </button>
        </li>
        <li className="toolbarListItem">
          <button
            aria-label="filter"
            className={
              "action-button" + (toolbarState === "filter" ? " active" : "")
            }
            onClick={() => setToolbarState("filter")}
          >
            <ReactSVG src="/pictures/filter.svg" />
          </button>
        </li>
        <li className="toolbarListItem">
          <button
            aria-label="settings"
            className={
              "action-button" + (toolbarState === "settings" ? " active" : "")
            }
            onClick={() => setToolbarState("settings")}
          >
            <ReactSVG src="/pictures/settings.svg" />
          </button>
        </li>
      </ul>
    </header>
  );
};
