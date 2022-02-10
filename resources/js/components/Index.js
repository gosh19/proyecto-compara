import React from 'react';
import ReactDOM from 'react-dom';

import TablaUsers from './TablaUsers.js';
import FormRegistro from './FormRegistro.js';

function Index() {



    return (
        <div className="container">
            <div className="row justify-content-center">
                <FormRegistro />
                <TablaUsers  />
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById('tabla-users')) {
    ReactDOM.render(<Index />, document.getElementById('tabla-users'));
}
