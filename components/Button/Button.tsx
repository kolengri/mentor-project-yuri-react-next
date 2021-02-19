import * as React from "react";

type DefaultProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = {} & DefaultProps;

const ButtonMemo: React.FC<ButtonProps> = (props) => {
  const { children, ...otherProps } = props;
  return <button {...otherProps}>{children}</button>;
};

export const Button = React.memo(ButtonMemo);

export default Button;
