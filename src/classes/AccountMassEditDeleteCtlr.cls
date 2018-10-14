public class AccountMassEditDeleteCtlr {

     @AuraEnabled
    public static List<Account> getrecords(){
        
        return [SELECT Id, Name, AccountNumber, OwnerId, Owner.Name, AccountSource, AnnualRevenue, Type, 
                CreatedById, CreatedBy.Name, LastModifiedById, Industry, Description, Phone, Fax 
                FROM Account
                 ORDER BY LastModifiedDate DESC
                LIMIT 15
                ];
    }
    @AuraEnabled
    public static Boolean updateAccountsSource(List<Id> aacsIds, String source){
        
        List<Account> accs= new List<Account>();        
        for(Id aacId: aacsIds) {
            Account acc = new Account(Id = aacId, AccountSource = source);            
        	accs.add(acc);
        } 
        update accs;
        return true;
    }
    @AuraEnabled
    public static Boolean deleteAccounts(List<Id> aacsIds){
        
        List<Account> accs= new List<Account>();        
        for(Id aacId: aacsIds) {
            Account acc = new Account(Id = aacId);            
        	accs.add(acc);
        } 
        delete accs;
        return true;
    }
}