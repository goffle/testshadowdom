import React from 'react';
import ReactDOM from 'react-dom';
import ShadowDOM from 'react-shadow';


const head = document.getElementsByTagName('head')[0];
const links = [
  'https://fonts.googleapis.com/css?family=Spectral+SC',
    'font_awesome.css'
];

for(const link of links){
    const elmt = document.createElement('link');
    elmt.setAttribute('href', link);
    elmt.setAttribute('rel', 'stylesheet');

    head.appendChild(elmt);
}

ReactDOM.render(
    <div>
        <ShadowDOM include={
            [
                'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.css',
                'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
                'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css',
                'style.css'
            ]
        }>
            <div className="container">
                <p className="text-center">
                    <i className="fa fa-comments fa-2x"></i> icon
                </p>
            </div>
        </ShadowDOM >
    </div>
    , document.getElementById('chadvise'));

