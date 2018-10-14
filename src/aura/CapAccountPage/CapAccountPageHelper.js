({
    doInit : function(cmp) {
        // create a one-time use instance of the serverEcho action
        // in the server-side controller
        var action = cmp.get("c.getInitData");
        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var accList =[];
                var accs = response.getReturnValue();
                accs.forEach(function(acc){
                    acc['isSelected'] = false;
                    accList.push(acc);
                })
                cmp.set('v.accList', accList);
            }else if (state === "INCOMPLETE") {
                // do something
            }else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                    errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        
        // optionally set storable, abortable, background flag here
        
        // A client-side action could cause multiple events, 
        // which could trigger other events and 
        // other server-side action calls.
        // $A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
    },
    showDetails : function(cmp, evt){
        var target = evt.currentTarget;
        var data = target.dataset;
        data['refresh'] = true; 
        var accDetails = cmp.find('accDetails');
        if(accDetails){
            var oldData = accDetails.get('v.data');
            data.hide = false;
            if(oldData){
                data.hide = oldData.id ===data.id;
                accDetails.set('v.data',data);
            }else if(!oldData){
                accDetails.set('v.data',data);
            }
        }
    },
    handleSelectAll : function(cmp){
        var chkSelectAll = cmp.find('chkSelectAll');
        if(chkSelectAll){
            var isChecked = chkSelectAll.get('v.checked');
            var accList = cmp.get('v.accList');
            accList.forEach(function(acc){
                acc.isSelected = isChecked
            })
            cmp.set('v.accList', accList);
        }
    },
    maintainSelectAll : function(cmp){
        var chkSelectAll = cmp.find('chkSelectAll');
        if(chkSelectAll){
            var selectAllChecked = chkSelectAll.get('v.checked');
            var accList = cmp.get('v.accList');
            var selectAll = true;
            for(var ind=0, len=accList.length; ind<len; ind++){
                if(accList[ind].isSelected == false){
                    selectAll = false;
                    break;
                }
            }
            if(selectAll !== selectAllChecked){
                chkSelectAll.set('v.checked',selectAll);
            }
        }
    },
    createRecord : function (cmp) {
        cmp.set('v.isCreate', true);
    }
})