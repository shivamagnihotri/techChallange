({
	doInit : function(component, event, helper){
        helper.initAccountRecCreator(component);
    },
    handleSaveAccount : function(component, event, helper){
        helper.handleSaveAccount(component);
    },
    handleClose : function(component, event, helper){
        component.set('v.isCreate', false);
    }
})