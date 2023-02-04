import { TechCarrosselButtons } from "../components/TechPage/TechCarrosselButtons";
import { TechImg } from "../components/TechPage/TechImg/TechImg";
import { TechMainDiv } from "../components/TechPage/TechMainDiv";
import { TechPageInfo } from "../components/TechPage/TechPageInfo";
import { CurrentdTechProvider } from "../context/CurrentTechContext";

export const Technology = () => {
  return (
    <CurrentdTechProvider>
      <TechMainDiv>
        <TechImg />
        <TechPageInfo />
        <TechCarrosselButtons />
      </TechMainDiv>
    </CurrentdTechProvider>
  );
};