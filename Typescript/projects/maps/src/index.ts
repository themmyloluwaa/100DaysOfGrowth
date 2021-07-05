import { Company } from "./Company";
import { User } from "./User";

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

const mapDiv = document.getElementById("map");

new google.maps.Map(mapDiv, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
