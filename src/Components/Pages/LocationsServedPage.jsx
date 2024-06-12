import React from "react";
import '../../Styling/LocationServedStyle.scss'
import { Link } from 'react-router-dom';


const LocationsServedPage = () => {
    const saltLakeCounty = ['Bluffdale', 'Cottonwood Heights', 'Draper', 'Herriman', 'Holiday', 'Kearns',  'Magna', 'Midvale', 'Millcreek', 'Murray', 'Riverton',
        'Salt Lake', 'Sandy', 'South Salt Lake', 'South Jordan','Taylorsville', 'West Jordan', 'West Valley', 'White City']
    const utahCounty = ['Alpine','American Fork', 'Cedar Hills',  'Eagle Mountain','Highland', 'Lehi', 'Lindon', 'Pleasant Grove',  'Orem','Provo', 'Saratoga Springs', 'Springville', 'Vinyard']

    return (
        <div className="location-container">
            <div className="location-header">
                <div className="header-container">
                    <h1>Junk Removal</h1>
                    <h2>Locations We Serve</h2>
                </div>
                <div className="columns">
                    <div className="salt-container">
                        <h2>Salt Lake County:</h2>
                        {saltLakeCounty.map(name => (
                            <Link key={name} to={`/locations/${name.toLowerCase().replace(/\s/g, '-')}`}>
                                <h3>{name}</h3>
                            </Link>
                        ))}
                    </div>
                    <div className="utah-container">
                        <h2>Utah County:</h2>
                        {utahCounty.map(name => (
                            <Link key={name} to={`/locations/${name.toLowerCase().replace(/\s/g, '-')}`}>
                                <h3>{name}</h3>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};
export default LocationsServedPage;
