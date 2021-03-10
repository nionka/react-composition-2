import PropsTypes from 'prop-types';

/**
 * Рекламный баннер
 */
function Promo({banner}) {
    return (
        <div className="promo">
            <img src={banner} alt="banner"></img>
        </div>

    )
}

export default Promo

Promo.propTypes = {
    banner: PropsTypes.string.isRequired
}