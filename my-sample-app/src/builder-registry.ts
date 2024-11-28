import { Builder } from "@builder.io/react";
import BuilderPage from "./components/figma-imports";
import CompleteIncomplete from "./components/GenericButton";

Builder.registerComponent(BuilderPage, {
  name: "BuilderPage",
});

Builder.registerComponent(CompleteIncomplete, {
  name: "CompleteIncomplete",
  inputs: [
    {
      name: "hasBorder",
      type: "boolean",
      required: true,
    },
    {
      name: "isPrimary",
      type: "boolean",
      required: true,
    },
    {
      name: "variant",
      type: "string",
      enum: ["contained", "outlined"],
      required: true,
    },
  ],
});
