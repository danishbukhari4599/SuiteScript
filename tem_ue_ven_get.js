/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/log'], function(record, log) {

    function beforeSubmit(context) {
        var nRecord = context.newRecord;
        
        try {
            log.debug('Before Submit', 'Fetching field value before submitting the record.');
            var vendorId = nRecord.getValue({ fieldId: 'entityid' }); 
            log.debug('Vendor ID', 'Vendor ID fetched: ' + vendorId);
        } catch (e) {
            log.debug({
                title: 'Error Fetching Vendor ID',
                details: e.toString()
            });
        }
    }

    return {
        beforeSubmit: beforeSubmit
    };

});
