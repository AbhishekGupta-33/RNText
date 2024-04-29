
import { StyleSheet } from "react-native";
import { appColors } from "../../../utils/Color";
import { Constant } from "../../../utils/GlobalConstant";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderColor: appColors.PRIMARY,
        borderWidth:0.5,
        borderRadius: 8,

      },
      picker: {
        width: Constant.width * 0.5,
        height: 50,
        borderColor: appColors.PRIMARY,
        borderWidth:0.5,
        color:appColors.BLACK,
        borderWidth: 0.5,
      },

})