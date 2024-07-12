/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/log'], function(record, log) {

    function afterSubmit(context) {
        var nRecord = context.newRecord;
        var oRecord = context.oldRecord;
        
        try {
            log.debug('checking..','line number 2')
            var cusR = record.create({type: 'customrecord_tem_customer'});
            var vendorId = nRecord.id;//getValue({fieldId:'venderId'}); // The ID of the new record
            cusR.setValue({fieldId: 'custrecord_tem_vendorid', value: vendorId});
            
            var recordId = cusR.save();
            log.debug({
                title: 'Custom Record Created',
                details: 'Custom record created with ID: ' + recordId
            });
        } catch (e) {
            log.debug({
                title: 'Error Creating Custom Record',
                details: e.toString()
            });
        }
    }

    return {
        afterSubmit: afterSubmit
    };

});
