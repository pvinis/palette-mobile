/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

const getStories = () => {
  return [
    require("../lib/atoms/BackButton/BackButton.stories.tsx"),
    require("../lib/atoms/Box/Box.stories.tsx"),
    require("../lib/atoms/Spacer/Spacer.stories.tsx"),
    require("../lib/colors.stories.tsx"),
    require("../lib/elements/Avatar/Avatar.stories.tsx"),
    require("../lib/elements/Button/Button.stories.tsx"),
    require("../lib/elements/Checkbox/Checkbox.stories.tsx"),
    require("../lib/elements/Collapse/Collapse.stories.tsx"),
    require("../lib/elements/Input/Input.stories.tsx"),
    require("../lib/elements/Separator/Separator.stories.tsx"),
    require("../lib/elements/Skeleton/Skeleton.stories.tsx"),
    require("../lib/elements/Touchable/Touchable.stories.tsx"),
    require("../lib/molecules/MenuItem.stories.tsx"),
    require("../lib/space.stories.tsx"),
    require("../lib/svgs/icons.stories.tsx"),
  ];
};

configure(getStories, module, false);
