({
    handleDeleteRecord: function(component) {        
        component.find("recordauraId").deleteRecord(
            $A.getCallback(function(deleteResult) {                
                if (deleteResult.state === "SUCCESS") {                    
                    console.log("Record is deleted.");
                    component.set('v.recordId','');
                    component.set('v.isDelete',false);        
                } else {
                    console.log("Some error occured");
                    component.set('v.recordId','');
                    component.set('v.isDelete',false);
                }
            })
        );
    },
    closeDeleteModal : function(component) {
        component.set('v.recordId', '');
        component.set('v.isDelete', false); 
    }
})