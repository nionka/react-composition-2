import React from 'react';
import Header from '../header/Header';
import Search from '../search/Search';
import Promo from '../promo/Promo';
import Media from '../media/Media';
import {banner} from '../../data/data';

/**
 * Главный экран
 */

function MainScreen() {
    return (
        <div className="container">
            <Header />
            <Search />
            <Promo banner={banner}/>
            <Media />
        </div>
    )
}

export default MainScreen