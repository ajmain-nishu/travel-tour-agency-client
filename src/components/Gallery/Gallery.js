import React from 'react';
import galleryOne from '../../Images/Gallery/gallery-1.png';
import galleryTwo from '../../Images/Gallery/gallery-2.png';
import galleryThree from '../../Images/Gallery/gallery-3.png';
import galleryFour from '../../Images/Gallery/gallery-4.png';
import galleryFive from '../../Images/Gallery/gallery-5.png';
import gallerySix from '../../Images/Gallery/gallery-6.png';



// navbar gallery section
const Gallery = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">

                        {/* gallery image one */}
                        <div className="p-3">
                            <img className="w-100 rounded" src={galleryOne} alt="" />
                        </div>

                        {/* gallery image two */}
                        <div className="p-3">
                            <img className="w-100 rounded" src={galleryTwo} alt="" />
                        </div>
                    </div>

                    
                    <div className="col-12 col-md-4">

                        {/* gallery image three */}
                        <div className="p-3">
                            <img className="w-100 rounded" src={galleryThree} alt="" />
                        </div>

                        {/* gallery image four */}
                        <div className="p-3">
                            <img className="w-100 rounded" src={galleryFour} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">

                        {/* gallery image five */}
                        <div className="p-3">
                            <img className="w-100 rounded" src={galleryFive} alt="" />
                        </div>

                        {/* gallery image six */}
                        <div className="p-3">
                            <img className="w-100 rounded" src={gallerySix} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Gallery;