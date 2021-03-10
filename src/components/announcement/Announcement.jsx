import PropTypes from 'prop-types';


/** выводит интересные новости */

function Announcement({ alt, src, title }) {
    return (
        <div className="announs">
            <h2>Что посмотреть, что почитать</h2>
            <div className="img-box">
                <img src={src} alt={alt} className="announs__img"></img>
            </div>
            <div className="announs__title title"><a href="https://www.google.com">{title}</a></div>
            
        </div>
    )
}

Announcement.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Announcement