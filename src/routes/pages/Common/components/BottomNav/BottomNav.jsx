import React from 'react';

import './BottomNav.css';

export const BottomNav = ({

}) => {
    return(
        <div>
            <div className='bottom-nav-container'>
                <div className="bottom-nav">
                    <button>메뉴</button>
                    <button>홈</button>
                    <button>즐겨찾기</button>
                    <button>마이메뉴</button>
                    <button>충전하기</button>
                </div> 
            </div>
        </div>
    )
}