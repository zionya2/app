import './Post.scss';

type PostProps = {
    data:Record<string, string>;
}
function Post ({data}:PostProps) {
    return (
        <div className = "post">
            <div className="title">{data.title}</div>
            <div className="body">{data.body}</div>
        </div>
    );
}
export default Post;