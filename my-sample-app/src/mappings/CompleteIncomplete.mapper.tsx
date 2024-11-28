import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import CompleteIncomplete from "../components/CompleteIncomplete";

// ❖ CompleteIncomplete
interface FigmaCompleteIncompleteProps extends BaseFigmaProps {
  CompleteStatus?: "true" | "false";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "f9d1de00bbfdf9605e4ade1213ca20ec979af693",
  mapper(figma: FigmaCompleteIncompleteProps) {
    return <CompleteIncomplete active={figma.CompleteStatus} />;
  },
});
