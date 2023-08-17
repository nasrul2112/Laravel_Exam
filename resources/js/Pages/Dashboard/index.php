import React from 'react';
import Helmet from 'react-helmet';

import Layout from './../../Shared/Layout';

const Dashboard = (props) => {
    return (
        <div>
            <Helmet>
                <title> Dashboard</title>
            </Helmet>

            <h1> style = {{marginTop: 20}} Selamat Datang </h1>
        </div>
    );
}

Dashboard.layout = page => <layout children={page}

export default Dasboard;