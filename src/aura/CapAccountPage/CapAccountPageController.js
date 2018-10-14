({
	doInit : function(cmp, evt, hlpr){
		hlpr.doInit(cmp)
	},
    showDetails : function(cmp, evt, hlpr){
        hlpr.showDetails(cmp, evt);
    },
    handleSelectAll : function(cmp, evt, hlpr){
        hlpr.handleSelectAll(cmp);
    },
    handleSelect : function(cmp, evt, hlpr){
        hlpr.maintainSelectAll(cmp, evt.currentTarget.checked);
    },
    handleNew : function(cmp, evt, hlpr){
        hlpr.createRecord(cmp);
    }
})