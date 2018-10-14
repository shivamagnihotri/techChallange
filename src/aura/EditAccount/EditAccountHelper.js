({
	loadData : function(cmp, recId){        
        cmp.find('recordHandler').set('v.recordId',recId);        
    },
    
    handleSaveRecord: function(cmp){       
        cmp.find("recordHandler").saveRecord(
            $A.getCallback(function(saveResult) {
                 if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                     cmp.set('v.recordId','');
                     cmp.set('v.isEdit',false);  
                }else {
                    console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                }
            })
        );
    }   
})