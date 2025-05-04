import React from 'react';
import CategoryList from '../../components/home/CategoryList';
import HorizontolProductCategory from '../../components/home/HorizontolProductCategory';

const Home = () => {
  return (
    <>
      <CategoryList />
      <HorizontolProductCategory heading={"Latest Product"} />
    </>
  );
}

export default Home;
