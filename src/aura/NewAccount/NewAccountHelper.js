({
	initAccountRecCreator : function(component){
        // Prepare a new record from template
        component.find("accountRecordCreator").getNewRecord(
            "Account", 
            null,      
            false,    
            $A.getCallback(function() {
                var rec = component.get("v.newAccount");
                var error = component.get("v.newAccountError");                
        		component.set('v.isShow',true);
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                console.log("Record template initialized: " + rec.sobjectType);
            })
        );
	},
    handleSaveAccount: function(component){
        var self = this;
        var accname = component.get('v.simpleNewAccount.Name');
        if(accname){
            accname = accname.trim()
        }        
        
        component.find("accountRecordCreator").saveRecord(
            function(saveResult) {
                if (saveResult.state === "SUCCESS") {                 
                    console.log('Record Saved');
                                                            
                    component.set('v.isCreate',false);
                    component.set('v.isRefresh','');
                    component.set('v.isRefresh',true);
                }  
                
            }
        );
    }

})