'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, {useEffect, useRef} from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {roboto_mono} from "@/app/_components/font";

interface props{
    modelPath: string;
}

export function ModelViewer(){
    // @ts-ignore
    return (
        <div className={" pt-10"}>
            <div className={roboto_mono.className + " text-white font-bold text-4xl pl-10"}>
                Commander vos gadget <span className={"text-lime-500"}>ici Agent Bond</span>
            </div>
            <div className={" w-[90%] flex flex-row pt-8 pl-10"}>
                <div className={"bg-gradient-radial mt-20 from-gray-950 to-gray-800 basis-[70%] h-[50vh] rounded-2xl"}>
                    <Canvas style={{height: '250px', width: '400px', paddingTop: '10px', paddingBottom: '10px'}}>
                        <EthereumModel modelPath="/drone3.glb"/>
                    </Canvas>
                    <div className={"text-black ml-[30vw] h-14 pt-4 w-[39%] cursor-pointer rounded-md font-bold  px-10 bg-lime-500"}>Rappeler votre drone</div>
                </div>
                <div className={"bg-gradient-radial pb-40 ml-8 from-gray-950 to-gray-800 basis-[40%] h-[80vh] rounded-2xl"}>
                    <Canvas style={{height: '500px', width: '400px', paddingTop: '10px', paddingBottom: '10px'}}>
                        <EthereumModel modelPath="/glasses2.glb"/>
                    </Canvas>
                    <div className={"text-black absolute top-[85%] pl-4 pt-4 left-[63%] h-14 w-80 cursor-pointer rounded-md font-bold bg-lime-500"}>Commander
                        les lunettes scannere
                    </div>
                </div>
            </div>
        </div>
    );
};

// @ts-ignore
export const EthereumModel: React.FC = (props: props) => {
    const modelPath = props.modelPath;
    const myModel = useLoader(GLTFLoader, modelPath);
    const modelRef = useRef<Mesh>(null);

    useFrame((_state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta / 2;
            modelRef.current.rotation.x = 0.5
        }
    });


    return (
        <>
            <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={5000} />
            <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000} />
            <primitive object={myModel.scene} ref={modelRef} />
        </>
    );
};