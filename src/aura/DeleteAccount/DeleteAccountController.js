({
	handleClose : function(component, event, helper){
        component.set('v.isDelete', false);
    },
    handleDeleteNow : function(component, event, helper){
        helper.handleDeleteRecord(component, helper);
    },
    closeDeleteModal: function(component, event, helper){
        helper.closeDeleteModal(component, helper);
    }
})