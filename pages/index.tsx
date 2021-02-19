import * as React from "react";

export type HomePageProps = {};

const HomePageMemo: React.FC<HomePageProps> = (props) => {
  return <>Ahoj Juri!</>;
};

export const HomePage = React.memo(HomePageMemo);

export default HomePage;
