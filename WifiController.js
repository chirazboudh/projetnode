module.exports = function(app, db, jsonParser){
 
    var fields = ["uid", "ssid", "password"];
    var field = ["ssid", "password"];

 
    console.log("affichage du donnees /api/wifi");
 
    app.get('/api/wifi', function(req, res){
        console.log("SELECT " + fields.join(", ") + " FROM esp");
        db.all("SELECT " + fields.join(", ") + " FROM esp", function(err, rows) {
            res.json(rows);
        });
           });
    console.log("affichage par UID /api/wifi/:UID");

    app.get('/api/wifi/:ID', function(req, res) {
        var ID= req.params.ID;
        db.get("SELECT " + field.join(", ") + " FROM esp where uid= ?",ID, function(err, rows) {
            res.json(rows);
});
    });
    console.log("insertion du donnees /api/wifi/insert/:ID/:ssid/:password");

      app.post('/api/wifi/insert/:ID/:ssid/:password', function(req, res) {
        var ID= req.params.ID;
        var ssid=req.params.ssid;
        var password=req.params.password;
        db.get("INSERT INTO esp  VALUES (?,?,?)",ID,ssid,password, function(err, rows) {
            res.json(rows);
            console.log("insert avec succees");
});
    });
          console.log("suppression du donnees /api/wifi/delete/:ID");
      app.delete('/api/wifi/delete/:ID', function(req, res) {
        var ID= req.params.ID;
        db.get("delete  FROM esp where uid= ?",ID, function(err, rows) {
            res.json(rows);
            console.log("delete avec succees");

});
    });
          console.log("MAP du donnees /api/wifi/update/:ID/:ssid/:password");

      app.put('/api/wifi/update/:ID/:ssid/:password', function(req, res) {
        var ID= req.params.ID;
          var ssid=req.params.ssid;
        var password=req.params.password;
        db.get("UPDATE esp  set ssid=? , password=? where uid= ? ",ssid,password,ID, function(err, rows) {
        res.json(rows);
        console.log("update avec succees");

});
    });
    
     
}