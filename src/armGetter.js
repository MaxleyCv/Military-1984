
import axios from 'axios';

async function getAll(id){

    const res = await axios.get('http://127.0.0.1:5000/arms');

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
    console.log(res.data)
    return res.data[0];

}

export default getAll;
