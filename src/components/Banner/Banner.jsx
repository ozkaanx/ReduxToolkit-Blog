
import BannerSlick from 'components/Banner/Slider/Slider'
import React from 'react'
import './style.scss'
import RecentBox from './RecentBox/RecentBox'

function Banner() {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-lg-8 mb-5">
                    <BannerSlick/>
                </div>
                <div className="col-lg-4">
                    <RecentBox/>
                </div>
            </div>
        </div>
    )
}

export default Banner
