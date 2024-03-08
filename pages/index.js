import React from 'react'
//internal import

import Style from '../styles/index.module.css'
import { Collection, NFTCard, Filter, HeroSection, Title, Service, Subscribe, BigNFTSlider, Category } from '../components/ComponentsIndex'


const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life." />
      <Collection />
      <Title heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life." />
      <Filter />
      <NFTCard />
      <Title heading="Browse by category"
        paragraph="Explore the NFTs in the most faetured categories." />
      <Category />
      <Subscribe />
    </div>
  )
}

export default Home