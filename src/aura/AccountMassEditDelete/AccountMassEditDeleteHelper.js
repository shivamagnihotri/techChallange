({
	doInit : function(component) {            
        var action = component.get("c.getrecords");
        action.setCallback(this, function(response) {
            var state = response.getState();            
            if (state === "SUCCESS") {
                var accList =[];
                var accs = response.getReturnValue();                
                component.set('v.accountList', accs);
            }else {
                var errors = response.getError();                
                console.log("Server Side error occured, please contact Admin");
            }            
        });
        $A.enqueueAction(action);
    },
    updateSource : function(component, helper) {
        var Accs = component.get("v.accountList");
        var selectedaccs = [];
        var selectedAccsLength = Accs.length;
        for (var i = 0; i < selectedAccsLength; i++) {
            if(Accs[i].isSelected) {
                selectedaccs.push(Accs[i].Id);
            }  
        }        
        var sourceValue = component.find("selectedpicklist").get("v.value");
        var selectedAccslist = selectedaccs;       
        var action = component.get("c.updateAccountsSource");
        action.setParams({ aacsIds : selectedAccslist,
                          source : sourceValue});
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var res = response.getReturnValue();
				component.set("v.showsourceModal",false);
                helper.doInit(component);
            }
        });
        
        $A.enqueueAction(action);
    },
    
    deleteMassAccounts : function(component, helper) {
        var Accs = component.get("v.accountList");
        var selectedaccs = [];
        var selectedAccsLength = Accs.length;
        for (var i = 0; i < selectedAccsLength; i++) {   
            if(Accs[i].isSelected) {
                selectedaccs.push(Accs[i].Id);
            } 
                     
        }        
                       
        var action = component.get("c.deleteAccounts");
        action.setParams({ aacsIds : selectedaccs});
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var res = response.getReturnValue();
				component.set("v.showMassDeleteModal",false);
                helper.doInit(component);
            }
        });
        
        $A.enqueueAction(action);
    }
})