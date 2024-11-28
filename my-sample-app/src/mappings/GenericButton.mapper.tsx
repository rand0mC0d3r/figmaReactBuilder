import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import CompleteIncomplete from "../components/GenericButton";

// ❖ GenericButton
interface FigmaGenericButtonProps extends BaseFigmaProps {
  Caption?: string;
  hasBorder?: "true" | "false";
  variant?: "contained" | "outlined";
  isPrimary?: "true" | "false";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "6866a3bf3f390fd3ba88023607619b36ab399f6a",
  mapper(figma: FigmaGenericButtonProps) {
    return (
      <CompleteIncomplete
        caption={figma.Caption ?? ""}
        hasBorder={figma.hasBorder === "true"}
        variant={figma.variant ?? "contained"}
        isPrimary={figma.isPrimary === "true"}
      />
    );
  },
});
