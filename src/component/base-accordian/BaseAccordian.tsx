import React, { Component } from "react";

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  expand: boolean;
  onClick: () => void;
}

export default class Accordion extends Component<AccordionProps> {

  render() {
    const { title, content, expand, onClick } = this.props;

    return (
      <div>
        <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
          {title}
        </dt>
        <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
          <p>{content}</p>
        </dd>
      </div>
    )
  }
}