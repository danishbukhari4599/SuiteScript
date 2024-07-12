/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */

define(['N/record', 'N/error'], 
    function(record, error) {
        function beforeSubmit(context) {
            if (context.type !== context.UserEventType.CREATE && context.type !== context.UserEventType.EDIT) {
                return;
            }

            var newRecord = context.newRecord;
            var oldRecord = context.oldRecord;
            var fieldId = 'custentitytem_hasnainv'; 
            var newValue = newRecord.getValue(fieldId);
            var oldValue = oldRecord ? oldRecord.getValue(fieldId) : null;

            
            if (newValue !== oldValue) {
                throw error.create({
                    name: 'FIELD_CHANGE_ERROR',
                    message: 'The value of this field cannot be changed.',
                    notifyOff: true
                });
            }
        }

        return {
            beforeSubmit: beforeSubmit
        };
    }
);