import React, { useState, setState, useEffect } from "react";
import { BaseContainer } from "./BaseStyle";
import {
  SettingsContainer,
  SoldiersCount,
  SoldierCheckbox,
  SoldierInput,
} from "./components/Settings/SettingsComponents";
import {
  HeroContainer,
  WeaponGrid,
  WelcomeBar,
  HeroButton,
} from "./components/HeroComponents";
import WeaponFrame from "./components/WeaponFrame";
import fetchFilteredArms from "./ArmFetcher";
import "./base.css";

const Base = () => {
  let [items, setItems] = useState([]);
  const [filterName, setName] = useState("");
  const [filterCount, setCount] = useState("");

  const [loading, setLoading] = useState(true);
  let [sm, setSm] = useState(3);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchArms = async () => {
      let res = await fetchFilteredArms(filterName, filterCount);
      setItems(res);
      setLoading(false);
    };
    fetchArms();
    console.log(loading);
  });

  if (sm != 0) {
    var test3 = items.slice(0, 3);
    items = test3;
  }

  console.log(filterName);
  console.log(items);
  return (
    <BaseContainer>
      <SettingsContainer>
        <SoldiersCount>
          <p>How many soldiers do you have? </p>
          <SoldierInput
            type="number"
            defaultValue="0"
            min="0"
            id="solIn"
            onChange={(event) => setCount(event.target.value)}
          ></SoldierInput>
        </SoldiersCount>
        <SoldiersCount>
          <p>Find by name? </p>
          <SoldierCheckbox
            type="text"
            id="nameOfItem"
            onChange={(event) => setName(event.target.value)}
          ></SoldierCheckbox>
        </SoldiersCount>
      </SettingsContainer>
      <HeroContainer>
        {loading && <div class="loader"></div>}
        <WelcomeBar>FORM YOUR BRIGADE</WelcomeBar>
        <WeaponGrid>
          {items.map((weapon) => (
            <WeaponFrame
              id={weapon.id}
              people={weapon.people}
              country={weapon.country}
              serial={weapon.serial}
              type={weapon.type}
              count={weapon.count}
            />
          ))}
        </WeaponGrid>
        <HeroButton
          value="0"
          onClick={(event) => {
            setSm(event.target.value);
            scroll();
          }}
        >
          Show more
        </HeroButton>
      </HeroContainer>
    </BaseContainer>
  );
};

export default Base;
