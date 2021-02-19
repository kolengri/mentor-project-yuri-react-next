import * as React from "react";

import { BaseLayout } from "../layouts";
import { Button } from "../components";

export type HomePageProps = {};

const HomePageMemo: React.FC<HomePageProps> = (props) => {
  const [buttonCount, setButtonCount] = React.useState<number>(0);
  return (
    <BaseLayout>
      Ahoj Juri! <br />
      <Button
        onClick={() => {
          alert("WOW BUTTON IS WORKING!");
          setButtonCount((c) => c + 1);
        }}
      >
        Base Button!
      </Button>
      <div>Button clicked {buttonCount} times</div>
    </BaseLayout>
  );
};

export const HomePage = React.memo(HomePageMemo);

export default HomePage;
