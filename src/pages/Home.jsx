import React from 'react';
import Banner from '../components/Banner';
import States from '../components/States';
import TrandingApps from '../components/TrandingApps'

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <States></States>
        <TrandingApps></TrandingApps>
      </div>
    );
};

export default Home;