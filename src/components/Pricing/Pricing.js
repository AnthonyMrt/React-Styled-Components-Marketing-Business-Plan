import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>99.99€</PricingCardCost>
                <PricingCardLength>par mois</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    100 nouveaux utilisateurs
                  </PricingCardFeature>
                  <PricingCardFeature>10,000€ de budget</PricingCardFeature>
                  <PricingCardFeature>analyse de reciblage</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choisir ce plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>299.99€</PricingCardCost>
                <PricingCardLength>par mois</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    1000 nouveaux utilisateurs
                  </PricingCardFeature>
                  <PricingCardFeature>50,000€ de budget</PricingCardFeature>
                  <PricingCardFeature>
                    Analyse de génération de leads
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choisir ce plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>999.99€</PricingCardCost>
                <PricingCardLength>par mois</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Utilisateurs illimités
                  </PricingCardFeature>
                  <PricingCardFeature>Budget illimité</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choisir ce plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
