import Head from "next/head";
import { Label, Input, DivBackground, Button } from "./cssComponents";
import Router from "next/router";

export default function PaymentForm() {
    return (
        <div className="container">
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
                    <form>
                        <Label htmlFor="customerOperator">
                            Ваш выбранный оператор
                        </Label>
                        <em>*</em>
                        <Input
                            type="text"
                            id="customerOperator"
                            name="customerOperator"
                            required
                        />
                        <Label htmlFor="customerPhone">Ваш телефон</Label>
                        <em>*</em>
                        <Input
                            type="tel"
                            id="customerPhone"
                            name="customerPhone"
                            required
                        />
                        <Label htmlFor="customerMoney">
                            Введите сумму (максимум 1000руб.)
                        </Label>
                        <em>*</em>
                        <Input
                            type="number"
                            id="customerMoney"
                            name="customerMoney"
                            required
                        />
                        <Button type="submit">Оплатить</Button>
                    </form>
                </DivBackground>
            </main>

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                * {
                    font-family: "Spartan", sans-serif;
                }
                em {
                    color: red;
                }
            `}</style>
        </div>
    );
}
