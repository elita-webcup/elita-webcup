"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker
} from "@react-google-maps/api";

const styles = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
    },
    {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
    },
]


function Map() {

    const { isLoaded } = useLoadScript({

        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    })

    const depart1 = { lat: -18.935458, lng: 47.467129 }
    // const arrivee1 = { lat: - 18.799289, lng: 47.564325 }


    const depart2 = { lat: -18.935178, lng: 47.414712 }
    // const arrivee2 = { lat: - 19.210738, lng: 47.487368 }


    const [positionAgent1, setPositionAgent1] = useState(depart1);

    const [positionAgent2, setPositionAgent2] = useState(depart2);


    useEffect(() => {
        setInterval(() => {
            setPositionAgent1((dep: any) => {
                let nouv = dep;
                nouv.lat = dep.lat + 0.104871;
                nouv.lng = dep.lng + 0.120087;
                console.log(nouv)
                return nouv
            });
        }, 1000);



        setInterval(() => {
            setPositionAgent2((dep: any) => {
                let nouv = dep;
                nouv.lat = dep.lat + 1.000871;
                nouv.lng = dep.lng + 1.000871;
                console.log(nouv)
                return nouv
            });
        }, 1000)
    }, [])

    if (!isLoaded) return <div className='w-[80%] h-[400px] bg-[#08190d9b] m-auto flex justify-center items-center text-white  '>
        patientez ....
    </div>;

    return (

        isLoaded && (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
            }}>

                <GoogleMap
                    options={{ styles }}
                    zoom={10}
                    center={positionAgent1}
                    mapContainerStyle={{ width: "80%", height: "400px", margin: "auto" }}
                >
                    {/* Marker  */}
                    <Marker position={positionAgent1} label='001'></Marker>
                    <Marker position={positionAgent2} label='005'></Marker>
                </GoogleMap>
            </div >
        )
    )
}

export default Map
