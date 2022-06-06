import PCStyle from "./ttLogin.css";
import MStyle from "./ttLogin.m.css";
import { isMobile } from "../util";

export const renderStyle = (config: undefined | "m" | "pc") => {
  return !config && isMobile() ? MStyle : config === "m" ? MStyle : PCStyle;
};
