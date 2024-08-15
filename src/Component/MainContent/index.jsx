import React from 'react';
import SearchBar from "../SearchBar";
import ServiceCategoryList from '../ServiceCategoryList';
import PopularServices from "../PupolarServices";
import './MainContent.css';

function MainContent() {
    return (
        <div className="main-content">
            <SearchBar/>
            <ServiceCategoryList />
            <PopularServices />
        </div>
    );
}

export default MainContent;
