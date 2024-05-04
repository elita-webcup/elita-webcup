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

    const depart1 = { lat: - 18.935458, lng: 47.467129 }
    const arrivee1 = { lat: - 18.799289, lng: 47.564325 }


    const depart2 = { lat: - 18.935178, lng: 47.414712 }
    const arrivee2 = { lat: - 19.210738, lng: 47.487368 }



    const [positionAgent1, setPositionAgent1] = useState(depart1);

    const [positionAgent2, setPositionAgent2] = useState(depart2);

    const latitude = (dep: number, arr: number) => {
        if (dep != arr) {
            if (dep < 0 && arr < 0) {
                if (dep < arr) dep += 0.000841
                else dep -= 0.000841
            }
            if (dep > 0 && arr > 0) {
            }
        }
        return
    }

    // useEffect(() => {

    //     setInterval(() => {
    //         setPositionAgent1((dep) => {

    //             if (dep.lat != arrivee1.lat || dep.lng != arrivee2.lng) {


    //             }
    //             console.log(dep)
    //             return dep
    //         });
    //     }, 1000)
    // }, [])

    if (!isLoaded) return <div>Loading....</div>;

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
                    center={depart1}
                    mapContainerStyle={{ width: "80%", height: "600px", margin: "auto" }}
                >
                    {/* Marker  */}
                    <Marker position={depart1} label='Agent1'></Marker>
                    <Marker position={depart1} label='Agent2'></Marker>
                </GoogleMap>
            </div >

        )
    )
}

export default Map
