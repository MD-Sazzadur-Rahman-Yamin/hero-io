import React from 'react';
import Banner from '../components/Banner';
import States from '../components/States';
import TrandingApps from '../components/TrandingApps'
import { useLoaderData } from 'react-router';

const Home = () => {
    const trandingAppData = useLoaderData();
    return (
      <div>
        <Banner></Banner>
        <States></States>
        <TrandingApps trandingAppData={trandingAppData}></TrandingApps>
      </div>
    );
};

export default Home;