import Category from '../category/Category';
import Input from '../input/Input';

/**
 * Блок с поиском, логотипом и категориями
 */

function Search() {
    return (
        <div className="search-box">
            <div className="logo">Поисковик</div>
            <div className="search">
                <Category />
                <Input />
            </div>    
        </div>
    )

}

export default Search