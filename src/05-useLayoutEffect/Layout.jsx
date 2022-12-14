import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';


export const Layout = () => {
    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  
    //const { author, quote } = !!data && data[0];
  
    return (
      <>
        <h1>Breaking Bad Quotes</h1>
        <hr />
        {
          isLoading
            ?
            (<LoadingQuote />)
            : (
              <Quote {...data[0] } />
            )
        }
  
        <button className="btn btn-primary mt-2" onClick={() => increment(1)}>
          Next quote
        </button>
        <button className="btn btn-primary mt-2" onClick={() => decrement(1)}>
          Back quote
        </button>
        <button className="btn btn-primary mt-2" onClick={reset}>
          Reset
        </button>
  
      </>
    )
}
