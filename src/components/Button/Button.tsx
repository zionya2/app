import './Button.scss';

function Button (props:Record<string, string>) {
    return (
        <button key={props.title} >{props.title}</button>
    );
}
export default Button;