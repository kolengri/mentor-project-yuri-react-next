import * as React from "react";

import { BaseLayout } from "../layouts";
import { Button, Modal } from "../components";
import { timeFormat } from "../utils/timeFormat";

export type HomePageProps = {};

const HomePageMemo: React.FC<HomePageProps> = (props) => {
  const [buttonCount, setButtonCount] = React.useState<number>(0);
  return (
    <BaseLayout>
     
      <Modal />

    </BaseLayout>
      
  );
};

export const HomePage = React.memo(HomePageMemo);

export default HomePage;
