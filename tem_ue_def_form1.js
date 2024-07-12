/** 
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */

// Load the required modules.
/*define(['N/record', 'N/ui/serverWidget', 'N/log'], 
    function(record, serverWidget, log) {
        function myBeforeLoad(context) {
            if (context.type !== context.UserEventType.CREATE)
                return;
            var form = context.form;
            var notesField = form.getField({
                id: '101'
            });

            if (notesField) {
                notesField.updateDisplayType({
                    displayType: serverWidget.FieldDisplayType.DISABLED
                });
                log.debug({
                    title: 'beforeLoad',
                    details: 'Notes field disabled'
                });
            } else {
                log.error({
                    title: 'beforeLoad Error',
                    details: 'Notes field not found'
                });
            }
        }
            var newEmployeeRecord = context.newRecord;
            newEmployeeRecord.setValue({
                fieldId: 'customform', 
                value: '101'
            });

            log.debug({
                title: 'beforeSubmit',
                details: 'Notes field updated with default text'
            });

        return {
            beforeLoad: myBeforeLoad,
            beforeSubmit: myBeforeSubmit
        };   
    }
);*/
/** 
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */

 define(['N/log'], 
    function(log) {
        function beforeLoad(context) {
            // Check if the event type is CREATE or EDIT
            if (context.type !== context.UserEventType.CREATE && context.type !== context.UserEventType.EDIT) {
                return;
            }
            
            var custFormId = '260'; // Replace with the actual form ID of 'Z Cash Sale Form'

            // Get the new record
            var newRecord = context.newRecord;

            // Set the new form
            newRecord.setValue({
                fieldId: 'customform',
                value: custFormId
            });

            log.debug({
                title: 'beforeLoad',
                details: 'Form replaced with form ID: ' + custFormId
            });
        }

        return {
            beforeLoad: beforeLoad
        };
    }
);

