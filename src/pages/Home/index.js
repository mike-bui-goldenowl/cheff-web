import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import SectionCContent from "../../content/SectionCContent.json";
import SectionDContent from "../../content/SectionDContent.json";
import SectionEContent from "../../content/SectionEContent.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Content = lazy(() => import("../../components/Content"));
const Block = lazy(() => import("../../components/Block"));
const Testimonials = lazy(() => import("../../components/Testimonials"));

const BlockWithBackground = lazy(() =>
  import("../../components/BlockWithBackground")
);

const Home = () => {
  return (
    <div id="home-page">
      <ScrollToTop />
      <Content
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        section={MiddleBlockContent.section}
      />
      
      <BlockWithBackground
        title={SectionDContent.title}
        subTitle={SectionDContent.subtitle}
        content={SectionDContent.content}
        imageUrl={SectionDContent.imageUrl}
        backgroundUrl={SectionDContent.backgroundUrl}
        id="about"
      />
      <BlockWithBackground
        title={SectionCContent.title}
        subTitle={SectionCContent.subtitle}
        listContent={SectionCContent.list}
        imageUrl={SectionCContent.imageUrl}
        backgroundUrl={SectionCContent.backgroundUrl}
        id="function"
      />
      <Block
        title={SectionEContent.title}
        subTitle={SectionEContent.subtitle}
        content={SectionEContent.content}
        backgroundUrl={SectionEContent.backgroundUrl}
        
      />
      <Testimonials id="feedback"/>
    </div>
  );
};

export default Home;
