import React from "react";

import PropTypes from "prop-types";

import { Header } from "@common";

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
