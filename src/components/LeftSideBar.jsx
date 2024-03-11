import React from 'react';
import { LeftSideMenuList } from "../utils/leftSideMenu"

const LeftSideBar = () => {
    return (
        <div className='h-100 leftSideBar'>
            <div className='leftSideBar__logo text-center'>
                <img src="nexus_malls.png" alt="" />
            </div>
            <div className='m-auto text-center mt-4'>
                <img src="user_profile.png" alt="" />
                <div className='leftSideBar__userName'>
                    <h6 className='mt-3 fw-normal'>Welcome, Mary James</h6>
                    <p>15-02-24 | 21:20</p>
                </div>
            </div>
            <div className="leftSideBar__menus">
                {LeftSideMenuList.map((item) => (
                    <div className={item.active ? 'p-2 activeMenu ' : "p-2"}>
                        {<item.icon className='fs-5 me-2' />}
                        <span className='text-muted'> {item?.label}</span>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default LeftSideBar