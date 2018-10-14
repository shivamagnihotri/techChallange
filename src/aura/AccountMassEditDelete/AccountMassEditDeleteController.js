({
	doInit : function(component, event, helper){
		helper.doInit(component)
	},
    showUpdateAccountSourceModal: function(component, event, helper) {
        component.set("v.showsourceModal",true);        
                        
    },
    showMassDeleteModal: function(component, event, helper) {
        component.set("v.showMassDeleteModal",true);        
                        
    },
    CancelUpdateSource : function(component, event, helper) {
        component.set("v.showsourceModal",false);        
                        
    },
    updateSource : function(component, event, helper) {
        helper.updateSource(component, helper);                                
    },
    deleteMassAccounts : function(component, event, helper) {
        helper.deleteMassAccounts(component, helper);                                
    },
    CanceldeleteMassAccounts : function(component, event, helper) {
        component.set("v.showMassDeleteModal",false);        
                        
    }
})