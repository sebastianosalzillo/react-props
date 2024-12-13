import style from './AppCard.module.css';

function PostCard({ id, title, image, content, tags }) {
    
    const defaultImage = 'https://via.placeholder.com/400x200?text=Immagine+non+disponibile';

  

const tagStyles = {
    html: style.htmlTag,
    css: style.cssTag,
    js: style.jsTag,
    php: style.phpTag,
    default: style.defaultTag,
};


const getTagStyle = (tag) => tagStyles[tag.toLowerCase()] || tagStyles.default;

    return (
        <div key={id} className={style.card}>
            <div className={style.img}>
                <img src={image || defaultImage} alt={title || 'Immagine non disponibile'} />
            </div>
            <div className={style.text}>
                <h2>{title}</h2>
                <p>{content}</p>
                <div className={style.tags}>
                    {tags && tags.map((tag, index) => (
                        <span key={index} className={`${style.tag} ${getTagStyle(tag)}`}>
                            {tag}
                        </span>
                    ))}
                </div>
                <button className={style.cardButton}>Leggi</button>
            </div>
        </div>
    );
}

export default PostCard;
