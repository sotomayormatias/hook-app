export const Quote = ({quote, author}) => (
    <blockquote className="blockquote text-end mt-3">
        <p className="mb-3">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
    </blockquote>
)