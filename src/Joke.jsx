export default function Joke(props)
{
    const {setup, punchline, isfunny } = props;
    return(
        <div>
            {setup && <h3>Setup: {setup}</h3>}
            <h2>Punchline: {punchline}</h2>
            <h3>{isfunny}</h3>
            <hr/>
        </div>
    )
}