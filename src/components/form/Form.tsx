import Post from '../post/Post';
import "./Form.scss"

function Form (props:Record<string, string>) {
    return (
    <div className = "form">
        { Post(props)}
        { Post(props)}
    </div>
      
    );
}
export default Form;