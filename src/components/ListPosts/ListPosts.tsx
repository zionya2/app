import Post from '../Post/Post';

import "./ListPosts.scss"

function  ListPosts (props:Array<Record<string, string>>) {
    return (
        <div className = "listPosts">
                {props.map(item => Post(item)) }
        </div>
    );
}
export default  ListPosts;