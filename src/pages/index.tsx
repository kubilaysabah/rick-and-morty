// Next
import type { NextPage, GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// React
import type { ReactElement } from "react";
import { memo } from "react";

// Redux
import { useGetAllCharactersQuery } from "state/services";

const Home: NextPage = (): ReactElement => {
  const { data, error, isLoading } = useGetAllCharactersQuery("");

  return (
    <h1>Welcome</h1>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = "en" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
};

export default memo(Home);
