import './Button.scss';

type buttonProps = {
    title:string;
    onClick:any;
    value:string;
};

function Button (props:buttonProps) {
    return (
        <button value={props.value} key={props.title} onClick={props.onClick} >{props.title}</button>
    );
}
export default Button;