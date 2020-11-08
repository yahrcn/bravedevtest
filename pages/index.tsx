import Head from "next/head";
import Link from "next/link";
import {
    GlobalStyle,
    UnorderedList,
    ListItem,
    ListItemImage,
    Title,
    SubTitle,
} from "../static/cssComponents";

import { operatorsList } from "../static/operatorsList";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Brave Developers test task</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <GlobalStyle />
                <Title>Добро пожаловать!</Title>
                <SubTitle>Выберете мобильного оператора:</SubTitle>
                <UnorderedList>
                    {operatorsList.map((item, id) => (
                        <ListItem key={id}>
                            <Link
                                href="/payment/[OperatorForm]"
                                as={`/payment/${item.title}`}
                            >
                                <ListItemImage
                                    src={item.icon}
                                    alt={item.title}
                                />
                            </Link>
                        </ListItem>
                    ))}
                </UnorderedList>
            </main>
        </div>
    );
}
