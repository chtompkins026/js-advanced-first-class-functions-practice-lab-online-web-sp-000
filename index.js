// Code your solution in this file!

  const logDriverNames = function (drivers){ 
   drivers.forEach(function(dname) { 
    console.log(dname.name); 
   }); 
  };
  
  const logDriversByHometown = function(drivers,location) { 
   drivers.forEach(function(dname){
     if (dname.hometown === location){ 
       console.log(dname.name);
     }
   });  
  };
  
  const driversByRevenue = function(drivers){ 
    new_d = drivers
    drivers.sort(function(a,b){ 
      return a.revenue - b.revenue; 
    }); 
  };