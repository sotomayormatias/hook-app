import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { QuoteContainer } from "../03-examples/QuoteContainer";

export const Layout = () => {
    const {counter, plusOne, lessOne, reset} = useCounter(1);
    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;

    const {data, isLoading, hasEror} = useFetch(url);

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            <button
                className="btn btn-primary mt-4"
                onClick={lessOne}
                disabled={isLoading}
            >
                Less Quote
            </button>
            <button
                className="btn btn-primary mt-4"
                onClick={plusOne}
                disabled={isLoading}
            >
                Plus Quote
            </button>
            <button
                className="btn btn-primary mt-4"
                onClick={reset}
                disabled={isLoading}
            >
                Restart
            </button>

            {
                isLoading
                ? <LoadingQuote />
                : <QuoteContainer data={data} />
            }
        </>
    )
}