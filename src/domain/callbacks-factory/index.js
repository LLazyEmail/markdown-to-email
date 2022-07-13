//-------------------
// ----- examples below

// import { catchErrorTraceOutput, inspector } from '../error-handle';

// import { WR3_generateNewString, WR3_getWrapper } from '../replace-wrapper3.0';

// class CallbackFactory {
//   error = false;

//   create = (settings) => {
//     // if(inspector(settings) throw new Error('nooooo settings')

//     // if (!settings)
//     // add error checking here.. probably few versions to test
//     // error = false;

//     const { params, name, valuesObj, replacerMethod, debug } =
//       settings || false;

//     const { regex, replacer, literal } = valuesObj;

//     const configCopy = Object.assign(
//       settings,
//       WR3_getWrapper(name),
//       // this.getWrapper(name)
//     );

//     // params: {
//     //   content: title.trim(),
//     //   href: href.trim(),
//     // };

//     // let partial;

//     // here i want to apply a check and see if everything is fine, if not we generate error = true
//     try {
//       // or
//       // let newString = WR3_generateNewString(configCopy);
//       // console.log(newString);
//       //     return newString;
//       // or
//       // let newString = this.WR3_generateNewString(configCopy);
//       // console.log(newString);
//     } catch (error) {
//       catchErrorTraceOutput(error);
//     }
//   };

//   // WR4_getWrapper = (name) => {
//   //   return {
//   //     literal: mainObj[name]['literal']
//   //   }
//   // }

//   // partial = '';

//   // isError = () => {
//   //     return this.error;
//   // }
//   // setPartial = (string) => {
//   //   this.partial = string;
//   // }

//   // getPartial = () => {
//   //   return this.partial;
//   // }

//   // display = () => {
//   //   this.getPartial();
//   // }
// }

// export default CallbackFactory;
