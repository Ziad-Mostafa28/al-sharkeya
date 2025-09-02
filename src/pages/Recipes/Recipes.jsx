import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import Basbousa from '../../components/Resources/Recipes/Basbousa/Basbousa'
import RecipesItems from '../../components/Resources/Recipes/RecipesItems/RecipesItems'

export default function Recipes() {
  return (
    <>
            <SecBanner
               title="Recipes"
               subtitle="Resources"
               image="/img/recipes/banner.png"
            />
            <Basbousa/>
            <RecipesItems/>


    
    </>
  )
}
