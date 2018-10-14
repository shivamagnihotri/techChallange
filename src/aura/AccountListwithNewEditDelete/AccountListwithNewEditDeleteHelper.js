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
    deleteRecord : function(component, event){
        var target = event.currentTarget;
        var accId = target.getAttribute('id');
        component.set('v.recordId', accId);  
        component.set('v.isDelete', true);
        console.log(accId);
              
    },
    editRecord : function(component, event){
        var target = event.currentTarget;
        var accId = target.getAttribute('id');
        component.set('v.recordId',accId);
        component.set('v.isEdit', true);
                
    }
})