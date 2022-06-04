// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mUvemYxod8qcQ4ifYk9gdw
// Component: 9ROAfQc3rH
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantslkpWccMeSyki0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: LKPWccMeSyki0/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: mUvemYxod8qcQ4ifYk9gdw/projectcss
import sty from "./PlasmicTitle.module.css"; // plasmic-import: 9ROAfQc3rH/css

export type PlasmicTitle__VariantMembers = {};

export type PlasmicTitle__VariantsArgs = {};
type VariantPropType = keyof PlasmicTitle__VariantsArgs;
export const PlasmicTitle__VariantProps = new Array<VariantPropType>();

export type PlasmicTitle__ArgsType = {};
type ArgPropType = keyof PlasmicTitle__ArgsType;
export const PlasmicTitle__ArgProps = new Array<ArgPropType>();

export type PlasmicTitle__OverridesType = {
  root?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultTitleProps {
  className?: string;
}

export const defaultTitle__Args: Partial<PlasmicTitle__ArgsType> = {};

function PlasmicTitle__RenderFunc(props: {
  variants: PlasmicTitle__VariantsArgs;
  args: PlasmicTitle__ArgsType;
  overrides: PlasmicTitle__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultTitle__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantslkpWccMeSyki0()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {(
        hasVariant(globalVariants, "screen", "tablet")
          ? true
          : hasVariant(globalVariants, "screen", "desktop")
          ? true
          : true
      ) ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__nuAfT
          )}
        >
          <React.Fragment>
            <React.Fragment>{""}</React.Fragment>
            <h2
              data-plasmic-name={"h2"}
              data-plasmic-override={overrides.h2}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2
              )}
            >
              {"Text"}
            </h2>
            <React.Fragment>{""}</React.Fragment>
          </React.Fragment>
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "tablet")
          ? true
          : hasVariant(globalVariants, "screen", "desktop")
          ? true
          : true
      ) ? (
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
        />
      ) : null}
      {(hasVariant(globalVariants, "screen", "tablet") ? true : true) ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__inXd9
          )}
        >
          {hasVariant(globalVariants, "screen", "tablet")
            ? "Text"
            : "Enter some text"}
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "tablet") ? true : true) ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__y00Fj
          )}
        >
          {hasVariant(globalVariants, "screen", "tablet")
            ? "Enter some text"
            : "Enter some text"}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h2", "img"],
  h2: ["h2"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h2: "h2";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTitle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTitle__VariantsArgs;
    args?: PlasmicTitle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTitle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTitle__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTitle__ArgProps,
      internalVariantPropNames: PlasmicTitle__VariantProps
    });

    return PlasmicTitle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTitle";
  } else {
    func.displayName = `PlasmicTitle.${nodeName}`;
  }
  return func;
}

export const PlasmicTitle = Object.assign(
  // Top-level PlasmicTitle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicTitle
    internalVariantProps: PlasmicTitle__VariantProps,
    internalArgProps: PlasmicTitle__ArgProps
  }
);

export default PlasmicTitle;
/* prettier-ignore-end */
