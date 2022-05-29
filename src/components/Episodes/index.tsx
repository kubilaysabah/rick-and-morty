// Next
import Link from "next/link";


// React
import type { FC, ReactElement } from "react";
import { memo, useState, useEffect } from "react";
import { v4 as uid } from "uuid";

// Style
import Style from "./style.module.css";

type Paginate = {
    now: number
    total: number
}

type EpisodeParams = {
    page?: number;
    count?: number;
}

const Episodes: FC<Response<IEpisode[]>> = (props: Response<IEpisode[]>): ReactElement<Response<IEpisode[]>> => {
    const [episodes, setEpisodes] = useState<Response<IEpisode[]>>(props);
    const [page, setPage] = useState<Paginate>({
        now: 1,
        total: episodes.info.pages
    });

    const PrevHandler = (): void => {
        if (page.now > 1) {
            setPage({
                ...page,
                now: page.now - 1
            })
        }
    }

    const NextHandler = (): void => {
        if (page.now < page.total) {
            setPage({
                ...page,
                now: page.now + 1
            })
        }
    }

    const getData = async ({
        count = 20,
        page = 1
    }: EpisodeParams): Promise<void> => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}&count=${count}`);
            const data = await response.json();
            setEpisodes(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData({
            page: page.now,
            count: 20
        });
    }, [page]);

    return (
        <nav className={Style.episodeNavigation}>
            <header className={Style.episodeHeader}>
                <div className="mr-3">
                    <small>{episodes.info.count} sonuç bulundu</small>
                </div>
                <div>
                    <small>{`${page.now}/${page.total}`}</small>
                </div>
            </header>
            <ul className={Style.episodeContainer}>
                {episodes.results.map(item => (
                    <li className={Style.item} key={uid()}>
                        <Link href={`/episode/${item.id}`} passHref>
                            <a className={Style.link} title={item.name} aria-label={item.name}>
                                <section className={Style.card}>
                                    <img src="/episode.jpg" alt={item.episode} className={Style.Image} />
                                    <article className={Style.cardContainer}>
                                        <h2 className={Style.title}>{item.name}</h2>
                                    </article>
                                </section>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex flex-wrap items-center justify-end">
                <div className="mr-5">
                    <button className="focus:outline-none bg-gray-200 text-gray-600 px-5 rounded py-2 text-sm font-semibold" onClick={PrevHandler}>Önceki</button>
                </div>
                <div>
                    <button className="focus:outline-none bg-gray-200 text-gray-600 px-5 rounded py-2 text-sm font-semibold" onClick={NextHandler}>Sonraki</button>
                </div>
            </div>
        </nav>
    )
};


export default memo(Episodes);