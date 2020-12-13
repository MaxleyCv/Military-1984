import React, { useState, useEffect } from "react";
import {
  ItemImage,
  WeaponParameter,
  ParamVal,
  ParamName,
  ItemFrame,
  ItemOrigin,
} from "./ItemStyles";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import getAll from "../armGetter";

export const ItemContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 10px;
  position: absolute;
  width: 100%;
  height: 200vh;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const WeaponSite = (props) => {
  const [item, setItems] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      let a = await getAll();
      setItems(a);
    };

    fetch();
  }, []);

  return (
    <ItemContainer>
      <ItemFrame>
        <ItemOrigin>
          <ItemImage />
          <WeaponParameter>
            <ParamVal>{item.text} </ParamVal>
          </WeaponParameter>
        </ItemOrigin>
        <WeaponParameter>
          <ParamName>From: </ParamName>
          <ParamVal>{item.country} </ParamVal>
        </WeaponParameter>
        <WeaponParameter>
          <ParamName>You will need: </ParamName>
          <ParamVal>{item.people} </ParamVal>
          <ParamName> people </ParamName>
        </WeaponParameter>
        <WeaponParameter>
          <ParamName>Serial number: </ParamName>
          <ParamVal>{item.serial} </ParamVal>
        </WeaponParameter>
        <WeaponParameter>
          <ParamName>Weapon class: </ParamName>
          <ParamVal>{item.type} </ParamVal>
        </WeaponParameter>
        <WeaponParameter>
          <ParamName>We have </ParamName>
          <ParamVal>{item.count} </ParamVal>
        </WeaponParameter>
      </ItemFrame>
    </ItemContainer>
  );
};

export default WeaponSite;
