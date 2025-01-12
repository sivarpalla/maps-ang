/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// const user = new User();

// console.log(user);

// const company = new Company();
// console.log(company);

// new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     zoom: 1,
//     center: {
//         lat: 0,
//         lng: 0,
//     },
// });

const customMap = new CustomMap("map");
const user = new User();

const company = new Company();

customMap.addMarker(user);  //no need to explicitly declare the user as a Mappable object, because ts is smart to check if the mappable objects are present in User and Company classes
customMap.addMarker(company);
