/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

define(['N/log'], function(log) {

    function pageInit(context) {
        // Check if the mode is create or edit
        if (context.mode !== 'create' && context.mode !== 'edit') {
            return;
        }
        
        var custFormId = '1009'; 

        // Get the current record
        var currentRecord = context.currentRecord;

        // Set the new form
        currentRecord.setValue({
            fieldId: 'entity',
            value: custFormId,
            ignoreFieldChange:true
        });

        log.debug({
            title: 'pageInit',  
            details: 'Form replaced with form ID: ' + custFormId
        });
    }

    return {
        pageInit: pageInit
    };

});
