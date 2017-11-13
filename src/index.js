import React from 'react';
import ReactDOM from 'react-dom';
import ShadowDOM from 'react-shadow';

ReactDOM.render(
    <div>
        <ShadowDOM include={[ '/font.css']}>
            <div>
                <i className="fa fa-comments fa-2x"></i>icon
            </div>
        </ShadowDOM >
    </div>
    , document.getElementById('chadvise'));

