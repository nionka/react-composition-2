import africa from '../img/turkana2.jpg';
import idea from '../img/idea.png';

const news = [
    {logo: idea, title: 'На Кубани вырос огромный помидор', link: 'https://www.google.com'},
    {logo: idea, title: 'Наконец-то изобрели вечный двигатель', link: 'https://www.google.com'},
    {logo: idea, title: 'Мобильные телефоны стали еще тоньше', link: 'https://www.google.com'},
    {logo: idea, title: 'Кролики отказались есть морковку', link: 'https://www.google.com'},
    {logo: idea, title: 'Вышел новый Форсаж 255', link: 'https://www.google.com'},
    {logo: idea, title: 'Элкисир молодости уже в продаже', link: 'https://www.google.com'},
];

const stocks = [
    {title: 'USD', value: 75},
    {title: 'EUR', value: 88},
    {title: 'НЕФТЬ', value: 62}
];

const announs = {
    src: africa,
    alt: 'Africa',
    title: 'Как в Африке празднуют 8 марта'
}

const categories = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Еще'];

const banner = 'https://www.alladvertising.ru/porridge/146/h_3a630b4ea6fd1c9d96fabdb6fb2721f1';

const visit = [
    {title: 'Недвижимость', description: 'квартиры-малютки'},
    {title: 'Маркет', description: 'все о телефонах'},
    {title: 'Авто.ру', description: 'Камаз на автомате'}
]

const guide = [
    {time: '9:00', name: 'Лунтик'},
    {time: '12:00', name: 'Анатомия страсти'},
    {time: '14:00', name: 'Шерлок Холмс'}
]

const exhibitions = ['Ночь в музее', 'Танцующие фонтаны', 'Пикассо']

export { news, stocks, announs, categories, banner, visit, guide, exhibitions }