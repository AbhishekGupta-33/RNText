import { createRef } from "react";
import { Dimensions } from "react-native";

export const Constant = {
    width : Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
}

export const characterStatus = {
    ALIVE: 'Alive',
    DEAD: 'Dead',
    UNKNOWN: 'unknown'
}