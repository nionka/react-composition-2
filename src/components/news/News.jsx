import PropTypes from 'prop-types';

/**
 * Вывод одной новости
 */

function News({ item }) {
    return (
        <li className="news__item">
            <img src={item.logo} alt="news"></img>
            <a href={item.link}>
                {item.title}
            </a>
        </li>
    )
}

News.propTypes = {
    item: PropTypes.object.isRequired
}

export default News