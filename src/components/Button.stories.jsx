import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    color: {
      options: ["primary", "secondary", "success", "error"],
      control: { type: "radio" },
    },
  },
};

const Btn = (args) => <Button {...args} />;
export const Default = Btn.bind({});

export const Outlined = Btn.bind({});
Outlined.args = { variant: "outlined" };
