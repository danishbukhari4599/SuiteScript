/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */

define(['N/url', 'N/encode', 'N/log'], function (url, encode, log) {

    function beforeLoad(scriptContext) {
        /*if (scriptContext.type !== scriptContext.UserEventType.CREATE && 
            scriptContext.type !== scriptContext.UserEventType.EDIT && 
            scriptContext.type !== scriptContext.UserEventType.VIEW) {
            return;
        }*/

        try {
            let recCurrent = scriptContext.newRecord;
            let objForm = scriptContext.form;
/*
            let PARAMS = 
            {
                recordType: recCurrent.type,
                recordId: recCurrent.id
            };

            let paramString = encode.convert({
                string: JSON.stringify(PARAMS),
                inputEncoding: encode.Encoding.UTF_8,
                outputEncoding: encode.Encoding.BASE_64_URL_SAFE
            });

            let suiteletUrl = url.resolveScript({
                scriptId: 'customscript_cmr_plc_item_amendment',
                deploymentId: 'customscript_cmr_plc_item_amendment',
                params: {
                    params: paramString
                }
            });
*/
            objForm.addButton({
                id: 'custpage_btn_item_amendment',
                label: 'Amendment',
                functionName: "alert('check my Button')"
            });

            log.debug({
                title: 'beforeLoad_addButton',
                details: 'Button added successfully'
            });

        } catch (error) {
            log.error({
                title: 'Error in beforeLoad',
                details: error.message
            });
        }
    }

    return {
        beforeLoad: beforeLoad
    };

});
