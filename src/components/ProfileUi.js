import React from 'react';
import './profileui.css'




function ProfileUi(props){
    return(
        <div className='prof-container'>
        <div className='box'>
            <img className='img-box' src={ props.imgUrl } alt="profile-img"/>
            <h2 className='name'>{ props.name }</h2>
            <h3 className='des'>{ props.designation }</h3>
            
        </div>
        </div>
    );

}

export default ProfileUi;