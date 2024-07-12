/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */

define(['N/record', 'N/ui/serverWidget', 'N/ui/message'],
    function(record, serverWidget, message) {
        function myBeforeLoad(context) {
            if (context.type !== context.UserEventType.CREATE &&
                context.type !== context.UserEventType.EDIT &&
                context.type !== context.UserEventType.VIEW) {
                return;
            }

            // Ensure the script is running on a vendor form
            if (context.newRecord.type !== record.Type.VENDOR) {
                return;
            }

            var form = context.form;

            // Retrieve the field by its internal ID and disable it
            var notesField = form.getField({
                id: 'comments'  // Replace 'comments' with the actual field ID you want to disable/hide
            });

            if (notesField) {
                notesField.updateDisplayType({
                    displayType: serverWidget.FieldDisplayType.DISABLED
                });
            }

            // Create and show the banner message
            var myMsg = message.create({
                title: 'Vendor Form Notice',
                message: 'Welcome to Vendor form.',
                type: message.Type.INFORMATION
            });

            context.form.addPageInitMessage({
                message: myMsg
            });
        }

        return {
            beforeLoad: myBeforeLoad
        };
    }
);
