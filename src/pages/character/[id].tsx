// Next
import type { NextPage, GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// React
import type { ReactElement } from "react";

// Redux
import { API } from "state/services";
import store from "state";

// Components
import { Character } from "components";

type EpisodeDetailProps = {
    character: ICharacter
}

const CharacterDetail: NextPage<EpisodeDetailProps> = ({
    character
}: EpisodeDetailProps): ReactElement<EpisodeDetailProps> => {
    return (
        <div className="container">
            <Character {...character} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = "en", query }) => {
    const response = await store.dispatch(API.endpoints.getCharacterById.initiate(query.id as string));
    const { data: character } = response;

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            character
        }
    }
};

export default CharacterDetail;
