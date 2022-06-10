
import React from "react";
import {
  Dialog,
  Flex,
  HorizontalDivider,
  Text,
  Box,
} from "@100mslive/react-ui";

export const DialogContent = ({
  Icon,
  title,
  closeable = true,
  children,
  css,
  iconCSS = {},
  ...props
}) => {
  return (
    <>
      <Dialog.Overlay />
      <Dialog.Content css={{ width: "min(600px, 100%)", ...css }} {...props}>
        <Dialog.Title>
          <Flex justify="between">
            <Flex align="center" css={{ mb: "$1" }}>
              {Icon ? (
                <Box css={{ mr: "$2", color: "$textPrimary", ...iconCSS }}>
                  <Icon />
                </Box>
              ) : null}
              <Text variant="h6" inline>
                {title}
              </Text>
            </Flex>
            {closeable && (
              <Dialog.DefaultClose data-testid="dialoge_cross_icon" />
            )}
          </Flex>
        </Dialog.Title>
        <HorizontalDivider css={{ mt: "0.8rem" }} />
        <Box>{children}</Box>
      </Dialog.Content>
    </>
  );
};

/**
 * a row of items which breaks into column on small screen. For e.g. title on left and options to select
 * from on right for select component.
 */
 export const DialogRow = ({
  children,
  breakSm = false,
  css,
  justify = "between",
}) => {
  let finalCSS = {
    margin: "$10 0",
    w: "100%",
  };
  if (breakSm) {
    finalCSS["@sm"] = {
      flexDirection: "column",
      alignItems: "flex-start",
    };
  }
  if (css) {
    finalCSS = Object.assign(finalCSS, css);
  }
  return (
    <Flex align="center" justify={justify} css={finalCSS}>
      {children}
    </Flex>
  );
};