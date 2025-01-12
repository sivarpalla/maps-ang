import { Company } from "./Company";
import { User } from "./User";

//instructions to every other class on how they can be an argument to "addMarker"
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }    
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });
        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(this.googleMap, marker);
        })
    }
    //duplicate or reduntant way of code
    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng,
    //         },
    //     });
    // }


}