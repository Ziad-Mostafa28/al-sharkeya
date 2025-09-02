import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import RecipesDetailsComm from '../../components/Recipes/RecipesDetailsComm/RecipesDetailsComm'

export default function RecipesDetails() {
  return (
    <>
            <SecBanner
               title="Recipes"
               subtitle="Resources"
               image="/img/recipes/banner.png"
            />
            <RecipesDetailsComm />
    
    
    </>
  )
}
