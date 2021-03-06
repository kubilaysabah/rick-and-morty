// Next
import type { NextPage, GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// React
import type { ReactElement } from "react";

// Redux
import { API } from "state/services";
import store from "state";

// Components
import { Episode } from "components";

type EpisodeDetailProps = {
    episode: IEpisode | null
}

const EpisodeDetail: NextPage<EpisodeDetailProps> = ({
    episode
}: EpisodeDetailProps): ReactElement<EpisodeDetailProps> => {
    return (
        <div className="container">
            {episode && <Episode {...episode} />}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = "en", query }) => {
    const response = await store.dispatch(API.endpoints.getEpisodeById.initiate(query.id as string));
    const { data } = response;

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            episode: data || null
        }
    }
};

export default EpisodeDetail;
