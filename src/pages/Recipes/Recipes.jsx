import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import Basbousa from '../../components/Resources/Recipes/Basbousa/Basbousa'
import RecipesItems from '../../components/Resources/Recipes/RecipesItems/RecipesItems'
import { useSelector } from 'react-redux';

export default function Recipes() {

    const { data} = useSelector((state) => state.recipe);
    const news = data?.data?.banner || [];

    const { title,banner } = news;
  return (
    <>
            <SecBanner
               title={title}
               subtitle="Resources"
               image={banner}
            />
            <Basbousa/>
            <RecipesItems/>


    
    </>
  )
}
