// Next
import type { NextPage, GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// React
import type { ReactElement } from "react";
import { memo } from "react";

const Home: NextPage = (): ReactElement => {
  return (
    <h1>Welcome</h1>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let props = {};

  if (locale) {
    props = {
      ...props,
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }

  return {
    props
  }
};

export default memo(Home);
