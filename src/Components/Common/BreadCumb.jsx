import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import { Link } from "react-router-dom";

const BreadCumb = ({Title,bgimg}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (

        <div className="breadcumb-section">
        <div className="breadcumb-wrapper" data-background={bgimg}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">{Title}</h1>
                            <ul className="breadcumb-menu">
                                <li><Link to="/">Home</Link></li>
                                <li className="text-white">/</li>
                                <li className="active">{Title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default BreadCumb;