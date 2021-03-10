import { news, stocks, announs } from '../../data/data';
import NewsBlock from '../newsBlock/NewsBlock';
import Stocks from '../stocks/Stocks';
import Announcement from '../announcement/Announcement';

/**
 * Шапка главной страницы с выводом новостей, валютой и анонсом
 */

function Header() {
    return (
        <div className="header">
            <div>
                <NewsBlock news={news} />
                <Stocks stocks={stocks} />
            </div>
            <Announcement {...announs} />    
        </div>
    )
}

export default Header