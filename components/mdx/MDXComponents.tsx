import Callout from "./Callout";
import Youtube from "./Youtube";
import Badge from "./Badge";
import AboutHero from "@/components/about/AboutHero";
import Journey from "@/components/about/Journey";
import { JourneyItem } from "@/components/about/JourneyItem";
import Philosophy from "@/components/about/Philosophy";
import TechStack from "@/components/about/TechStack";
import { SkillChip } from "@/components/about/SkillChip";
import Numbers from "@/components/about/Numbers";
import { NumberCard } from "@/components/about/NumberCard";
import AboutCTA from "@/components/about/AboutCTA";
import Divider from "@/components/about/Divider";
import CodeBlock from "@/components/blog/CodeBlock";

const MDXComponents = {
  AboutHero,
  Journey,
  JourneyItem,
  Philosophy,
  TechStack,
  SkillChip,
  Numbers,
  NumberCard,
  AboutCTA,
  Divider,
  Callout,
  Youtube,
  Badge,

  CodeBlock,

  // 🚀 INTERCEPTOR BLINDADO
  pre: (props: any) => {
    const codeNode = props.children;

    const className = codeNode?.props?.className || "";
    const match = className.match(/language-(\w+)/);

    const language = match ? match[1].toLowerCase() : "python";
    const code = codeNode?.props?.children || "";

    let defaultFilename = "";
    if (language === "python") defaultFilename = "script.py";
    if (language === "javascript" || language === "js")
      defaultFilename = "script.js";
    if (language === "typescript" || language === "ts")
      defaultFilename = "script.ts";

    return (
      <CodeBlock code={code} filename={defaultFilename} language={language} />
    );
  },
};

export default MDXComponents;
