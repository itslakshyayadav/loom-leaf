import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BaseIcon from "../base-icon";

interface DropdownOption {
  text: string;
  icon?: string;
  url?: string;
  event?: React.MouseEventHandler<HTMLButtonElement>;
}

interface BaseDropdownProps {
  dropdownText?: string;
  className?: string;
  options: DropdownOption[];
  children?: React.ReactNode;
  icon1?: string;
  icon2?: string;
}

const BaseDropdown: React.FC<BaseDropdownProps> = (props) => {
  const {
    dropdownText,
    className = "",
    options,
    children,
    icon1 = "chevron-down",
    icon2 = "chevron-up",
  } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const onDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const hideDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        className="flex items-center px-4 py-2 gap-2 rounded-lg hover:bg-slate-50"
        onClick={onDropdownClick}
        type="button"
      >
        {children ? (
          children
        ) : (
          <Fragment>
            {dropdownText}
            {isOpen ? (
              <BaseIcon iconName={icon2} className="w-5 h-5" />
            ) : (
              <BaseIcon iconName={icon1} className="w-5 h-5" />
            )}
          </Fragment>
        )}
      </button>
      {isOpen && (
        <ul
          className="absolute bg-white rounded-md border py-1 flex flex-col origin-top-right w-56 mt-2 right-0 z-10"
          onClick={hideDropdown}
        >
          {options.map((option, index) =>
            option.url ? (
              <Link
                to={option.url}
                className="w-full"
                key={"dropdown-option" + index + option.text}
              >
                <li className="flex gap-3 hover:bg-slate-50 px-4 py-2 text-sm">
                  <BaseIcon iconName={option.icon} />
                  {option.text}
                </li>
              </Link>
            ) : (
              <button
                onClick={option.event}
                className="w-full"
                key={"dropdown-option" + index + option.text}
                type="button"
              >
                <li className="flex gap-3 hover:bg-slate-50 px-4 py-2 text-sm">
                  <BaseIcon iconName={option.icon} />
                  {option.text}
                </li>
              </button>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default BaseDropdown;
