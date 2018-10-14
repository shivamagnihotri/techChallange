public class CapAccountsListContoller {


    @AuraEnabled
    public static List<Account> getRecords(){
        
        return [SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, Type, 
                Industry, Description, Phone, Fax, OwnerId, 
				Owner.Name, CreatedById, CreatedBy.Name, 
				LastModifiedById
                FROM Account LIMIT 50000];
    }
}