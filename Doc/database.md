
# Dataverse Tables

Table Name:cps_ledgerpostingheader

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_ledgerpostingheaderid | uniqueidentifier |  |
| cps_voucher | nvarchar |  |
| cps_package | LookupTable |  cps_package |

Table Name:	cps_ledgerpostingtransaction

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_ledgerpostingtransactionid | uniqueidentifier |  |
| cps_reference | nvarchar |  |
| cps_amount | decimal |  |
| cps_ledgerpostingsvoucher | LookupTable | cps_ledgerpostingheader |
| cps_ledgeraccount | LookupTable | cps_ledgerintegrationaccount |
| cps_traveler | LookupTable | cps_packagetravellers |
| cps_claim | LookupTable | cps_packageorderpaymentplan |
| cps_ledgerdate | datetime |  |
| cps_postingtype | Choice | cps_postingtype |
| cps_postingevent | Choice | cps_postingeventoptions |


Table Name:	cps_task

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_taskid | uniqueidentifier |  |
| cps_id | nvarchar |  |
| cps_parameters | nvarchar |  |
| cps_taskresults | nvarchar |  |
| cps_executiontasktype | int |  |
| cps_executiontasktypename | nvarchar |  |
| cps_priority | int |  |
| cps_task_parent | uniqueidentifier |  |
| cps_task_parentname | nvarchar |  |


Table Name:	cps_ledgerintegrationaccount
| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_ledgerintegrationaccountid | uniqueidentifier |  |
| cps_name | nvarchar |  |
| cps_account | nvarchar |  |
| cps_accountid | nvarchar |  |
| cps_accounttype | Choice | cps_AccountType |
| cps_create | boolean |  |


Table Name:	cps_packagetravellers
| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_packagetravellersid | uniqueidentifier |  |
| cps_name | nvarchar |  |
| cps_addressstreet1 | nvarchar |  |
| cps_addressstreet2 | nvarchar |  |
| cps_comment | nvarchar |  |
| cps_email | nvarchar |  |
| cps_firstname | nvarchar |  |
| cps_lastname | nvarchar |  |
| cps_package | LookupTable | cps_package |
| cps_packageorder | LookupTable | cps_packageorder |
| cps_passportbirthday | datetime |  |
| cps_passportexpiration | datetime |  |
| cps_passportissuecountry | nvarchar |  |
| cps_passportissuedate | datetime |  |
| cps_passportnationality | nvarchar |  |
| cps_passportnumber | nvarchar |  |
| cps_passportsex | nvarchar |  |
| cps_phone | nvarchar |  |
| cps_price | decimal |  |
| cps_priceaddon | decimal |  |
| cps_priceband | Choice | cps_priceBand |
| cps_source | nvarchar |  |
| cps_ssn | nvarchar |  |
| cps_togethercode | nvarchar |  |
| cps_lastnamepf | nvarchar |  |
| cps_firstnamepf | nvarchar |  |


Table Name:	cps_packageorderpaymentplan

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_packageorderpaymentplanid | uniqueidentifier |  |
| cps_poppid | nvarchar |  |
| cps_amount | decimal |  |
| cps_amountpaid | decimal |  |
| cps_claimid | nvarchar |  |
| cps_claimreference | nvarchar |  |
| cps_claimsenddate | datetime |  |
| cps_datepaid | datetime |  |
| cps_duedate | datetime |  |
| cps_ispaid | boolean |  |
| cps_package | LookupTable | cps_package|
| cps_packageorder | LookupTable| cps_packageorder |
| cps_payeraddress1 | nvarchar |  |
| cps_payeraddress2 | nvarchar |  |
| cps_payercity | nvarchar |  |
| cps_payercountry | nvarchar |  |
| cps_payername | nvarchar |  |
| cps_payerpaymentmethod | LookupTable | cps_paymentmethod |
| cps_payerzip | nvarchar |  |
| cps_ssn | nvarchar |  |
| cps_openamt | decimal |  |
| cps_payeremail | nvarchar |  |
| cps_packagepaymentplan | LookupTable | cps_packagepaymentplan |
| cps_externalkey | nvarchar |  |
| cps_description | nvarchar |  |

Table Name:	cps_ledgerintegrationconfig

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_ledgerintegrationconfigid | uniqueidentifier |  |
| cps_name | nvarchar |  |
| cps_event | Choice | cps_postingeventoptions |
| cps_credit | LookupTable | cps_ledgerintegrationaccount |
| cps_credit2 | LookupTable | cps_ledgerintegrationaccount |
| cps_debit | LookupTable | cps_ledgerintegrationaccount |
| cps_debit2 | LookupTable | cps_ledgerintegrationaccount |
| cps_group | LookupTable | cps_ledgerintegrationgroup |
| cps_action | Choice | cps_actions |
| cps_paymentmethod | LookupTable | cps_paymentmethod |

Table Name:	cps_ledgerintegrationgroup

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_ledgerintegrationgroupid | uniqueidentifier |  |
| cps_groupname | nvarchar |  |

Table Name:	cps_packagetravelersaction

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_packagetravelersactionid | uniqueidentifier |  |
| cps_ptaid | nvarchar |  |
| cps_comment | nvarchar |  |
| cps_package | Lookup |cps_package_  |
| cps_packageaction | Lookup | cps_packageaction |
| cps_travelers | Lookup | cps_packagetravellers |
| cps_qty | int |  |
| cps_price | decimal |  |
| cps_priceband | Choice |  cps_priceband|
| cps_actiontype | Choice | cps_actions |
| cps_offer | Lookup | cps_packageoffer |


Table Name:	cps_packageoffer

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_packageofferid | uniqueidentifier |  |
| cps_offerid | nvarchar |  |
| cps_estimatedcostvalue | decimal |  |
| cps_purchaseqty | decimal |  |
| cps_abbreviation | nvarchar |  |
| cps_purchaseprice | decimal |  |
| cps_availability | int |  |
| cps_oneofgroup | nvarchar |  |
| cps_price | decimal |  |
| cps_package | Lookup | cps_package_  |
| cps_packageaction | Lookup | cps_packageaction |
| cps_purchasecurrency | lookup | transactioncurrency |
| cps_autoregistertravelers | boolean |  |
| cps_priceband | choice | cps_priceband  |
| cps_availabilitypax | decimal |  |
| cps_description | nvarchar |  |
| cps_displayonweb | chocie |cps_webdispalyoptions |
| cps_fromdate | datetime |  |
| cps_onhand | decimal |  |
| cps_sold | int |  |
| cps_pricetotal | decimal |  |
| cps_onhandpax | decimal |  |
| cps_packageincludedquantity | boolean |  |
| cps_purchasedays | decimal |  |
| cps_purchaseextendedprice | decimal |  |
| cps_pricebandsold | decimal |  |
| cps_todate | datetime |  |
| cps_vendorcurrency | nvarchar |  |
| cps_vendorname | nvarchar |  |
| cps_inventorypriceband | choice| cps_priceband |

Table Name:	cps_packageofferdistribution
| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_packageofferdistributionid | uniqueidentifier |  |
| cps_distributionid | nvarchar |  |
| cps_amount | decimal |  |
| cps_amountcurr | decimal |  |
| cps_originalratio | decimal |  |
| cps_purchaseduedate | datetime |  |
| cps_offer | Lookup | cps_packageoffer |
| cps_currency | lookup | transactioncurrency |
| cps_priceband | Choice | cps_priceband  |
| cps_vendor | nvarchar |  |

Table Name:	cps_vendor

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_vendorid | uniqueidentifier |  |
| cps_vendorname | nvarchar |  |
| cps_paymenttermscode | nvarchar |  |
| cps_vendorpostinggroup | nvarchar |  |
| cps_address | nvarchar |  |
| cps_vendorgroup | nvarchar |  |
| cps_country | nvarchar |  |
| cps_taxregno | nvarchar |  |
| cps_vendorno | nvarchar |  |
| cps_iatacode | nvarchar |  |
| cps_vendorstatus | int |  |
| cps_blocked | bit |  |
| cps_serviceprovider | int |  |
| cps_vendorstatusname | nvarchar |  |
| cps_blockedname | nvarchar |  |
| cps_serviceprovidername | nvarchar |  |
| cps_currency | uniqueidentifier |  |
| cps_currencyname | nvarchar |  |

Table Name:	cps_action

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_actionid | uniqueidentifier |  |
| cps_actionname | nvarchar |  |
| cps_actiontype | int |  |
| cps_actiontypename | nvarchar |  |
| cps_vendor | Lookup | cps_vendor |


Table Name:	cps_packageaction

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_packageactionid | uniqueidentifier |  |
| cps_packageactionrefid | nvarchar |  |
| cps_action | Lookup  | cps_action |
| cps_autoregistertravelers | bolean |  |
| cps_fromdate | datetime |  |
| cps_information | nvarchar |  |
| cps_package | lookup | cps_package |
| cps_packageincludedquantity | boolean |  |
| cps_displayonweb | choice | cps_webdispalyoptions |
| cps_todate | datetime |  |
| cps_relatedaction | Lookup |cps_packageaction  |


Table Name:	cps_package

| ColumnName | DataType | LookupTable |
|------------|----------|-------------|
| cps_packageid | uniqueidentifier |  |
| cps_name | nvarchar |  |
| cps_automaticupdatewebtext | bit |  |
| cps_automaticupdatewebtextname | nvarchar |  |
| cps_comment | nvarchar |  |
| cps_confirmationemail | bit |  |
| cps_confirmationemailname | nvarchar |  |
| cps_externalreference | nvarchar |  |
| cps_fromdate | datetime |  |
| cps_item | uniqueidentifier |  |
| cps_notificationonbooking | bit |  |
| cps_notificationonbookingname | nvarchar |  |
| cps_packagedays | int |  |
| cps_packagemaxpax | int |  |
| cps_packagemaxrooms | int |  |
| cps_packagenights | int |  |
| cps_statusmessage | nvarchar |  |
| cps_todate | datetime |  |
| cps_webshorttext | nvarchar |  |
| cps_weburl | nvarchar |  |
| cps_itemcode | nvarchar |  |
| cps_unbookedpax | int |  |
| cps_unpaid | decimal |  |
| cps_itemname | nvarchar |  |
| cps_description | nvarchar |  |
| cps_unpaidissued | decimal |  |
| cps_bookingformmintravelers | int |  |
| cps_webmessagebox | nvarchar |  |
| cps_allowwaitlistregistration | bit |  |
| cps_allowwaitlistregistrationname | nvarchar |  |
| cps_webname | nvarchar |  |
| cps_webmessageboxtop | nvarchar |  |
| cps_webdestination | nvarchar |  |
| cps_webexperience | nvarchar |  |
| cps_brand | nvarchar |  |
| cps_webexcludefromsearch | bit |  |
| cps_webexcludefromsearchname | nvarchar |  |
| cps_packagemaxpaxprev | int |  |
| cps_soldunits | int |  |
| cps_costpaid | decimal |  |
| cps_costcommitted | decimal |  |
| cps_cmratio | decimal |  |
| cps_costperpax | decimal |  |
| cps_availabilitybypriceband | nvarchar |  |
| cps_salestotalc | decimal |  |
| cps_travelerscntc | int |  |
| cps_claimstotalc | decimal |  |
| cps_claimspaidtotalc | decimal |  |
| cps_pricebandsoldout | nvarchar |  |