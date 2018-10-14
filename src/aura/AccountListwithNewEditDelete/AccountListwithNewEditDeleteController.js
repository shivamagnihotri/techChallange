({
	doInit : function(component, event, helper){
		helper.doInit(component);
	},
    handleNew : function(component, event, helper){
		component.set('v.isCreate',true);
	},
    handleDelete : function(component, event, helper){		
        helper.deleteRecord(component, event);
	}, 
    isCreateDone : function(component, event, helper){
        if(component.get('v.isCreate') == false)
		helper.doInit(component);
	},
	isDeleteDone : function(component, event, helper){
        if(component.get('v.isDelete') == false)
		helper.doInit(component);
	},
    handleEdit : function(component, event, helper){
        helper.editRecord(component, event);
    },
    isEditDone : function(component, event, helper){
        if(component.get('v.isEdit') == false)
		helper.doInit(component);
	}
})