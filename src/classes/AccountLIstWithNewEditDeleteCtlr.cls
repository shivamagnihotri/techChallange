public class AccountLIstWithNewEditDeleteCtlr {

    @AuraEnabled
    public static List<Account> getrecords(){
        
        return [SELECT Id, Name, AccountNumber, OwnerId, Owner.Name, AccountSource, AnnualRevenue, Type, 
                CreatedById, CreatedBy.Name, LastModifiedById, Industry, Description, Phone, Fax 
                FROM Account
                 ORDER BY LastModifiedDate DESC
                LIMIT 15
                ];
    }
}