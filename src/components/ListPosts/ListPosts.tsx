import Post from '../Post/Post';
import Button from '../Button/Button';
import "./ListPosts.scss"

function  ListPosts (props:Record<string, string>) {
    return (
        <div className = "ListPosts">
            <header>
                {Button(props)}
                {Button(props)}
            </header>
            <div className="listBody">
                { Post(props)}
                { Post(props)}
            </div>
        </div>
    );
}
export default  ListPosts;