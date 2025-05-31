import { Component } from "react";
import Accordion from "./BaseAccordian";

interface Block {
  id: number;
  title: string;
  content: string;
  expanded: boolean;
}

interface State {
  blocks: Block[];
}

export default class BaseAccordianApplication extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      blocks: [
        { id: 1, title: 'First Accordion', content: 'Content 1', expanded: true },
        { id: 2, title: 'Second Accordion', content: 'Content 2', expanded: false },
        { id: 3, title: 'Third Accordion', content: 'Content 3', expanded: false },
        { id: 4, title: 'Fourth Accordion', content: 'Content 4', expanded: false }
      ]
    };
  }

  toggle = (id: number) => {
    this.setState((prevState) => {
      const blocks = prevState.blocks.map(item =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      );
      return { blocks };
    });
  };

  toggleExpand = (expand: boolean) => {
    this.setState((prevState) => {
      const blocks = prevState.blocks.map(item => ({
        ...item,
        expanded: expand
      }));
      return { blocks };
    });
  };

  render() {
    return (
      <div className="container">
        <h1>React Accordion</h1>
        <button type="button" className="btn" onClick={() => this.toggleExpand(true)}>Expand All</button>
        <button type="button" className="btn" onClick={() => this.toggleExpand(false)}>Collapse All</button>
        <dl className="accordion">
          {
            this.state.blocks.map(item => (
              <Accordion
                key={item.id}
                title={item.title}
                content={item.content}
                expand={item.expanded}
                onClick={() => this.toggle(item.id)}
              />
            ))
          }
        </dl>
      </div>
    );
  }
}