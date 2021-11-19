import './Post.scss';

function Post (props:Record<string, string>) {
    return (
        <div className = "post">
            <div className="title">{props.title}</div>
            <div className="body">{props.body}</div>
        </div>
    );
}
export default Post;