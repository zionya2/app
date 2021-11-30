import Post from '../Post/Post';

import "./ListPosts.scss"

type ListPostsProps = {
    data:Array<Record<string, string>>;
};

function  ListPosts ({data}:ListPostsProps) {
    return (
        <div className = "listPosts">
                {data.map(item => < Post data={item}/>) }
        </div>
    );
}
export default  ListPosts;