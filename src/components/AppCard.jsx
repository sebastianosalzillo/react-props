import style from './AppCard.module.css';
import PostCard from './PostCard';
import posts from './posts';

function AppCard() {
    
    const publishedPosts = posts.filter((post) => post.published);

    return (
        <div>
            {publishedPosts.map((post) => (
                <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    image={post.image}
                    content={post.content}
                    tags={post.tags}
                />
            ))}
        </div>
    );
}

export default AppCard;
