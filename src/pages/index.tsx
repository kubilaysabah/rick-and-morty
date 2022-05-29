// Next
import type { NextPage, GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// React
import type { ReactElement } from "react";
import { memo } from "react";

// Redux
import { API } from "state/services";
import store from "state";

// Components
import { Episodes } from "components";

const Home: NextPage = (props: any): ReactElement => {
  console.log(props.data);

  return (
    <Episodes />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = "en" }) => {
  const response = await store.dispatch(API.endpoints.getAllCharacters.initiate(""));
  const { data } = response;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data
    }
  }
};

export default memo(Home);
