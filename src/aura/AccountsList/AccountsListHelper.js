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
                console.log("Server Side error occured, please contact Admin", errors);
            }            
        });
        $A.enqueueAction(action);
    },
    loadAccount : function(component) {
        var data = component.get('v.data');
        if(data.refresh === "true"){
            data.refresh = false;
            if(data.hide === "true"){
                component.set('v.record', {});
            }
            component.set('v.data', data);
        }
    },
    showAccountDetail : function(component, event){
        var target = event.currentTarget;
        var data = target.dataset;
        data['refresh'] = true; 
        var preValue = component.get('v.data');
        data.hide = false;
        component.set('v.recordId', data.id);
        if(preValue){   
            if(preValue.id === data.id){
                data.hide = true;
            }            
            component.set('v.data',data);
        }else if(!preValue){
            component.set('v.data',data);
        }
        
        component.set('v.record', data);
    },
})