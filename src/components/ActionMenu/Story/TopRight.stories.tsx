import * as DocBlock from "@storybook/blocks";
import { Meta, StoryFn } from "@storybook/react";
import { ActionMenu, convertCurrency } from "../ActionMenu";


export default {
  title: "Beta/Components/ActionMenu/TopRight",
  component: ActionMenu,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <DocBlock.Canvas />
          <DocBlock.Controls />
        </>
      ),
    },
  },
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <div style={{ height: "80vh", overflow: "auto" }}>
      <ActionMenu
        list={args.list}
        style={args.style}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  style: {
    position: "fixed",
    top: 10,
    right: 10,
    margin: 10,
  },
  list: [
    {
      title: "50ml",
      price: convertCurrency(12),
      tag: "best",
    },
    {
      title: "40ml",
      description: 'bLorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: convertCurrency(9),
      tag: "new",
    },
    {
      title: "32mL",
      price: convertCurrency(32),
      description: 'best in price',
    },
  ],
};
