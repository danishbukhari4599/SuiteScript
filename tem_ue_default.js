/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */

define(['N/record', 'N/log'], function(record, log) {

    function beforeLoad(context) {
        // Ensure the script runs only on CREATE, EDIT, or VIEW
        if (context.type !== context.UserEventType.CREATE && 
            context.type !== context.UserEventType.EDIT && 
            context.type !== context.UserEventType.VIEW) {
            return;
        }

        var newRecord = context.newRecord;

        // Get the line count of the 'item' sublist
        var lineCount = newRecord.getLineCount({
            sublistId: 'item'
        });

        // Set the custom field 'custbody_item_count' with the item count
        newRecord.setValue({
            fieldId: 'custcol_tem_item', // Replace with your actual custom field ID
            value: lineCount
        });

        log.debug({
            title: 'beforeLoad',
            details: 'Item count set to: ' + lineCount
        });
    }

    return {
        beforeLoad: beforeLoad
    };

});
