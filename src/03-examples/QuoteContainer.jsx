import { Quote } from "./Quote";

export const QuoteContainer = ({data}) => (
    data && data.map(({quote, author}) => <Quote quote={quote} author={author} />)
)