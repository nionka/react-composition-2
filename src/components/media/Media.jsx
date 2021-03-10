import MediaBlock from '../mediaBlock/MediaBlock';
import {visit, guide, exhibitions} from '../../data/data';

/**
 * Нижняя часть страницы с анонсами в различных областях
 */

function Media() {
    return (
        <div className="media">
            <MediaBlock  title={'Погода'} type={'weather'}>
                <img src="https://pngicon.ru/file/uploads/solnce.png" alt="weather"></img>
                <span>+20°</span>
                <div>
                    <div>Утром +17</div>
                    <div>Вечером +15</div>
                </div>
            </MediaBlock>
            <MediaBlock title={'Посещаемое'} type={'visit'}>
                {visit.map((item, index) => <div key={index}><span>{item.title}</span> - {item.description}</div>)}
            </MediaBlock>
            <MediaBlock title={'Карты Германии'}>
                <span>Расписание</span>
            </MediaBlock>
            <MediaBlock title={'Телепрограмма'} type={'guide'}>
                {guide.map((item, index) => <div key={index}><span>{item.time}</span>{item.name}</div>)}
            </MediaBlock>
            <MediaBlock title={'Выставки'} type={'exhibitions'}>
                {exhibitions.map((item, index) => <div key={index}>{item}</div>)}
            </MediaBlock>
        </div>
    )
}

export default Media