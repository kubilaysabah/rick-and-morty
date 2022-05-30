// Next
import type { NextPage, GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// React
import type { ReactElement } from "react";

// Redux
import { API } from "state/services";
import store from "state";

// Components
import { Episodes } from "components";

type HomeProps = {
  episodes: Response<IEpisode[]>
}

const Home: NextPage<HomeProps> = ({
  episodes
}: HomeProps): ReactElement<HomeProps> => {
  return (
    <div className="container">
      <Episodes {...episodes} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = "en" }) => {
  const response = await store.dispatch(API.endpoints.getAllEpisodes.initiate({
    count: 20,
    page: 1
  }));
  const { data: episodes } = response;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      episodes
    }
  }
};

export default Home;
