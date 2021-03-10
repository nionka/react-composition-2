import News from '../news/News';
import PropTypes from 'prop-types';

/**
 * Блок новостей в верхней части страницы
 */

function NewsBlock({ news }) {

    return (
        <>
            <div className="newsBlock title">
                <span><a href="https://www.google.com">Сейчас в СМИ</a></span>
                <span><a href="https://www.google.com">В Германии</a></span>
                <span><a href="https://www.google.com">Рекомендуем</a></span>
            </div>
            <ul>
                {news.map((item, index) => <News key={index} item={item}/>)}
            </ul>
        </>
    )
}

NewsBlock.propTypes = {
    news: PropTypes.array.isRequired
}

export default NewsBlock