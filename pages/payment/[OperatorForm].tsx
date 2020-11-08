import Router, { useRouter } from "next/router";
import { FC } from "react";
import Head from "next/head";
import {
    GlobalStyle,
    Label,
    Input,
    DivBackground,
    Button,
} from "../../static/cssComponents";

import { operatorsList } from "../../static/operatorsList";

export const OperatorForm: FC = () => {
    const router = useRouter();
    const { OperatorForm } = router.query;

    const onPayClick = (e: any) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            body: new FormData(e.target),
        };
        fetch("/api/payment", requestOptions).then(async (response) => {
            const json = await response.json();
            alert(json.title);
            if (response.ok) Router.back();
        });
    };

    return (
        <div className="container">
            <GlobalStyle />
            <Head>
                <title>Brave Developers окно оплаты</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Spartan&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <DivBackground>
                    <Button
                        onClick={() => Router.back()}
                        style={{ marginBottom: "24pt" }}
                    >
                        Назад
                    </Button>
                    <form onSubmit={onPayClick}>
                        <Label htmlFor="customerOperator">
                            Ваш выбранный оператор
                        </Label>
                        <em>*</em>
                        <Input
                            type="text"
                            id="customerOperator"
                            name="customerOperator"
                            value={operatorsList[OperatorForm].title}
                            readOnly
                            required
                        />
                        <Label htmlFor="customerPhone">Ваш телефон</Label>
                        <em>*</em>
                        <Input
                            type="tel"
                            id="customerPhone"
                            name="customerPhone"
                            pattern="7[0-9]{10}"
                            placeholder="71234567890"
                            maxLength="11"
                            required
                        />
                        <Label htmlFor="customerMoney">
                            Введите сумму (максимум 1000₽)
                        </Label>
                        <em>*</em>
                        <Input
                            type="number"
                            id="customerMoney"
                            name="customerMoney"
                            min="1"
                            max="1000"
                            required
                        />
                        <Button type="submit">Оплатить</Button>
                    </form>
                </DivBackground>
            </main>
        </div>
    );
};

export default OperatorForm;
