import { Database } from "./Database.js";
import { MessageBus } from "./MessageBus.js";
import { SearchIndexer } from "./SearchIndexer.js";
import { SmsBroker } from "./SmsBroker.js";
import { UserInterface } from "./UserInterface.js";
import { IObservable } from "./IObservable.js";

var sqlDb=new Database("SQL Database");
var noSqlDb=new Database("NoSQL Database");

var messageBus=new MessageBus();

var searchIndexer = new SearchIndexer();

var smsBroker=new SmsBroker();

var userInterface=new UserInterface();

messageBus.Subscribe(searchIndexer);
messageBus.Subscribe(smsBroker);
messageBus.Subscribe(userInterface);

console.log('Listing message bus observers');
messageBus.GetObservers();

sqlDb.Subscribe(messageBus);
noSqlDb.Subscribe(messageBus);

sqlDb.SaveChanges(true);
sqlDb.SaveChanges({Id:1,Name:'Mick'});
noSqlDb.SaveChanges('this is a valid string');

