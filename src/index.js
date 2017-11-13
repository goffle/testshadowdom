import React from 'react';
import ReactDOM from 'react-dom';
import ShadowDOM from 'react-shadow';

ReactDOM.render(
    <div>
        <ShadowDOM include={[ 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.css']}>
            <div>
                <i className="fa fa-comments fa-2x"></i>icon
            </div>
        </ShadowDOM >
    </div>
    , document.getElementById('chadvise'));

