/* items=['item1','item2'];
person={
    name:'Krati'
}
module.exports={items,person};
        OR
*/

items=['item1','item2'];
person={
    name:'Krati'
}

//different way to share variable

module.exports.itemNames=items;
module.exports.singleperson=person;