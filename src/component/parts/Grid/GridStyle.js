import {Constant} from '../../../utils/GlobalConstant';
import {StyleSheet} from 'react-native';
import {appColors} from '../../../utils/Color';

export const styles = StyleSheet.create({
  gridContainer: {
    marginTop: 20,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gridItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: appColors.LIGHT_GREY,
    borderColor: appColors.OFF_WHITE,
    elevation: 1,
    shadowColor: appColors.BLACK_05,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  gridText: {
    fontSize: 16,
  },
  highlighted: {
    backgroundColor: appColors.GREEN,
    color: appColors.WHITE,
    borderColor: appColors.WHITE,
    shadowColor: appColors.BLACK_05,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  generateButton: {
    marginTop: 20,
    backgroundColor: appColors.PRIMARY,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
    width: Constant.width * 0.852,
    shadowColor: appColors.BLACK_05,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  disabledButton: {
    backgroundColor:appColors.BLACK_05,
    elevation: 0,
  },
  buttonText: {
    textAlign: 'center',
    color: appColors.WHITE,
    fontSize: 16,
  },
});
