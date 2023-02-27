const StoreController = require('../controllers/store.controller')
module.exports = function(app){
    app.get("/api/store", StoreController.allStores);
    app.post("/api/store", StoreController.createStore);
    app.get("/api/store/:id", StoreController.getStore);
    app.put("/api/store/edit/:id", StoreController.updateStore);
    app.delete("/api/store/:id", StoreController.deleteStore);
}