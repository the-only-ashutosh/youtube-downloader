import { BackgroundBeam } from "../components/Background";
import MainComp from "../components/MainComp";
import Info from "../components/UI/Info";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-300/45 to-teal-300/45 dark:bg-none">
      <div className="flex justify-center items-center min-h-[50vh] flex-col antialiased">
        <BackgroundBeam />
        <MainComp />
      </div>
      <Info />
    </div>
  );
}
/*<Flex
      className="items-center w-full dark:bg-gradient-to-r dark:from-teal-300 dark:to-green-300 bg-gradient-to-r from-green-300 to-teal-300 h-[50vh] flex-col"
      justify="center"
    >*/
