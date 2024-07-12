/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/log'], function(record, log) {
    
    function beforeLoad(context) {
        if (context.type === context.UserEventType.VIEW || 
            context.type === context.UserEventType.EDIT) {
            
            var vendor = record.load({
                type: record.Type.VENDOR, 
                id: context.newRecord.id,
                isDynamic: true
            });
            
            var vendorName = vendor.getValue({
                fieldId: 'custentitytem_hasnainv'
            });

            log.debug('Vendor Name', vendorName);
        }
    }
    
    return {
        beforeLoad: beforeLoad
    };
});
