import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import BuilderPage from "../components/figma-imports";

// ❖ HasExpectationsSection
interface FigmaHasExpectationsSectionProps extends BaseFigmaProps {
  hasExpectations?: "true" | "false";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "a0e75bdfca78c01789bfc493414fb38cb23ed37e",
  mapper(figma: FigmaHasExpectationsSectionProps) {
    return <BuilderPage />;
  },
});
