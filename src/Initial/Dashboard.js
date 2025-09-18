import React, { useState } from 'react';
import heritagePlaces from '../Essentials/HeritagePlaces';
import Placecard from './Placecard';
import  filterByDistricts from '../Essentials/essentials';
import './Dashboard.css'

const Dashboard = () => {

    const [ filter, setFilter] = useState('default');

     let filteredPlaces = filter !== 'District'
        ? heritagePlaces.filter(place => place.type === filter)
        : heritagePlaces;

    if (filter === 'District') {
        filteredPlaces = filterByDistricts(heritagePlaces);
    } else if (filter === 'default') {
        filteredPlaces = heritagePlaces;
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h3>Heritage Places</h3>
                <input type="text" placeholder="Search Places" />
            </div>

            <div className="dashboard-filter">
                <select className="filter-by" id="filter-by" onChange={ (e) => setFilter(e.target.value)}>
                    <option value="default">Filter By</option>
                    <option value="District">Districts</option>
                    <option value="Temple">Temples</option>
                    <option value="Palace">Palaces</option>
                    <option value="Memorial">Memorials</option>
                </select>
            </div>

            <div className="dashboard-main">

                {filter === 'default' && filteredPlaces.map((place) => (
                    <Placecard place={place} />
                ))}

                {filter === 'District' &&
                    Object.entries(filterByDistricts(heritagePlaces)).map(([district, groupList]) => (
                        <div key={district} className="district-group">
                            <h3 className="district-heading">{district}</h3>
                            <div className="district-places">
                                {groupList.map((place) => (
                                <Placecard place={place} />
                                ))}
                            </div>
                        </div>
                ))}

                {filter !== 'District' && filteredPlaces.map((place) => (
                    <Placecard place={place} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard;