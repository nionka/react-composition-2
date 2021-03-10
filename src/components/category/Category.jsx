import {categories} from '../../data/data';

/**
 * Категории поисковика
 */

function Category() {
    return (
        <ul className="category">
            {categories.map((item, index) => <li key={index} className="title"><a href="https://www.google.com">{item}</a></li>)}
        </ul>
    )    
}

export default Category