import * as React from "react";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayoutMemo: React.FC<BaseLayoutProps> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export const BaseLayout = React.memo(BaseLayoutMemo);

export default BaseLayout;
