import axios from 'axios';

export default async function fetchFilteredArms(filterName, filterCount){
    let url = 'http://127.0.0.1:5000/arms';
    if (filterCount == 0){
        filterCount = 20000000000;
    }
    if (filterName == ""){
        filterName = "nichts";
    }
    url += ("/max_sol=" + filterCount);
    url += ("/name=" + filterName);
    const res = await axios.get(url);
     res.data.map(
        (weapon) => {
              weapon.type = "secret"
              weapon.serial = weapon._serial_number
              weapon.count = weapon._count_in_stack
              weapon.people = weapon._operation_crew_count
              weapon.country = weapon._country_of_origin
              weapon.text = "Noi aurem poi Wageting we sparetti qui sqa wartensa poinoin pe Wegene sperti o swane me sqa pane po fertile cussicze pint qui fosture"
        }
    )
    return res.data;
}