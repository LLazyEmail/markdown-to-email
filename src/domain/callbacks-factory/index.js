//-------------------
//----- examples below

import { catch_error_trace_output } from '../../domain/error-handle';


function _link(text, title, href) {
    // const params = ;
  
    
    const config = {
      params: {
        content: title.trim(),
        href: href.trim(),
      },
      name: 'link',
  
      // debug: true
    };
    

}


class CallbackFactory {



    create = (settings) => {
        
        // if (!settings)
        // add error checking here.. probably few versions to test
        error = false;


        const { config, literal, replacerMethod } = settings;

        // config.name 


        


        // let partial;

        //here i want to apply a check and see if everything is fine, if not we generate error = true 
        try {

            const replaced = replaceLink(config);
          
            return replaced;
        
          } catch (error) { catch_error_trace_output(error); }

         
          
          // partial = '';
      
          // isError = () => {
          //     return this.error;
          // }
          // setPartial = (string) => {
          //   this.partial = string;
          // }
      
          // getPartial = () => {
          //   return this.partial;
          // }
      
          // display = () => {
          //   this.getPartial();
          // }
    }


    
}

export default CallbackFactory;






