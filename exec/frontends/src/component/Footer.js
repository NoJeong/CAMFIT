import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div style={{zIndex:"2"}} className="Footer">

                <p className="Service">CamFit</p>
                <div className="AboutUs">
                    <div className="TeamIntroduce">
                        <p className="Team">(주)인공눈물</p>
                        <p className="TeamMember">Team Leader | 이경연</p>
                        <p className="TeamMember">Tech Leader | 백규태</p>
                        <p className="TeamMember">Team Member | 이대헌 박노정 이혜진</p>
                    </div>

                    <div className="Contact">
                        <p className="ContactUs">전화 | 010-9935-4156 (평일 09:00~18:00)</p>
                        <p className="ContactUs">주소 | 경상북도 구미시 3공단3로 302</p>
                    </div>
                </div>
                
                <p className="Copyrights">
                    <a href="https://www.ssafy.com/">Copyright ⓒ 2021 인공눈물 in SSAFY. All rights reserved.</a>
                </p>
            </div>
        )
    }
}

export default Footer