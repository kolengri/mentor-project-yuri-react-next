import * as React from "react";
import { Footer, Input, AutocompleteProps } from "../../components";
import styles from './styles.module.scss';

export type BaseLayoutProps = {
  children: React.ReactNode;
};

// const MENU: AutocompleteProps['items'] = [
//   {
//   title: "Title 1",
//   link: "https://google.com"
//   },
//   {
//     title: "Seznam",
//     link: "https://seznam.cz"
//   }
// ]

const BaseLayoutMemo: React.FC<BaseLayoutProps> = (props) => {
  const { children } = props;
  return <div>
    <Input />
    
    {children}
    <Footer />
    </div>;
};

export const BaseLayout = React.memo(BaseLayoutMemo);

export default BaseLayout;
