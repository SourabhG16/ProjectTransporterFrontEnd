//import {DataService} from '../../DataService.js'
import { Component,ViewChild} from '@angular/core';
import { NavController ,FabContainer} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DestListPage } from '../dest-list/dest-list'
import {GlobalVarService} from '../../global-var.service';
import {AuthService} from '../../service/auth.service'
import * as mapboxgl from 'mapbox-gl'
import * as turf from 'turf/turf.min.js'
import $ from "jquery";
// @IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  avai_cycle;
  notificationsNumber:number;
constructor(public navCtrl: NavController,private alertCtrl: AlertController,private ModalController:ModalController,public global_var:GlobalVarService,public AuthService:AuthService) {
     this.notificationsNumber=this.global_var.Stations.length;
  }

  @ViewChild('fab')fab : FabContainer;
  ionViewDidLoad(){
    mapboxgl.accessToken = "pk.eyJ1IjoiY29kZXJtZTcyNzYiLCJhIjoiY2p2aHM5aDNhMDZoODN5cDZzZjlpM2pzMCJ9.uBcxowgZ4Uck3Sd-Zm9JJw"
    this.presentPrompt();
    this.init();
  }
  async presentModal() {
    const modal = await this.ModalController.create(DestListPage);
    modal.dismiss();
   return await modal.present();
  }
  init()
  {
    var truckLocation = [ 73.833653,18.536765];
      var warehouseLocation = [ 73.838932,18.537662];
      var station1=[73.875198,18.481164]
      var station2=[73.867328,18.463897]
      var station3=[73.891340,18.481906]
      var station4=[73.862018,18.477658]
      var station5=[73.899359,18.472468]
      var station6=[73.890061,18.462567]
      var station7=[73.904064,18.482233]
      var station8=[73.904074,18.506371]
      var station9=[73.931239,18.519967]
      var station10=[73.944617,18.500076]
      var station11=[73.934651,18.493659]
      var station12=[73.919040,18.572353]
      var station13=[73.940383,18.549904]
      var station14=[73.961284,18.553934]
      var station15=[73.945784,18.518505]
      var station16=[73.846457,18.520731]
      var station17=[73.839621,18.534441]
      var station18=[73.858493,18.529358]
      var station19=[73.830226,18.534117]
      var station20=[73.861029,18.500140]
      var station21=[73.861029,18.508172]
      var station22=[73.841351,18.518829]
      var station23=[73.887460,18.539599]
      var station24=[73.853720,18.503110]
      var station25=[73.895861,18.525668]
      var station26=[73.906351,18.522318]
      var station27=[73.896779,18.511954]
      var station28=[73.831267,18.508511]
      var station29=[73.897088,18.532827]
      var station30=[73.900182,18.553320]
      var station31=[73.841115,18.513527]
      var station32=[73.876823,18.556493]
      var station33=[73.878613,18.571155]
      var station34=[73.909240,18.545391]
      var lastQueryTime = 0;
      var lastAtRestaurant = 0;
      var keepTrack = [];
      var currentSchedule = [];
      var currentRoute = null;
      var pointHopper = {};
      var pause = true;
      var speedFactor = 50;
      
      // Add your access token
      mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZXJtZTcyNzYiLCJhIjoiY2p2aHM5aDNhMDZoODN5cDZzZjlpM2pzMCJ9.uBcxowgZ4Uck3Sd-Zm9JJw';
      // Initialize a map
      var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
        center: truckLocation, // starting position
        zoom: 12 // starting zoom
      });
      var warehouse = turf.featureCollection([turf.point(warehouseLocation)]);
      var dropoffs = turf.featureCollection([]);
      var nothing = turf.featureCollection([]);
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
        });
    map.on('load', function() {
      var marker = document.createElement('div');
      marker.className = 'truck';
      var marker1 = document.createElement('div');
      marker1.className = 'truck';
      var marker2 = document.createElement('div');
      marker2.className = 'truck';
      var marker3 = document.createElement('div');
      marker3.className = 'truck';
      var marker4 = document.createElement('div');
      marker4.className = 'truck';
      var marker5 = document.createElement('div');
      marker5.className = 'truck';
      var marker6 = document.createElement('div');
      marker6.className = 'truck';
      var marker7 = document.createElement('div');
      marker7.className = 'truck';
      var marker8 = document.createElement('div');
      marker8.className = 'truck';
      var marker9 = document.createElement('div');
      marker9.className = 'truck';
      var marker10= document.createElement('div');
      marker10.className = 'truck';
      var marker11 = document.createElement('div');
      marker11.className = 'truck';
      var marker12 = document.createElement('div');
      marker12.className = 'truck';
      var marker13 = document.createElement('div');
      marker13.className = 'truck';
      var marker14 = document.createElement('div');
      marker14.className = 'truck';
      var marker15 = document.createElement('div');
      marker15.className = 'truck';
      var marker16 = document.createElement('div');
      marker16.className = 'truck';
      var marker17 = document.createElement('div');
      marker17.className = 'truck';
      var marker18 = document.createElement('div');
      marker18.className = 'truck';
      var marker34 = document.createElement('div');
      marker34.className = 'truck';
      var marker19 = document.createElement('div');
      marker19.className = 'truck';
      var marker20 = document.createElement('div');
      marker20.className = 'truck';
      var marker21 = document.createElement('div');
      marker21.className = 'truck';
      var marker22 = document.createElement('div');
      marker22.className = 'truck';
      var marker23 = document.createElement('div');
      marker23.className = 'truck';
      var marker24 = document.createElement('div');
      marker24.className = 'truck';
      var marker25 = document.createElement('div');
      marker25.className = 'truck';
      var marker26 = document.createElement('div');
      marker26.className = 'truck';
      var marker27 = document.createElement('div');
      marker27.className = 'truck';
      var marker28 = document.createElement('div');
      marker28.className = 'truck';
      var marker29 = document.createElement('div');
      marker29.className = 'truck';
      var marker30 = document.createElement('div');
      marker30.className = 'truck';
      var marker31 = document.createElement('div');
      marker31.className = 'truck';
      var marker32 = document.createElement('div');
      marker32.className = 'truck';
      var marker33 = document.createElement('div');
      marker33.className = 'truck';
      // Create a new marker 
      
var stationMarker1 = new mapboxgl.Marker(marker1).setLngLat(station1);
stationMarker1.addTo(map);
var stationMarker2 = new mapboxgl.Marker(marker2).setLngLat(station2);
stationMarker2.addTo(map);
var stationMarker3 = new mapboxgl.Marker(marker3).setLngLat(station3);
stationMarker3.addTo(map);
var stationMarker4 = new mapboxgl.Marker(marker4).setLngLat(station4);
stationMarker4.addTo(map);
var stationMarker5 = new mapboxgl.Marker(marker5).setLngLat(station5);
stationMarker5.addTo(map);
var stationMarker6 = new mapboxgl.Marker(marker6).setLngLat(station6);
stationMarker6.addTo(map);
var stationMarker7 = new mapboxgl.Marker(marker7).setLngLat(station7);
stationMarker7.addTo(map);
var stationMarker8 = new mapboxgl.Marker(marker8).setLngLat(station8);
stationMarker8.addTo(map);
var stationMarker9 = new mapboxgl.Marker(marker9).setLngLat(station9);
stationMarker9.addTo(map);
var stationMarker10 = new mapboxgl.Marker(marker10).setLngLat(station10);
stationMarker10.addTo(map);
var stationMarker11 = new mapboxgl.Marker(marker11).setLngLat(station11);
stationMarker11.addTo(map);
var stationMarker12 = new mapboxgl.Marker(marker12).setLngLat(station12);
stationMarker12.addTo(map);
var stationMarker13 = new mapboxgl.Marker(marker13).setLngLat(station13);
stationMarker13.addTo(map);
var stationMarker14 = new mapboxgl.Marker(marker14).setLngLat(station14);
stationMarker14.addTo(map);
var stationMarker15 = new mapboxgl.Marker(marker15).setLngLat(station15);
stationMarker15.addTo(map);
var stationMarker16 = new mapboxgl.Marker(marker16).setLngLat(station16);
stationMarker16.addTo(map);
var stationMarker17 = new mapboxgl.Marker(marker17).setLngLat(station17);
stationMarker17.addTo(map);
var stationMarker18 = new mapboxgl.Marker(marker18).setLngLat(station18);
stationMarker18.addTo(map);
var stationMarker19 = new mapboxgl.Marker(marker19).setLngLat(station19);
stationMarker19.addTo(map);
var stationMarker20 = new mapboxgl.Marker(marker20).setLngLat(station20);
stationMarker20.addTo(map);
var stationMarker21 = new mapboxgl.Marker(marker21).setLngLat(station21);
stationMarker21.addTo(map);
var stationMarker22 = new mapboxgl.Marker(marker22).setLngLat(station22);
stationMarker22.addTo(map);
var stationMarker23 = new mapboxgl.Marker(marker23).setLngLat(station23);
stationMarker23.addTo(map);
var stationMarker24 = new mapboxgl.Marker(marker24).setLngLat(station24);
stationMarker24.addTo(map);
var stationMarker25 = new mapboxgl.Marker(marker25).setLngLat(station25);
stationMarker25.addTo(map);
var stationMarker26 = new mapboxgl.Marker(marker26).setLngLat(station26);
stationMarker26.addTo(map);
var stationMarker27 = new mapboxgl.Marker(marker27).setLngLat(station27);
stationMarker27.addTo(map);
var stationMarker28 = new mapboxgl.Marker(marker28).setLngLat(station28);
stationMarker28.addTo(map);
var stationMarker29 = new mapboxgl.Marker(marker29).setLngLat(station29);
stationMarker29.addTo(map);
var stationMarker30 = new mapboxgl.Marker(marker30).setLngLat(station30);
stationMarker30.addTo(map);
var stationMarker31 = new mapboxgl.Marker(marker31).setLngLat(station31);
stationMarker31.addTo(map);
var stationMarker32 = new mapboxgl.Marker(marker32).setLngLat(station32);
stationMarker32.addTo(map);
var stationMarker33 = new mapboxgl.Marker(marker33).setLngLat(station33);
stationMarker33.addTo(map);
var stationMarker34 = new mapboxgl.Marker(marker34).setLngLat(station34);
stationMarker34.addTo(map);    

      var truckMarker = new mapboxgl.Marker(marker).setLngLat(truckLocation);
      truckMarker.addTo(map);

      map.addLayer({
          id: 'warehouse',
          type: 'circle',
          source: {
            data: warehouse,
            type: 'geojson'
          },
          paint: {
            'circle-radius': 20,
            'circle-color': 'white',
            'circle-stroke-color': '#3887be',
            'circle-stroke-width': 3
          }
        });
        
        // Create a symbol layer on top of circle layer
        map.addLayer({
          id: 'warehouse-symbol',
          type: 'symbol',
          source: {
            data: warehouse,
            type: 'geojson'
          },
          layout: {
            'icon-image': 'grocery-15',
            'icon-size': 1
          },
          paint: {
            'text-color': '#3887be'
          }
        });

        map.addLayer({
          id: 'dropoffs-symbol',
          type: 'symbol',
          source: {
            data: dropoffs,
            type: 'geojson'
          },
          layout: {
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
            'icon-image': 'marker-15',
          }
        });

        map.on('click',function(e) {
          // When the map is clicked, add a new drop-off point
          // and update the `dropoffs-symbol` layer
          newDropoff(map.unproject(e.point));
          updateDropoffs(dropoffs);
        });
        map.addSource('route', {
          type: 'geojson',
          data: nothing
        });

        map.addLayer({
          "id": "places",
          "type": "symbol",
          "source": {
          "type": "geojson",
          "data": {
          "type": "FeatureCollection",
          "features": [ {
            type: "Feature",
            properties: {
            description: "<strong>GangaDham A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.875198,18.481164]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Bibwewadi A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.867328,18.463897]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Kondhwa A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.891340,18.481906]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Bibwewadi B</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.862018, 18.477658]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Kondhwa B</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.899359,18.472468]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Kondhwa C</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.890061,18.462567]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Wanowrie A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.904064,18.482233]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Wanowrie B</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.904074,18.506371]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Hadapsar A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.931239,18.519967]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Hadapsar B</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.944617,18.500076]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Hadapsar C</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.934651,18.493659]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Viman nagar A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.919040,18.572353]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Kharadi A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.940383,18.549904]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Kharadi B</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.961284,18.553934]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Amanora Park A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.945784,18.518505]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Shivaji nagar A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.846457,18.520731]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Shivaji nagar B</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.839621,18.534441]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Shivaji nagar C</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.858493,18.529358]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Shivaji nagar D</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.830226,18.534117]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Swargate A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.861029,18.500140]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Tilak Road A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.861029,18.508172]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>FC Road A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.841351,18.518829]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Koregaon park A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.887460,18.539599]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Saras Bag A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.853720,18.503110]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Ghorpadi A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.895861,18.525668]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Ghorpadi C</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.906351,18.522318]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Ghorpadi B</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.896779,18.511954]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Nal Stop C</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.831267,18.508511]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Koregaon park B</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.897088,18.532827]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Yerawada A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.900182,18.553320]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Deccan Corner A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.841115,18.513527]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>Yerawada B</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.876823,18.556493]
            }
            },{
            type: "Feature",
            properties: {
            description: "<strong>VishrantWadi A</strong>",
            icon: "bicycle-share"
            },
            geometry: {
            type: "Point",
            coordinates: [73.878613,18.571155]
            }
            },{
              type: "Feature",
              properties: {
              description: "<strong>VishrantWadi B</strong>",
              icon: "bicycle-share"
              },
              geometry: {
              type: "Point",
              coordinates: [73.909240,18.545391]
              }
              }]
          }
          },
          layout: {
          "icon-image": "{icon}-15",
          "icon-allow-overlap": true
          }
          }); 
          map.on('mouseenter', 'places', function(e) {
          // Change the cursor style as a UI indicator.
          console.log('dudedee');
          map.getCanvas().style.cursor = 'pointer';
           
          var coordinates = e.features[0].geometry.coordinates.slice();
          var description = e.features[0].properties.description;
           
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
           
          // Populate the popup and set its coordinates
          // based on the feature found.
          popup.setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
          });
           
          map.on('mouseleave', 'places', function() {
          map.getCanvas().style.cursor = '';
          popup.remove();
          });
      //   // Change the cursor to a pointer when the mouse is over the places layer.
      //   map.on('mouseenter', 'places', function () {
      //   map.getCanvas().style.cursor = 'pointer';
      //   });
         
      //   // Change it back to a pointer when it leaves.
      //   map.on('mouseleave', 'places', function () {
      //   map.getCanvas().style.cursor = '';
      // });
        map.addLayer({
          id: 'routeline-active',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#3887be',
            'line-width': [
              "interpolate",
              ["linear"],
              ["zoom"],
              12, 3,
              22, 12
            ]
          }
        }, 'waterway-label');
    });
    function newDropoff(coords) {
      // Store the clicked point as a new GeoJSON feature with
      // two properties: `orderTime` and `key`
      var pt = turf.point(
        [coords.lng, coords.lat],
        {
          orderTime: Date.now(),
          key: Math.random()
        }
      );
      dropoffs.features.push(pt);
      pointHopper[pt.properties.key] = pt;

  // Make a request to the Optimization API
  $.ajax({  
    method: 'GET',
    url: assembleQueryURL(),
  }).done(function(data) {
    // Create a GeoJSON feature collection
    var routeGeoJSON = turf.featureCollection([turf.feature(data.trips[0].geometry)]);

    // If there is no route provided, reset
    if (!data.trips[0]) {
      routeGeoJSON = nothing;
    } else {
      // Update the `route` source by getting the route source
      // and setting the data equal to routeGeoJSON
      map.getSource('route')
        .setData(routeGeoJSON);
    }

    if (data.waypoints.length === 12) {
      window.alert('Maximum number of points reached. Read more at mapbox.com/api-documentation/navigation/#optimization.');
    }
  });
}

    function updateDropoffs(geojson) {
      map.getSource('dropoffs-symbol')
        .setData(geojson);
    }
    // Here you'll specify all the parameters necessary for requesting a response from the Optimization API
function assembleQueryURL() {

  // Store the location of the truck in a variable called coordinates
  var coordinates = [truckLocation];
  var distributions = [];
  keepTrack = [truckLocation];

  // Create an array of GeoJSON feature collections for each point
  var restJobs = objectToArray(pointHopper);

  // If there are any orders from this restaurant
  if (restJobs.length > 0) {

    // Check to see if the request was made after visiting the restaurant
    var needToPickUp = restJobs.filter(function(d, i) {
      return d.properties.orderTime > lastAtRestaurant;
    }).length > 0;

    // If the request was made after picking up from the restaurant,
    // Add the restaurant as an additional stop
    if (needToPickUp) {
      var restaurantIndex = coordinates.length;
      // Add the restaurant as a coordinate
      coordinates.push(warehouseLocation);
      // push the restaurant itself into the array
      keepTrack.push(warehouse);
    }

    restJobs.forEach(function(d, i) {
      // Add dropoff to list
      keepTrack.push(d);
      coordinates.push(d.geometry.coordinates);
      // if order not yet picked up, add a reroute
      if (needToPickUp && d.properties.orderTime > lastAtRestaurant) {
        distributions.push(restaurantIndex + ',' + (coordinates.length - 1));
      }
    });
  }

  // Set the profile to `driving`
  // Coordinates will include the current location of the truck,
  return 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/' + coordinates.join(';') + '?distributions=' + distributions.join(';') + '&overview=full&steps=true&geometries=geojson&source=first&access_token=' +mapboxgl.accessToken;
}

function objectToArray(obj) {
  var keys = Object.keys(obj);
  var routeGeoJSON = keys.map(function(key) {
    return obj[key];
  });
  return routeGeoJSON;
}
  }
  
   presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Enter Number of Available Spaces:',
      inputs: [
        {
          name: 'Spaces',
          placeholder: 'Available Spaces'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: (data) => {
              this.global_var.Avail_cycles=data.Spaces;
              console.log(data.Spaces);
              console.log(this.global_var.Avail_cycles);
              this.AuthService.loadStations(this.global_var.Avail_cycles);
          }
        }
      ]
    });
     alert.present();
}
}
